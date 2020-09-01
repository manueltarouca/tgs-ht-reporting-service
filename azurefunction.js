module.exports = function (context, myBlob) {
    context.log('Function triggered!');
    var predictionUrl = process.env.PREDICTION_URL;
    var predictionKey = process.env.PREDICTION_KEY;
    var storageConnectionString = process.env.tgsstorepoc_STORAGE;
    var databaseUserName = process.env.DATABASE_USER_NAME;
    var databasePassword = process.env.DATABASE_PASSWORD;
    var databaseServer = 'tgsserverpoc.database.windows.net';
    var databaseName = 'tgsdb';

    var storage = require('azure-storage');
    var blobService = storage.createBlobService(storageConnectionString);
    var blobName = context.bindingData.name;
    var blobUri = context.bindingData.uri;

    // Read the blob's metadata
    blobService.getBlobMetadata('photos', blobName, (err, result, response) => {
        if (!err) {
            var latitude = result.metadata.latitude;
            var longitude = result.metadata.longitude;
            var id = result.metadata.id;

            // Generate a SAS for the Custom Vision Service
            var now = new Date();
            var expiry = new Date(now).setMinutes(now.getMinutes() + 3);

            var policy = {
                AccessPolicy: {
                    Permissions: storage.BlobUtilities.SharedAccessPermissions.READ,
                    Start: now,
                    Expiry: expiry
                },
            };

            var sas = blobService.generateSharedAccessSignature('photos', blobName, policy);

            // Pass the blob URL to the Custom Vision Service
            var request = require('request');

            var options = {
                url: predictionUrl,
                method: 'POST',
                headers: {
                    'Prediction-Key': predictionKey
                },
                body: {
                    'Url': blobUri + '?' + sas
                },
                json: true
            };

            request(options, (err, result, body) => {
                if (!err) {
                    var probability = body.predictions.find(p => p.tagName.toLowerCase() === 'notempty').probability;
                    var notEmpty = probability > 0.5; // 50% threshold

                    // Update the database
                    var Connection = require('tedious').Connection;
                    var Request = require('tedious').Request;

                    var config =
                    {
                        authentication:
                        {
                            type: 'default',
                            options:
                            {
                                userName: databaseUserName,
                                password: databasePassword
                            }
                        },
                        server: databaseServer,
                        options:
                        {
                            database: databaseName,
                            encrypt: true
                        }
                    };

                    var dbConnection = new Connection(config);

                    dbConnection.on('connect', err => {
                        if (!err) {
                            var query = "INSERT INTO dbo.Store (CameraId, Latitude, Longitude, URL, Timestamp, IsEmpty) " +
                                "VALUES ('" + id + "', " + latitude + ", " + longitude + ", '" + blobUri + "', GETDATE(), " + (notEmpty ? "0" : "1") + ")";

                            var dbRequest = new Request(query, err => {
                                // Called when request completes, with or without error
                                if (err) {
                                    context.log(err);
                                }

                                dbConnection.close();
                                context.done();
                            });

                            dbConnection.execSql(dbRequest);
                        }
                        else {
                            context.log(err);
                            context.done();
                        }
                    });
                }
                else {
                    context.log(err);
                    context.done();
                }
            });
        }
        else {
            context.log(err);
            context.done();
        }
    });
};
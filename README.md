# tgs-ht-reporting-service
 Human tracking reporting service implementation on Microsoft Azure


``az group create --name tgs-store --location westeurope``

```
{
  "id": "/subscriptions/CENSORED-ID/resourceGroups/tgs-store",
  "location": "westeurope",
  "managedBy": null,
  "name": "tgs-store",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}
```

``ACCOUNT_NAME="tgsstorepoc"``

``az storage account create --name $ACCOUNT_NAME --resource-group tgs-store --location westeurope --sku Standard_LRS``


```
{- Finished ..
  "accessTier": "Hot",
  "allowBlobPublicAccess": null,
  "azureFilesIdentityBasedAuthentication": null,
  "blobRestoreStatus": null,
  "creationTime": "2020-09-01T19:34:00.402099+00:00",
  "customDomain": null,
  "enableHttpsTrafficOnly": true,
  "encryption": {
    "keySource": "Microsoft.Storage",
    "keyVaultProperties": null,
    "requireInfrastructureEncryption": null,
    "services": {
      "blob": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2020-09-01T19:34:00.495860+00:00"
      },
      "file": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2020-09-01T19:34:00.495860+00:00"
      },
      "queue": null,
      "table": null
    }
  },
  "failoverInProgress": null,
  "geoReplicationStats": null,
  "id": "/subscriptions/CENSORED-ID/resourceGroups/tgs-store/providers/Microsoft.Storage/storageAccounts/tgsstorepoc",
  "identity": null,
  "isHnsEnabled": null,
  "kind": "StorageV2",
  "largeFileSharesState": null,
  "lastGeoFailoverTime": null,
  "location": "westeurope",
  "minimumTlsVersion": null,
  "name": "tgsstorepoc",
  "networkRuleSet": {
    "bypass": "AzureServices",
    "defaultAction": "Allow",
    "ipRules": [],
    "virtualNetworkRules": []
  },
  "primaryEndpoints": {
    "blob": "https://tgsstorepoc.blob.core.windows.net/",
    "dfs": "https://tgsstorepoc.dfs.core.windows.net/",
    "file": "https://tgsstorepoc.file.core.windows.net/",
    "internetEndpoints": null,
    "microsoftEndpoints": null,
    "queue": "https://tgsstorepoc.queue.core.windows.net/",
    "table": "https://tgsstorepoc.table.core.windows.net/",
    "web": "https://tgsstorepoc.z6.web.core.windows.net/"
  },
  "primaryLocation": "westeurope",
  "privateEndpointConnections": [],
  "provisioningState": "Succeeded",
  "resourceGroup": "tgs-store",
  "routingPreference": null,
  "secondaryEndpoints": null,
  "secondaryLocation": null,
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "statusOfPrimary": "available",
  "statusOfSecondary": null,
  "tags": {},
  "type": "Microsoft.Storage/storageAccounts"
}
```


``az storage container create --name photos --account-name $ACCOUNT_NAME``

```
There is no credential provided in your command and environment, we will query account key for your storage account.
Please provide --connection-string, --account-key or --sas-token as credential, or use `--auth-mode login` if you have required RBAC roles in your command. For more information about RBAC roles instorage, you can see https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-cli.
Setting corresponding environment variable can avoid inputting credential in your command. Please use --help to get more information.
{
  "created": true
}
```

``az storage account keys list --account-name $ACCOUNT_NAME``

```
[
  {
    "keyName": "key1",
    "permissions": "Full",
    "value": "CENSORED"
  },
  {
    "keyName": "key2",
    "permissions": "Full",
    "value": "CENSORED"
  }
]
```

``npm init -y``

```
Wrote to /home/david/package.json:

{
  "name": "david",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

``npm install azure-storage --save``

```
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN david@1.0.0 No description
npm WARN david@1.0.0 No repository field.

+ azure-storage@2.10.3
added 66 packages from 95 contributors and audited 66 packages in 16.303s
found 0 vulnerabilities
```

``vi cameras.json``

``cat cameras.json``

```
[
    {
        "deviceId" : "store_cam_01_bertrand",
        "latitude" : 40.643053,
        "longitude" : -7.911894
    },
    {
        "deviceId" : "store_cam_02_aki",
        "latitude" : 40.674012,
        "longitude" : -7.920833
    },
    {
        "deviceId" : "store_cam_03_staples",
        "latitude" : 40.674010,
        "longitude" : -7.914139
    },
    {
        "deviceId" : "store_cam_04_decorplantas",
        "latitude" : 40.640740,
        "longitude" : -7.918389
    },
    {
        "deviceId" : "store_cam_05_interdesign",
        "latitude" : 40.648531,
        "longitude" : -7.911287
    },
    {
        "deviceId" : "store_cam_06_dmauto",
        "latitude" : 40.661137,
        "longitude" : -7.916446
    },
    {
        "deviceId" : "store_cam_07_ahorta",
        "latitude" : 40.654131,
        "longitude" : -7.919131
    },
    {
        "deviceId" : "store_cam_08_computoviseu",
        "latitude" : 40.650525,
        "longitude" : -7.917315
    },
    {
        "deviceId" : "store_cam_09_formatc",
        "latitude" : 40.646266,
        "longitude" : -7.912457
    },
    {
        "deviceId" : "store_cam_10_cavelusa",
        "latitude" : 40.642678,
        "longitude" : -7.908680
    }
]
```
``vi run.js``

``cat run.js``

``export ACCOUNT_NAME="tgsstorepoc"``
``export ACCOUNT_KEY="CENSORED"``


If you have an image URL:

https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/CENSORED/classify/iterations/Iteration1/url

Set Prediction-Key Header to : CENSORED
Set Content-Type Header to : application/json
Set Body to : {"Url": "https://example.com/image.png"}

If you have an image file:

https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/CENSORED/classify/iterations/Iteration1/image

Set Prediction-Key Header to : CENSORED
Set Content-Type Header to : application/octet-stream
Set Body to : <image file>





``SERVER_NAME="tgsserverpoc"``
``ADMIN_USERNAME="tgsuser"``
``ADMIN_PASSWORD="CENSORED"``
``DATABASE_NAME="tgsdb"``


``az sql server create --name $SERVER_NAME --resource-group tgs-store --location westeurope --admin-user $ADMIN_USERNAME --admin-password $ADMIN_PASSWORD``


```

{- Finished ..
  "administratorLogin": "tgsuser",
  "administratorLoginPassword": null,
  "fullyQualifiedDomainName": "tgsserverpoc.database.windows.net",
  "id": "/subscriptions/CENSORED/resourceGroups/tgs-store/providers/Microsoft.Sql/servers/tgsserverpoc",
  "identity": null,
  "kind": "v12.0",
  "location": "westeurope",
  "minimalTlsVersion": null,
  "name": "tgsserverpoc",
  "privateEndpointConnections": [],
  "publicNetworkAccess": "Enabled",
  "resourceGroup": "tgs-store",
  "state": "Ready",
  "tags": null,
  "type": "Microsoft.Sql/servers",
  "version": "12.0"
}

```

``az sql db create --resource-group tgs-store --server $SERVER_NAME --name $DATABASE_NAME --service-objective S0``


```
{- Finished ..
  "autoPauseDelay": null,
  "catalogCollation": "SQL_Latin1_General_CP1_CI_AS",
  "collation": "SQL_Latin1_General_CP1_CI_AS",
  "createMode": null,
  "creationDate": "2020-09-01T21:04:22.100000+00:00",
  "currentServiceObjectiveName": "S0",
  "currentSku": {
    "capacity": 10,
    "family": null,
    "name": "Standard",
    "size": null,
    "tier": "Standard"
  },
  "databaseId": "CENSORED",
  "defaultSecondaryLocation": "northeurope",
  "earliestRestoreDate": "2020-09-01T21:34:22.100000+00:00",
  "edition": "Standard",
  "elasticPoolId": null,
  "elasticPoolName": null,
  "failoverGroupId": null,
  "id": "/subscriptions/CENSORED/resourceGroups/tgs-store/providers/Microsoft.Sql/servers/tgsserverpoc/databases/tgsdb",
  "kind": "v12.0,user",
  "licenseType": null,
  "location": "westeurope",
  "longTermRetentionBackupResourceId": null,
  "managedBy": null,
  "maxLogSizeBytes": null,
  "maxSizeBytes": 268435456000,
  "minCapacity": null,
  "name": "tgsdb",
  "pausedDate": null,
  "readReplicaCount": 0,
  "readScale": "Disabled",
  "recoverableDatabaseId": null,
  "recoveryServicesRecoveryPointId": null,
  "requestedServiceObjectiveName": "S0",
  "resourceGroup": "tgs-store",
  "restorableDroppedDatabaseId": null,
  "restorePointInTime": null,
  "resumedDate": null,
  "sampleName": null,
  "sku": {
    "capacity": 10,
    "family": null,
    "name": "Standard",
    "size": null,
    "tier": "Standard"
  },
  "sourceDatabaseDeletionDate": null,
  "sourceDatabaseId": null,
  "status": "Online",
  "tags": null,
  "type": "Microsoft.Sql/servers/databases",
  "zoneRedundant": false
}
```

```
CREATE TABLE [dbo].[Store]
(
    [Id] [uniqueidentifier] NOT NULL,
    [CameraId] [nvarchar](50) NULL,
    [Latitude] [real] NULL,
    [Longitude] [real] NULL,
    [Url] [varchar](max) NULL,
    [Timestamp] [datetime] NULL,
    [IsEmpty] [bit] NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
    WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
)
ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Store] ADD DEFAULT (newid()) FOR [Id]
GO

ALTER TABLE [dbo].[Store] ADD DEFAULT (getdate()) FOR [Timestamp]
GO

ALTER TABLE [dbo].[Store] ADD DEFAULT ((0)) FOR [IsEmpty]
GO
```

Query succeeded: Affected rows: 0Affected rows: 0Affected rows: 0Affected rows: 0

``npm install tedious``

```
SELECT TOP 20 Id, CameraId, Latitude, Longitude, Url, Timestamp, FORMAT(Timestamp,'MM/dd/yyyy h:mm:ss tt') AS TimestampLabel, IsEmpty FROM dbo.Store ORDER BY Timestamp DESC
```


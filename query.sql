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
const assetSchema = {
  name: "asset",
  title: "Asset",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "favorite",
      title: "Favorite",
      type: "boolean",
    },
    {
      name: "copyLink",
      title: "Copy Link",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    },
    {
      name: "modalType",
      title: "Modal Type",
      type: "modalType",
    },
    {
      name: "assetType",
      title: "Asset Type",
      type: "string",
      options: { source: "modalType.type" },
    },
  ],
};

export default assetSchema;

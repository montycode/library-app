const dataVizSchema = {
  name: "dataViz",
  title: "Data Viz Modal",
  type: "object",
  fields: [
    {
      name: "applicableKPIFavorites",
      title: "Applicable KPI Favorites",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "assetInfoContext",
      title: "Asset Info Context",
      type: "string",
    },
    {
      name: "interactWithChart",
      title: "Interact with Chart",
      type: "boolean",
    },
  ],
};

export default dataVizSchema;

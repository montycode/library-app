const layoutSchema = {
  name: "layout",
  title: "Layout Modal",
  type: "object",
  fields: [
    {
      name: "amountOfPages",
      title: "Amount of Pages",
      type: "number",
      initialValue: 0,
    },
    {
      name: "kpisBeingUsed",
      title: "KPIs Being Used",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "previewLayout",
      title: "Preview Layout",
      type: "string",
    },
  ],
};

export default layoutSchema;

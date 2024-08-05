const modalTypeSchema = {
  name: "modalType",
  title: "Modal Type",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "KPI", value: "kpi" },
          { title: "Data Viz", value: "dataViz" },
          { title: "Layout", value: "layout" },
          { title: "Storyboard", value: "storyboard" },
        ],
      },
    },
    {
      name: "kpi",
      title: "KPI",
      type: "kpi",
      hidden: ({ parent }: { parent: { type?: string } }) =>
        parent?.type !== "kpi",
    },
    {
      name: "dataViz",
      title: "Data Viz",
      type: "dataViz",
      hidden: ({ parent }: { parent: { type?: string } }) =>
        parent?.type !== "dataViz",
    },
    {
      name: "layout",
      title: "Layout",
      type: "layout",
      hidden: ({ parent }: { parent: { type?: string } }) =>
        parent?.type !== "layout",
    },
    {
      name: "storyboard",
      title: "Storyboard",
      type: "storyboard",
      hidden: ({ parent }: { parent: { type?: string } }) =>
        parent?.type !== "storyboard",
    },
  ],
};

export default modalTypeSchema;

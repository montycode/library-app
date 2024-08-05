const storyboardSchema = {
  name: "storyboard",
  title: "Storyboard Modal",
  type: "object",
  fields: [
    {
      name: "coupledKPIsOrFilters",
      title: "Coupled KPIs/Filters",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "applicableAffiliates",
      title: "Applicable Affiliates",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "requestAccess",
      title: "Request Access",
      type: "boolean",
    },
  ],
};

export default storyboardSchema;

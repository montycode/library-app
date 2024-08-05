const kpiSchema = {
  name: "kpi",
  title: "KPI Modal",
  type: "object",
  fields: [
    {
      name: "businessQuestions",
      title: "Business Questions",
      type: "array",
      of: [{ type: "question" }], // Reference to the question schema
    },
    {
      name: "metricIds",
      title: "Metric IDs",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "calculation",
      title: "Calculation",
      type: "string",
    },
    {
      name: "visualsAvailable",
      title: "Visuals Available",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "affiliateApplicability",
      title: "Affiliate Applicability",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default kpiSchema;

// Asset Base Schema
interface AssetBase {
  _id: string;
  name: string;
  description: string;
  favorite: boolean;
  copyLink: string;
  lastUpdated: string;
}

// Data Viz Modal Schema
interface DataViz {
  applicableKPIFavorites: string[];
  assetInfoContext: string;
  interactWithChart: boolean;
}

// Layout Modal Schema
interface Layout {
  amountOfPages: number;
  kpisBeingUsed: string[];
  previewLayout: string;
}

// Storyboard Modal Schema
interface Storyboard {
  coupledKPIsOrFilters: string[];
  applicableAffiliates: string[];
  requestAccess: boolean;
}

interface Question {
  question: string;
  description: string;
}

// KPI Modal Schema
interface KPI {
  businessQuestions: Question[];
  metricIds: string[];
  calculation: string;
  visualsAvailable: string[];
  affiliateApplicability: string[];
}

type ModalType =
  | { type: "kpi"; kpi: KPI }
  | { type: "dataViz"; dataViz: DataViz }
  | { type: "layout"; layout: Layout }
  | { type: "storyboard"; storyboard: Storyboard };

export interface Asset extends AssetBase {
  modalType: ModalType;
}

export enum AssetType {
  KPI = "kpi",
  DataViz = "dataViz",
  Layout = "layout",
  Storyboard = "storyboard",
}

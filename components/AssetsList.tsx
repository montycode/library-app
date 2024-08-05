import React from "react";
import { Asset } from "@/types";
import AssetsCard from "./AssetsCard";

interface Props {
  assets: Asset[] | [];
}

const AssetsList = ({ assets }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {assets?.length > 0 ? (
        assets.map((asset: Asset) => (
          <AssetsCard
            key={asset._id}
            id={asset._id}
            name={asset.name}
            description={asset.description}
            lastUpdated={asset.lastUpdated}
          />
        ))
      ) : (
        <p className="body-regular text-white-400">No resources found</p>
      )}
    </div>
  );
};

export default AssetsList;

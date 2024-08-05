import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./lib/utils";

interface GetAssetsParams {
  query: string;
  assetType: string;
  page: string;
}

export const getAssets = async (params: GetAssetsParams) => {
  let { query, assetType, page } = params;

  if (assetType === "layouts") assetType = "layout";
  if (assetType === "storyboards") assetType = "storyboard";

  try {
    const assets = await readClient.fetch(
      groq`${buildQuery({
        type: "asset",
        query,
        assetType: assetType,
        page: parseInt(page),
        perPage: 4,
      })}
      {
        _id,
        _createdAt,
        _updatedAt,
        name,
        description,
        copyLink,
        assetType,
        favorite,
      }
      `
    );
    return assets ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

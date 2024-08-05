import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./lib/utils";

interface GetAssetsParams {
  query: string;
  assetType: string;
  page: string;
}

interface GetAssetByIdParams {
  id: string;
}

export const getAssetById = async (params: GetAssetByIdParams) => {
  const { id } = params;

  try {
    const asset = await readClient.fetch(
      groq`*[_id == $id][0] {
        _id,
        _createdAt,
        _updatedAt,
        name,
        description,
        copyLink,
        assetType,
        favorite,
      }`,
      { id }
    );
    return asset ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

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

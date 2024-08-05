import React from "react";
import Image from "next/image";
import DefaultImage from "@/public/images/asset_img.jpg";

const FeaturedItems = () => {
  const items = [
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
    {
      name: "Item Name",
      description: "Short description of the item goes nicely here.",
      date: "06/27/2024",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Featured</h2>
      <p className="mb-6">Curated top picks from this week</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={item.name + index}
            className="p-2 border rounded-lg flex items-center space-x-2 bg-white shadow-sm"
          >
            <div className="p-2 bg-gray-100 flex items-center justify-center rounded-lg">
              <Image
                src={DefaultImage}
                className="w-14 h-14"
                alt="Asset Image"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-sm text-gray-400 mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;

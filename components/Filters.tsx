"use client";
import React, { useState } from "react";
import { formUrlQuery } from "@/sanity/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

const Filters = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabs = ["Featured", "KPI", "Layouts", "Storyboards"];

  const handleFilter = (tab: string) => {
    let newUrl = "";

    if (activeTab === "featured" && tab === "featured") {
      setActiveTab("");

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["assetType"],
      });
    } else {
      setActiveTab(tab);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "assetType",
        value: tab.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex rounded-lg w-full justify-between py-1 overflow-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-sm font-medium min-w-[120px] max-w-[200px] ${
            activeTab === tab
              ? "bg-white text-black shadow-md"
              : "text-gray-500 hover:text-black"
          } rounded-md transition-colors duration-300`}
          onClick={() => handleFilter(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Filters;

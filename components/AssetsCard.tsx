"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import DefaultImage from "@/public/images/asset_img.jpg";

interface Props {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
}

const AssetsCard = ({ id, name, description, lastUpdated }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div
        key={id}
        onClick={openModal}
        onKeyDown={openModal} // Add a keyboard listener
        tabIndex={0} // Make the element focusable
        className="p-2 border rounded-lg flex items-center space-x-2 bg-white shadow-sm cursor-pointer"
      >
        <div className="p-2 bg-gray-100 flex items-center justify-center rounded-lg">
          <Image src={DefaultImage} className="w-14 h-14" alt="Asset Image" />
        </div>
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-400 mt-2">{lastUpdated}</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AssetsCard;

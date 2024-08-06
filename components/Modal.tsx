import React, { useEffect } from "react";
import { AiOutlineLink, AiOutlineClose } from "react-icons/ai";
import { BsBookmarkStar, BsGrid3X3 } from "react-icons/bs";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: Props) => {
  const closeModal = () => onClose();

  const handleBackgroundClick: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    // If the click occurs on the dark background, close the modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // Add an event listener to close the modal with the "Esc" key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 "
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[450px] md:max-w-[700px] mx-4 md:mx-0 max-h-[80vh] overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-end items-center">
            <AiOutlineLink className="text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out cursor-pointer mx-2 h-6 w-6" />
            <AiOutlineClose
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center mb-4 mt-4">
            <div className="p-4 bg-slate-200 rounded-lg">
              <BsGrid3X3 className="w-8 h-8 text-slate-600" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-gray-900">
                INTES{" "}
                <span className="text-sm text-gray-500 font-normal text-">
                  Layout
                </span>
              </h2>
              <span className="text-sm text-gray-500">
                Descriptive name of the layout
              </span>
            </div>
          </div>
          {/* Description */}
          <p className="mt-4 text-gray-700 text-center">
            Those options are already baked in with this model shoot me an email
            clear blue water but we need distributors to evangelize the new line
            to local markets.
          </p>

          {/* Tags */}
          <div className="mt-3 flex justify-center space-x-2">
            <span className="text-sm bg-gray-200 rounded-full px-3 py-1">
              #comms
            </span>
            <span className="text-sm bg-gray-200 rounded-full px-3 py-1">
              #coverage
            </span>
            <span className="text-sm bg-gray-200 rounded-full px-3 py-1">
              #stakeholders
            </span>
          </div>

          {/* Statistics */}
          <div className="mt-4 grid grid-cols-4 gap-4 text-center">
            <div className="border-r-[1px] border-slate-300">
              <span className="text-lg font-semibold">2485</span>
              <p className="text-sm text-gray-500">Used</p>
            </div>
            <div className="border-r-[1px] border-slate-300">
              <span className="text-lg font-semibold">Universal</span>
              <p className="text-sm text-gray-500">Type</p>
            </div>
            <div className="border-r-[1px] border-slate-300">
              <span className="text-lg font-semibold">6</span>
              <p className="text-sm text-gray-500">Pages No.</p>
            </div>
            <div>
              <span className="text-lg font-semibold">07/23/2024</span>
              <p className="text-sm text-gray-500">Last Updated</p>
            </div>
          </div>
          <div className="h-[300px] w-full"></div>

          {/* Business Questions */}
          <div className="mt-6 space-y-2">
            <h3 className="font-medium text-xl text-gray-900">
              Business Questions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-900 font-bold">Question 1</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-900 font-bold">Question 2</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-900 font-bold">Question 3</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-900 font-bold">Question 4</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 w-full flex justify-center">
            <button className="text-white bg-slate-900 w-full rounded-lg p-2 font-medium flex justify-center items-center">
              <BsBookmarkStar className="mr-2" /> Favorite Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

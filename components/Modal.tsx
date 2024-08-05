import React, { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: Props) => {
  console.log("Modal is open:", isOpen);

  const closeModal = () => {
    console.log("closeModal");
    onClose();
  };
  const handleBackgroundClick: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    // Si el clic ocurre en el fondo oscuro, cierra el modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // Agregar un event listener para cerrar el modal con la tecla "Escape"
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg mx-4 md:mx-0">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-medium text-gray-900">INTES</h2>
              <span className="text-sm text-gray-500">Layout</span>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700">
            Those options are already baked in with this model shoot me an email
            clear blue water but we need distributors to evangelize the new line
            to local markets.
          </p>

          {/* Tags */}
          <div className="mt-3 flex space-x-2">
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
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-lg font-semibold">2485</span>
              <p className="text-sm text-gray-500">Used</p>
            </div>
            <div>
              <span className="text-lg font-semibold">Universal</span>
              <p className="text-sm text-gray-500">Type</p>
            </div>
            <div>
              <span className="text-lg font-semibold">6</span>
              <p className="text-sm text-gray-500">Pages No.</p>
            </div>
          </div>

          {/* Business Questions */}
          <div className="mt-6 space-y-2">
            <h3 className="font-medium text-gray-900">Business Questions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Question 1</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Question 2</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Question 3</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Question 4</p>
                <p className="text-gray-700">
                  Short description of the item goes nicely here.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <button className="text-blue-600 font-medium">Favorite item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

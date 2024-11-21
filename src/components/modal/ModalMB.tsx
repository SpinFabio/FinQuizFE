import React from "react";
import { classNames } from "../../utils/tailwind-utils";

interface ModalMBProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalMB: React.FC<ModalMBProps> = ({ isOpen, onClose, children }) => {
  const visibility = isOpen ? "block" : "hidden";
  return (
    <div
      className={classNames(
        visibility,
        "fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center backdrop-blur-md",
      )}
      onClick={onClose}
    >
      <div
        className="z-[101] rounded-md  p-4"
        onClick={(e) => e.stopPropagation()} // questo serve per NON far chiudere il mdal quando proviamo a cliccar enel children
      >
        {children}
      </div>
    </div>
  );
};

export default ModalMB;

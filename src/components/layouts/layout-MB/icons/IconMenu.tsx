import React from "react";

interface IconMenuProps {
  onAction: () => void;
  draw?: string;
  description?: string;
}

const IconMenu: React.FC<IconMenuProps> = ({ onAction, description, draw }) => {
  return (
    <div
      className="flex w-8 flex-col items-center justify-center py-2"
      onClick={onAction}
    >
      <div className="flex items-center justify-center overflow-hidden stroke-my-bgContrast">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          strokeWidth={1.5}
          className="size-6 text-icons"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={draw} />
        </svg>
      </div>
      <p className="text-center text-info-mb font-info-mb text-my-bgContrast">
        {description}
      </p>
    </div>
  );
};

export default IconMenu;

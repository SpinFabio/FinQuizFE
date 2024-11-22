import React from "react";

interface IconMenuProps {
  onAction: () => void;
  draw?: string;
  description?: string;
}

const IconMenu: React.FC<IconMenuProps> = ({ onAction, description, draw }) => {
  return (
    <div
      className="flex w-8 flex-col items-center justify-center py-4 pt-5"
      onClick={onAction}
    >
      <div className="flex items-center justify-center overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-primary-contrast"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={draw} />
        </svg>
      </div>
      <p className="text-center text-info-mb font-info-mb text-primary-contrast">
        {description}
      </p>
    </div>
  );
};

export default IconMenu;

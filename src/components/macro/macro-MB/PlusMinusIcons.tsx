import React from "react";

interface PlusMinusIconsProps {
  onAction: () => void;
  type: "plus" | "minus";
  style?: boolean;
}

const PlusMinusIcons: React.FC<PlusMinusIconsProps> = ({
  type,
  onAction,
  style,
}) => {
  return (
    <div onClick={onAction}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style ? "stroke-white" : "stroke-primary"}
      >
        <path
          d={
            type === "plus"
              ? "M22 14V30M14 22H30M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z"
              : "M14 22H30M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z"
          }
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PlusMinusIcons;

import React from "react";
import BaseProfileIcon from "../../../base-icons/BaseProfileIcon";

interface ReusableProfileIconProps {
  onActon: () => void;
}

const ReusableProfileIcon: React.FC<ReusableProfileIconProps> = ({
  onActon,
}) => {
  return (
    <div
      className="flex rounded-bl-[42px] bg-gradient-to-b from-primary to-primary-dark p-5"
      onClick={onActon}
    >
      <BaseProfileIcon />
    </div>
  );
};

export default ReusableProfileIcon;

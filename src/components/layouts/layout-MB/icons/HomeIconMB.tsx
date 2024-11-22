import React from "react";
import { Link } from "react-router-dom";
import BaseHomeIcon from "../../../base-icons/BaseHomeIcon";

interface HomeIconMBProps {
  /* propName: propType */
}

const HomeIconMB: React.FC<HomeIconMBProps> = (
  {
    /* props */
  },
) => {
  return (
    <div className="z-50 flex items-start justify-start">
      <div className="flex rounded-br-[50px] bg-gradient-to-b from-primary to-primary-dark py-4 pl-3 pr-6">
        <BaseHomeIcon />
      </div>
    </div>
  );
};

export default HomeIconMB;

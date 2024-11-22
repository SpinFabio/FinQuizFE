import React from "react";
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
      <div className="flex rounded-br-[42px] bg-gradient-to-b from-primary to-primary-dark p-5">
        <BaseHomeIcon />
      </div>
    </div>
  );
};

export default HomeIconMB;

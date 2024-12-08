import React from "react";

interface BaseProfileIconProps {
  /* propName: propType */
}

const BaseProfileIcon: React.FC<BaseProfileIconProps> = (
  {
    /* props */
  },
) => {
  return (
    <>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-primary stroke-2"
      >
        <path d="M7.19995 26.1C7.81484 25.4113 10.6947 22.2422 11.5386 22.2422H20.4618C21.6848 22.2422 24.1812 24.8692 24.7999 25.7952M28.7999 16.5C28.7999 23.5693 23.0692 29.3 15.9999 29.3C8.93071 29.3 3.19995 23.5693 3.19995 16.5C3.19995 9.43077 8.93071 3.70001 15.9999 3.70001C23.0692 3.70001 28.7999 9.43077 28.7999 16.5ZM20.5851 12.1373C20.5851 9.69527 18.5236 7.70001 16.0003 7.70001C13.4772 7.70001 11.4156 9.69527 11.4156 12.1373C11.4156 14.5793 13.4772 16.5746 16.0003 16.5746C18.5235 16.5746 20.5851 14.5793 20.5851 12.1373Z" />
      </svg>
    </>
  );
};

export default BaseProfileIcon;

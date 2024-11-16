import React from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

interface LayoutProps {
  /* propName: propType */
}

const Layout: React.FC<LayoutProps> = (
  {
    /* props */
  },
) => {
  return (
    <>
      <div className="block sm:hidden"><MobileLayout/></div>
      <div className="hidden sm:block"><DesktopLayout/></div>
    </>
  );
};

export default Layout;

import React from "react";
import DesktopLayout from "./layout-DT/DesktopLayout";
import MobileLayout from "./layout-MB/MobileLayout";

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

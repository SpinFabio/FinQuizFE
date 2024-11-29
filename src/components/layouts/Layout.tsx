import React from "react";
import DesktopLayout from "./layout-DT/DesktopLayout";
import MobileLayout from "./layout-MB/MobileLayout";
import { MacroContextProvider } from "../macro/macro-MB/useMacro";
import { MicroContextProvider } from "../micro/micro-MB/useMicro";

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
      <div className="block sm:hidden">
        <MacroContextProvider>
          <MicroContextProvider>
            <MobileLayout />
          </MicroContextProvider>
        </MacroContextProvider>
      </div>
      <div className="hidden sm:block">
        <DesktopLayout />
      </div>
    </>
  );
};

export default Layout;

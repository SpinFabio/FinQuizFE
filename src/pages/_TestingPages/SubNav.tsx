import React from "react";
import { Link ,Outlet } from "react-router-dom";

const SubNav: React.FC = () => {
  return (
    <>
      <p><Link to="/esercitatiT/mod1T">mod1</Link></p>
      <p><Link to="/esercitatiT/mod2T">mod2</Link></p>
      <p><Link to="/esercitatiT/mod3T">mod3</Link></p>
      <Outlet />

    </>
  );
};

export default SubNav;

import React from "react";
import { Link } from "react-router-dom";
import logoBig from "../../images/LogoOrizzontalBlue.png";
import logoSmall from "../../images/LogoSmallBlue.png";
import { LANDING_PAGE_ROUTE } from "../../config/routes";

interface LogoBlueProps {
  /* propName: propType */
}

const LogoBlue: React.FC<LogoBlueProps> = (
  {
    /* props */
  },
) => {
  return (
    <div className={"w-full"}>
      <Link to={LANDING_PAGE_ROUTE}>
        <div id={"logo-container"} className={"my-h-5 m-5"}>
          <img src={logoBig} alt="Logo Finquiz" className={"h-full w-auto hidden sm:block"} />
          <img src={logoSmall} alt="Logo Finquiz" className={"h-full w-auto block sm:hidden"} />
        </div>
      </Link>
    </div>
  );
};

export default LogoBlue;

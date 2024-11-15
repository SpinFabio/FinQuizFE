import React from 'react';
import { Link } from 'react-router-dom';
import FinquizLogoBlu from "../../images/FinquizLogoBlu.png";

interface LogoBlueProps {
  /* propName: propType */
}

const LogoBlue: React.FC<LogoBlueProps> = ({ /* props */ }) => {
  return (
      <div className={"w-full "}>
        <Link to="/">
        <div id={"logo-container"} className={"my-h-5 m-5 "}>
          <img
            src={FinquizLogoBlu}
            alt="Logo Finquiz"
            className={"w-auto h-full"}
          />
        </div>
        </Link>
      </div>
    
  );
};

export default LogoBlue;
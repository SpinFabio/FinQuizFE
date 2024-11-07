import React from 'react';
import FinquizLogoBlu from "../../images/FinquizLogoBlu.png";

interface LogoBlueProps {
  /* propName: propType */
}

const LogoBlue: React.FC<LogoBlueProps> = ({ /* props */ }) => {
  return (
      <div className={"w-full "}>
        <div id={"logo-container"} className={"my-h-5 m-5 "}>
          <img
            src={FinquizLogoBlu}
            alt="Logo Finquiz"
            className={"w-auto h-full"}
          />
        </div>
      </div>
    
  );
};

export default LogoBlue;
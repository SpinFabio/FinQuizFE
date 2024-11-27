import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../config/routes";

interface RedirectAuthProps {
  typeAuth: "login" | "register";
}

const RedirectAuth: React.FC<RedirectAuthProps> = ({ typeAuth }) => {
  let text = "";
  let linkTo = "";
  if (typeAuth === "login") {
    text = "Non hai un account?";
    linkTo = REGISTER_ROUTE;
  } else {
    text = "Hai già un account? ";
    linkTo = LOGIN_ROUTE;
  }

  return (
    <>
      <p className="typo-info mb-4 text-info">
        {text + " "}
        <Link to={linkTo} className="text-primary">
          {typeAuth === "login" ? "Registrati ora!" : "Accedi qui. "}
        </Link>
      </p>
    </>
  );
};

export default RedirectAuth;

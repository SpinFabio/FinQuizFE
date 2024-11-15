import React from "react";
import { Link } from "react-router-dom";

interface RedirectAuthProps {
  typeAuth: "login" | "register";
}

const RedirectAuth: React.FC<RedirectAuthProps> = ({ typeAuth }) => {
  let text = "";
  let linkTo = "";
  if (typeAuth === "login") {
    text = "Non hai un account?";
    linkTo = "/register";
  } else {
    text = "Hai già un account? ";
    linkTo = "/login";
  }

  return (
    <>
      <p className="typo-info text-info mb-4">
        {text + " "}
        <Link to={linkTo} className="text-primary">
          {typeAuth === "login" ? "Registrati ora!" : "Accedi qui. "}
        </Link>
      </p>
    </>
  );
};

export default RedirectAuth;

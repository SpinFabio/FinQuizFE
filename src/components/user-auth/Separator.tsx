import React from "react";

interface SeparatorProps {
  type: "login" | "register";
}

const Separator: React.FC<SeparatorProps> = ({ type }) => {
  let text = "";

  if (type === "login") {
    text = "oppure Accedi con l'email";
  }
  if (type === "register") {
    text = "oppure Registrati con l'email";
  }

  return (
    <div className="flex h-auto w-full flex-grow items-center justify-center">
      <p className=" mt-3 text-sm typo-info text-info">{text}</p>
    </div>
  );
};


export default Separator;

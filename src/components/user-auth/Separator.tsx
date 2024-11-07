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
      <p className="mb-2 mt-4 text-sm text-info">{text}</p>
    </div>
  );
};

const Line: React.FC = () => {
  return (
    <div className="flex h-[1px] w-auto flex-grow border border-info text-info"></div>
  );
};

export default Separator;

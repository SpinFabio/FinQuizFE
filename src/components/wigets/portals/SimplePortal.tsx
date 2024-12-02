import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

const SimplePortal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

export default SimplePortal;

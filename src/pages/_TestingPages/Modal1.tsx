import React from "react";

interface Modal1Props {
  num: number;
}

const Modal1: React.FC<Modal1Props> = ({ num }) => {
  return (
    <>
      <h1>Siamo in Modalità {num}</h1>
    </>
  );
};

export default Modal1;

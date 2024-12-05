import { motion } from "framer-motion";
import React from "react";

interface ChildTestProps {
  /* Prop types go here if needed */
}

const ChildTest: React.FC<ChildTestProps> = () => {
  return (
    <motion.div className="bg- p-5">
      <div className="bg-my-red size-10 shadow-2xl shadow-blue-800"></div>
      <div className="bg-my-red size-10 shadow shadow-blue-800"></div>
    </motion.div>
  );
};

export default ChildTest;

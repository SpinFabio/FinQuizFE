import { motion } from "framer-motion";
import React, { useState } from "react";

interface ChildTestProps {
  /* Prop types go here if needed */
}

const ChildTest: React.FC<ChildTestProps> = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <motion.div
      className="bg-red-400 p-5"
      animate={{ scale: animate ? 3 : 1 }}
      transition={{ duration: 0.1 }}
      onClick={() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 100);
      }}
    >
      premimi
    </motion.div>
  );
};

export default ChildTest;

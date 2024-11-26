import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children }) => {
  const [click, setClick] = useState(false);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: click ? 1.1 : 1 }}
      transition={{ duration: 0.1 }}
      onClick={() => {
        setClick((prev) => !prev);
        setTimeout(() => setClick(false), 100);
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton;

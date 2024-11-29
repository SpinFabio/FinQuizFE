import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  maxScale?: number;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  maxScale,
}) => {
  const [click, setClick] = useState(false);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: click ? maxScale || 1.1 : 1 }}
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

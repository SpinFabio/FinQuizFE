import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

interface ChildTestProps {
  /* propName: propType */
}

const ChildTest: React.FC<ChildTestProps> = (
  {
    /* props */
  },
) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [slider,setSlider]=useState(50)

  return (
    <motion.div
      onClick={() => setIsAnimating(!isAnimating)}
      initial={{x: "100%"}}
      animate={{
        x:"0%",
        opacity: slider/100,
      }}
      className="bg-red-600 p-8"
    >
      <input type="range" min="10" max="100" value={slider} onChange={e=>setSlider(Number(e.target.value))}></input>
      {slider}
    </motion.div>
  );
};

export default ChildTest;

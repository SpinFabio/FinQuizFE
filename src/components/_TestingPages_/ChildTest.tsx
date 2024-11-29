import { motion } from "framer-motion";
import React, { useState } from "react";
import MyNumInput from "../layouts/layout-MB/MyNumInput";

interface ChildTestProps {
  /* Prop types go here if needed */
}

const ChildTest: React.FC<ChildTestProps> = () => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <motion.div className="bg-red-400 p-5">
      <MyNumInput
        value={value}
        handleChange={(num: number) => {
          if(num%3==0&&num!=0){
            return
          }
          setValue(num);
        }}
        style={true}
      />
    </motion.div>
  );
};

export default ChildTest;

import React, { useEffect, useState } from "react";
import { MacroMicroData } from "../../../state/micro/microTopicList";
import { motion } from "framer-motion";
import MicroInnerListElem from "./MicroInnerListElem";
import { classNames } from "../../../utils/tailwind-utils";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";

interface MicroListElemProps {
  macroMicroData: MacroMicroData;
}

const MicroListElem: React.FC<MicroListElemProps> = ({ macroMicroData }) => {
  const arrowIcon = (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.44461 4.04163L14.1668 8.99996M14.1668 8.99996L9.44461 13.9583M14.1668 8.99996L2.8335 8.99996"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const [isOpen, setIsOpen] = useState(false);
  
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('animate-innerMicroElementIn');
    } else {
      setAnimationClass('animate-innerMicroElementout');
    }
  }, [isOpen]);

  const lenght = macroMicroData.microArray.length;
  const delayMs = 50;
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <>
      <div id="top-part" className="m-2">
        <div
          className={classNames(
            "z-50 flex flex-row items-center justify-start border border-info stroke-black p-2",
            isOpen ? "rounded-t-lg" : "rounded-lg",
            macroMicroData.sumOfSelected > 0
              ? "bg-primary stroke-white text-primary-contrast"
              : "",
          )}
          onClick={handleOpenClose}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} className="p-2">
            {arrowIcon}
          </motion.div>
          <div style={{ userSelect: "none" }}>{macroMicroData.nameMacro}</div>
          <div className="flex flex-grow flex-row-reverse pr-2">
            {macroMicroData.sumOfSelected > 0
              ? macroMicroData.sumOfSelected
              : ""}
          </div>
        </div>
        {isOpen ? (
          <>
            <div className="z-40 flex animate-appearIn flex-row justify-between bg-info py-2 pl-4 text-primary-contrast">
              <div className="text-info-mb">
                Quiz selezionati in questa sezione:
              </div>
              <div className="flex w-10 justify-center border-l-2 text-center">
                {" "}
                {macroMicroData.sumOfSelected}
              </div>
            </div>
            <div>
              {macroMicroData.microArray.map((microTp, i) => (
                <div
                  key={i}
                  style={{ animationDelay: `${delayMs * i}ms` }}
                  className={classNames("opacity-0",animationClass)}
                >
                  <MicroInnerListElem
                    key={i}
                    microTopic={microTp}
                    isLast={lenght - 1 === i}
                    macroId={macroMicroData.idMacro}
                  />
                </div>
              ))}
              <div
                className="flex w-full items-center justify-center"
                style={{
                  animationDelay: `${macroMicroData.microArray.length * delayMs}ms`,
                }}
              >
                <div
                  onClick={handleOpenClose}
                  className="-rotate-90 rounded-l-lg bg-gradient-to-l from-primary to-primary-dark stroke-white p-4"
                >
                  <AnimatedButton>{arrowIcon}</AnimatedButton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MicroListElem;

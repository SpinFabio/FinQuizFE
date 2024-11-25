import { motion } from "framer-motion";
import React from "react";
import { classNames } from "../../../../utils/tailwind-utils";
import { useQuizConsumer } from "../useQuiz";

interface DotsProps {
  /* propName: propType */
}

const Dots: React.FC<DotsProps> = (
  {
    /* props */
  },
) => {
  let NUMBER_OF_DOTS = 11;
  const myHook = useQuizConsumer();

  const renderDots = Array.from({ length: NUMBER_OF_DOTS }, (_, i) => {
    const middleIndex = Math.floor(NUMBER_OF_DOTS / 2); // 5
    const currentIndex = myHook.currentIndex;
    const coveredIndexSX = middleIndex - currentIndex; // da 0 al coveredIndex li copriamo
    const maxArrayIndex = myHook.quizArray.length - 1;
    const coveredIndexDX =
      NUMBER_OF_DOTS - (currentIndex - maxArrayIndex + middleIndex + 1);

    let bgColor = "bg-neutral-400"; // colore del not visualized
    let sizeOfDot = "size-2";

    let canColor = true;

    if (i === 0 || i === NUMBER_OF_DOTS - 1) {
      sizeOfDot = "size-1";
    }
    if (i === 1 || i === NUMBER_OF_DOTS - 2) {
      sizeOfDot = "size-2";
    }
    if (i === middleIndex) {
      sizeOfDot = "size-4";
    }
    if (i === middleIndex + 2 || i === middleIndex - 2) {
      sizeOfDot = "size-3";
    }
    if (i === middleIndex + 1 || i === middleIndex - 1) {
      sizeOfDot = "size-[14px] ";
    }

    if (middleIndex > currentIndex) {
      // entriamo se dobbiamo coprire qualche punto a SX
      if (i < coveredIndexSX) {
        canColor = false;
        bgColor = "bg-white";
      }
    }

    if (currentIndex > maxArrayIndex - middleIndex - 1) {
      console.log("dobbiamo coprire qualcosa");
      if (i > coveredIndexDX) {
        canColor = false;
        bgColor = "bg-white";
      }
    }
    // gestine dell'indice sonda colore: la sonda colore inizia a testare
    if (canColor) {
      //posso alterare il colore del dot e devo scegliere che colore dargli
      const colorIndex: number = currentIndex - middleIndex + i;
      if (colorIndex >= 0 && colorIndex <= maxArrayIndex) {
        if (myHook.quizArray[colorIndex].isFlagged) {
          bgColor = "bg-my-orange";
        } else if (!(myHook.quizArray[colorIndex].selectedAnswer === "")) {
          bgColor = "bg-primary";
        } else if (myHook.quizArray[colorIndex].isViewed) {
          bgColor = "bg-primary-light";
        }
      }
    }

    console.log(
      `Current Index: ${currentIndex}, Max Array Index: ${maxArrayIndex}, Middle Index: ${middleIndex}, Covered Index DX: ${coveredIndexDX}`,
    );

    return (
      <div key={i} className={classNames(sizeOfDot, "rounded-full", bgColor)} />
    );
  });

  return (
    <div className="mt-1 flex w-full flex-row items-center justify-evenly">
      {renderDots}
    </div>
  );
};

export default Dots;

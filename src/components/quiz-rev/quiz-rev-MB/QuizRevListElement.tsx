import React, { useState } from "react";
import { ReviewedQuizFE } from "../../../common/quiz-interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { classNames } from "../../../utils/tailwind-utils";

interface QuizRevListElementProps {
  quiz: ReviewedQuizFE;
}

const QuizRevListElement: React.FC<QuizRevListElementProps> = ({ quiz }) => {
  const [isOpen, setIsOpen] = useState(false);

  let myBorderColor = "border-my-border-color";
  if (quiz.selectedAnswer === "") {
  } else if (quiz.isCorrect) {
    myBorderColor = "border-my-green";
  } else {
    myBorderColor = "border-my-red";
  }

  const commonStyles = "p-4 ";

  return (
    <div className="my-4">
      <motion.div
        style={{ transformOrigin: "top" }}
        className={classNames(
          "rounded-t-3xl border-l border-r border-t ",
          myBorderColor,
          commonStyles,
          isOpen ? "" : "rounded-b-3xl border-b shadow-my-shadow-on-bg shadow-md",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="font-h1-mb ">Quiz: {quiz.realIndex + 1}</p>
        {quiz.question}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={classNames(
              "rounded-b-3xl border-b border-l border-r ",
              myBorderColor,
              commonStyles,
            )}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 0.1 }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
          >
            {quiz.allAnswers.map((ans, i) => {
              let ansBorderColor = "";
              if (ans === quiz.correctAnswer) {
                ansBorderColor = "border-my-green";
              } else if (!quiz.isCorrect && ans === quiz.selectedAnswer) {
                ansBorderColor = "border-my-red";
              }

              return (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className={classNames(
                    "my-3 animate-appearIn rounded-2xl border p-2 px-4 opacity-0 ",
                    ansBorderColor,
                  )}
                >
                  {ans}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizRevListElement;

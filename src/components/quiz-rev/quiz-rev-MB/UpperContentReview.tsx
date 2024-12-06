import React from "react";
import { motion } from "framer-motion";
import { classNames } from "../../../utils/tailwind-utils";

export interface StatState {
  numberOfCorrectQuizzes: number;
  percentage: number;
  score: number;
  totalScore: number;
  totalQuizzes: number;
}

interface UpperContentReviewProps {
  statState: StatState;
}

const UpperContentReview: React.FC<UpperContentReviewProps> = ({
  statState,
}) => {
  let i = 1;
  const delay = 100;

  const commonAnimation = "animate-appearIn opacity-0";
  return (
    <div className="mb-9 flex w-full flex-col items-center justify-center mt-8">
      <div className="flex max-w-12 flex-col items-center justify-center p-5 text-center">
        <h1
          className={classNames("text-h1-mb font-h1-mb", commonAnimation)}
          style={{ animationDelay: `${i++ * delay}ms` }}
        >
          Revisione della Prova
        </h1>
        <h2
          className={commonAnimation}
          style={{ animationDelay: `${i++ * delay}ms` }}
        >
          risultato della prova:
        </h2>
        <h3
          className={classNames(
            "-my-4 text-[5rem] font-h1-mb",
            commonAnimation,
          )}
          style={{ animationDelay: `${i++ * delay}ms` }}
        >
          {Math.round(statState.percentage)}%
        </h3>
        <p
          className={commonAnimation}
          style={{ animationDelay: `${i++ * delay}ms` }}
        >{`${statState.numberOfCorrectQuizzes}/${statState.totalQuizzes} quiz corretti`}</p>
        <p
          className={commonAnimation}
          style={{ animationDelay: `${i++ * delay}ms` }}
        >{`${statState.score}/${statState.totalScore} punteggio`}</p>
      </div>
    </div>
  );
};

export default UpperContentReview;

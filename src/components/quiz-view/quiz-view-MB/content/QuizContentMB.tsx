import AnswareContainer from "./AnswareContainer";
import { useQuizConsumer } from "../useQuiz";
import { DUMMY_DATA_QUIZ } from "../../dummyQuiz";
import { setCurrentQuizzes } from "../../../../state/quiz/quiz";

interface QuizContentMBProps {
  /* propName: propType */
}

const QuizContentMB: React.FC<QuizContentMBProps> = (
  {
    /* props */
  },
) => {
  const myHook = useQuizConsumer();
  


  const currentQuiz = myHook.getCurrentQuiz();
  console.log(currentQuiz);

  return (
    <>
      <div
        key={myHook.triggerAnimation}
        className="flex h-full w-full animate-appearIn flex-col items-center justify-center px-4"
      >
        <div id="question">
          <div className="mb-5 rounded-lg border border-info p-2">
            <div className="flex flex-row justify-between py-1 text-info-mb font-h1-mb">
              <div>{currentQuiz.macro}</div>
              <div>{currentQuiz.score}</div>
            </div>
            <div className="text-quiz-mb">{currentQuiz.question}</div>
          </div>
        </div>
        <div id="answares">
          {currentQuiz.allAnswers.map((opt, i) => (
            <AnswareContainer
              key={i}
              question={opt}
              isSelected={opt === currentQuiz.selectedAnswer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizContentMB;

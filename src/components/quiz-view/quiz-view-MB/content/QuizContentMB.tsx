import AnswareContainer from "./AnswareContainer";
import { useQuizConsumer } from "../useQuiz";
import ModalList from "./ModalList";
import ModalExit from "./ModalExit";
import ModalOptions from "./ModalOption";
import ModalOption from "./ModalOption";

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
  //console.log(currentQuiz);

  return (
    <>
      <div
        key={myHook.triggerAnimation}
        className="flex h-full w-full animate-appearIn flex-col items-center justify-center px-4"
      >
        <div id="question" className="w-full">
          <div className="border-my-border-color mb-5 rounded-lg border p-2">
            <div className="flex flex-row justify-between py-1 text-info-mb font-h2-mb">
              <div>
                <p className="inline-block font-h1-mb">
                  {myHook.currentIndex + 1}.
                </p>
                {currentQuiz.macro}
              </div>
              <div>pt.{currentQuiz.score}</div>
            </div>
            <div className="text-quiz-mb">{currentQuiz.question}</div>
          </div>
        </div>
        <div id="answares" className="w-full">
          {currentQuiz.allAnswers.map((opt, i) => (
            <AnswareContainer
              key={i}
              question={opt}
              isSelected={opt === currentQuiz.selectedAnswer}
            />
          ))}
        </div>
      </div>

      <ModalList />
      <ModalExit/>
      <ModalOption/>
    </>
  );
};

export default QuizContentMB;

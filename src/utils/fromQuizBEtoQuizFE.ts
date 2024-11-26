import { QuizBaseBE } from "../common/quiz-interfaces";
import { QuizLocalState } from "../state/quiz/quiz";
import { getMacroFromID, getMicroFromID } from "./macro-micro";

export function fromQuizBEtoQuizFE(
  quiz: QuizBaseBE,
): QuizLocalState {
  return {
    macro: getMacroFromID(quiz.macroTopicID), 
    micro: getMicroFromID(quiz.microTopicID),
    question: quiz.question,
    correctAnswer: quiz.correctAnswer,
    selectedAnswer: "", // Inizialmente vuoto
    allAnswers: quiz.allAnswers,
    score: 1, // Imposta il punteggio iniziale a 1
    isViewed: false, // Inizialmente non visto
    isFlagged: false, // Inizialmente non marcato
  };
}

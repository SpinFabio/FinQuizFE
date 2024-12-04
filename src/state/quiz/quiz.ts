import { QuizFE } from "../../common/quiz-interfaces";
import { getAccessTokenPayload } from "../access-token/acces-token";

const LOCAL_STORAGE_CURRENT_QUIZ_KEY: string = `${getAccessTokenPayload()?.id??"temp"}currentQuizSession`;

export function setCurrentQuizzes(quizArray: QuizFE[]) {
  localStorage.setItem(
    LOCAL_STORAGE_CURRENT_QUIZ_KEY,
    JSON.stringify(quizArray),
  );
}

export function removeCurrentQuizzes() {
  localStorage.removeItem(LOCAL_STORAGE_CURRENT_QUIZ_KEY);
}

export function checkCurrentQuizzes(): boolean {
  const res = localStorage.getItem(LOCAL_STORAGE_CURRENT_QUIZ_KEY);
  if (res) return true;
  return false;
}

export function getCurrentQuizzes(): QuizFE[] | undefined {
  const quizzes = localStorage.getItem(LOCAL_STORAGE_CURRENT_QUIZ_KEY);
  if (!quizzes) {
    return undefined;
  } else {
    const properQuizzes: QuizFE[] = JSON.parse(quizzes);
    properQuizzes.forEach((quiz) => {
      quiz.allAnswers = shuffleArray(quiz.allAnswers);
    });
    return properQuizzes;
  }
}

function shuffleArray(array: string[]): string[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

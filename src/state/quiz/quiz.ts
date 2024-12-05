import { QuizFE } from "../../common/quiz-interfaces";
import { getAccessTokenPayload } from "../access-token/acces-token";

function getLocalStorageCurrentQuizKey(): string {
  const userId = getAccessTokenPayload()?.id ?? "temp";
  return `${userId}currentQuizSession`;
}

export function setCurrentQuizzes(quizArray: QuizFE[]) {
  //console.log(getLocalStorageCurrentQuizKey)
  localStorage.setItem(
    getLocalStorageCurrentQuizKey(),
    JSON.stringify(quizArray),
  );
}

export function removeCurrentQuizzes() {
  localStorage.removeItem(getLocalStorageCurrentQuizKey());
}

export function checkCurrentQuizzes(): boolean {
  const res = localStorage.getItem(getLocalStorageCurrentQuizKey());
  //console.log(getLocalStorageCurrentQuizKey())
  //console.log(getAccessTokenPayload()?.id??"temp")
  if (res) return true;
  return false;
}

export function getCurrentQuizzes(): QuizFE[] | undefined {
  const quizzes = localStorage.getItem(getLocalStorageCurrentQuizKey());
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

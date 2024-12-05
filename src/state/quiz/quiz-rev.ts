import { QuizFE } from "../../common/quiz-interfaces";
import { getAccessTokenPayload } from "../access-token/acces-token";

function getCurrenRevKey(): string {
  const userId = getAccessTokenPayload()?.id ?? "temp";
  return `${userId}currentReview`;
}

export function setCurrentReviewQuizzes(quizArray: QuizFE[]) {
  localStorage.setItem(getCurrenRevKey(), JSON.stringify(quizArray));
}

export function removeCurrentReviewQuizzes() {
  localStorage.removeItem(getCurrenRevKey());
}

export function getCurrentReviewQuizzes(): QuizFE[] | undefined {
  const quizzes = localStorage.getItem(getCurrenRevKey());
  if (!quizzes) {
    return undefined;
  } else {
    const properQuizzes: QuizFE[] = JSON.parse(quizzes);
    return properQuizzes;
  }
}

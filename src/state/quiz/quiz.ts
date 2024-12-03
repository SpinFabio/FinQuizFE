import { getAccessTokenPayload } from "../../utils/acces-token-utils";

export interface QuizLocalState {
  macro: string;
  micro: string;
  question: string;
  correctAnswer: string;
  selectedAnswer: string;
  allAnswers: string[];
  score: 1 | 2;
  isViewed: boolean;
  isFlagged: boolean;
}

const LOCAL_STORAGE_CURRENT_QUIZ_KEY: string = `${getAccessTokenPayload().id}currentQuizSession`;

export function setCurrentQuizzes(quizArray: QuizLocalState[]) {
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

export function getCurrentQuizzes(): QuizLocalState[] | undefined {
  const quizzes = localStorage.getItem(LOCAL_STORAGE_CURRENT_QUIZ_KEY);
  if (!quizzes) {
    return undefined;
  } else {
    const properQuizzes: QuizLocalState[] = JSON.parse(quizzes);
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

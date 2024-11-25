import { TimeInterface } from "../../components/layouts/layout-MB/useTimer";

export interface QuizLocalState {
  macro: string;
  micro: string;
  question: string;
  correctAnswer: string;
  selectedAnswer:string;
  allAnswers: string[];
  score: 1 | 2;
  isViewed: boolean;
  isFlagged:boolean;
}

const LOCAL_STORAGE_CURRENT_QUIZ_KEY: string = "currentQuizSession";
const LOCAL_STORAGE_CURRENT_TIME_KEY: string = "currentTimeRemaining";

export function setCurrentQuizzes(quizArray: QuizLocalState[]) {
  localStorage.setItem(
    LOCAL_STORAGE_CURRENT_QUIZ_KEY,
    JSON.stringify(quizArray),
  );
}

export function getCurrentQuizzes(): QuizLocalState[] {
  const quizzes = localStorage.getItem(LOCAL_STORAGE_CURRENT_QUIZ_KEY);
  if (!quizzes) {
    throw new Error("No QuizLocalState[]  was found in local storage");
  } else {
    const properQuizzes: QuizLocalState[] = JSON.parse(quizzes);
    properQuizzes.forEach((quiz) => {
      quiz.allAnswers = shuffleArray(quiz.allAnswers);
    });
    return properQuizzes;
  }
}

export function setCurrentTimer(time: TimeInterface): void {
  localStorage.setItem(LOCAL_STORAGE_CURRENT_TIME_KEY, JSON.stringify(time));
}

export function getCurrentTime(): TimeInterface {
  const time = localStorage.getItem(LOCAL_STORAGE_CURRENT_TIME_KEY);
  if (!time) {
    throw new Error("No TimeInterface was found in local storage");
  } else {
    const parsedTime: TimeInterface = JSON.parse(time);
    return parsedTime;
  }
}


function shuffleArray(array: string[]): string[] {
  return array
    .map((value) => ({ value, sort: Math.random() })) // Aggiunge un valore casuale
    .sort((a, b) => a.sort - b.sort) // Ordina in base al valore casuale
    .map(({ value }) => value); // Rimuove i valori casuali, lasciando solo gli elementi originali
}

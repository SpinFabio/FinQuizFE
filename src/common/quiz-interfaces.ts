import { boolean } from "yup";

export interface QuizBE {
  macroTopicID: number;
  microTopicID: number;
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  level: 1 | 2;
  subcontent: string;
}

export interface QuizFE {
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

export interface ReviewedQuizFE extends QuizFE {
  isCorrect:boolean
  realIndex:number
}
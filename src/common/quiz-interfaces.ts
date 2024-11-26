export interface QuizBaseBE {
  macroTopicID: number;
  microTopicID: number;
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  level: number;
  subcontent: string;
}

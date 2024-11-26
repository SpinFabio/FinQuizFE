import { QuizBaseBE } from "./quiz-interfaces";

export interface MacroTopicBase {
  quantitySelected: number;
  macroID: number;
}

export interface MacroTopicRequest {
  arrayMacrotopic: MacroTopicBase[];
}

export interface MacroTopicResponse {
  quizesArray: QuizBaseBE[];
}

import { QuizBE } from "./quiz-interfaces";

export interface MicroTopicBase {
  quantitySelected: number;
  macroID: number;
  microID: number;
}

export interface MicrotopicRequest {
  arrayMicroTopic: MicroTopicBase[];
}

export interface MicroTopicResponse {
  quizesArray: QuizBE[];
}

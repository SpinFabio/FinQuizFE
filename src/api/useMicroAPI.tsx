import {
  MicroTopicBase,
  MicrotopicRequest,
  MicroTopicResponse,
} from "../common/micro-interfaces";
import { QuizFE } from "../common/quiz-interfaces";
import { BE_DOMAIN } from "../config/myenv";
import { MacroMicroData } from "../state/micro/microTopicList";
import { setCurrentQuizzes } from "../state/quiz/quiz";
import { fromQuizBEtoQuizFE } from "../utils/macro-micro";
import { authFetch } from "./fetch-utils";

export async function getMicroQuiz(microState: MacroMicroData[]) {
  let microRequest: MicroTopicBase[] = [];

  microState.forEach((macro) => {
    macro.microArray.forEach((micro) => {
      if (micro.selectedNumber > 0) {
        const microBase: MicroTopicBase = {
          quantitySelected: micro.selectedNumber,
          macroID: macro.idMacro,
          microID: micro.idMicro,
        };
        microRequest.push(microBase);
      }
      return;
    });
  });

  //console.log(microRequest)

  const payload: MicrotopicRequest = {
    arrayMicroTopic: microRequest,
  };

  //console.log(payload)
  const res = await authFetch<MicroTopicResponse>(
    BE_DOMAIN + "/api/micro",
    "POST",
    payload,
  );


  const localQuizState: QuizFE[] = res.quizesArray.map((QuizBE) =>
    fromQuizBEtoQuizFE(QuizBE),
  );

  // console.log(localQuizState)
  setCurrentQuizzes(localQuizState);
}

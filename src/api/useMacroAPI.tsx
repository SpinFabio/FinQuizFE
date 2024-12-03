import {
  MacroTopicBase,
  MacroTopicRequest,
  MacroTopicResponse,
} from "../common/macro-interfaces";
import { BE_DOMAIN } from "../config/myenv";
import { setCurrentQuizzes } from "../state/quiz/quiz";
import { authFetch } from "./fetch-utils";
import { fromQuizBEtoQuizFE } from "../utils/macro-micro";
import { QuizFE } from "../common/quiz-interfaces";
import { MacroTopic } from "../state/macro/macroTopicList";

export async function getMacroQuiz(macroState: MacroTopic[]) {

  const macroReqArray: MacroTopicBase[] = macroState.map((macro) => {
    const tmp: MacroTopicBase = {
      quantitySelected: macro.selectedNumber,
      macroID: macro.id,
    };
    return tmp;
  });

  const payload: MacroTopicRequest = {
    arrayMacrotopic: macroReqArray,
  };

  const res = await authFetch<MacroTopicResponse>(
    BE_DOMAIN + "/api/macro",
    "POST",
    payload,
  );

  const localQuizSate: QuizFE[] = res.quizesArray.map((QuizBE) =>
    fromQuizBEtoQuizFE(QuizBE),
  );

  setCurrentQuizzes(localQuizSate);
}

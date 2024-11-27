import {
  MacroTopicBase,
  MacroTopicRequest,
  MacroTopicResponse,
} from "../common/macro-interfaces";
import { BE_DOMAIN } from "../config/myenv";
import { QuizLocalState, setCurrentQuizzes } from "../state/quiz/quiz";
import { authFetch } from "../utils/fetch-utils";
import { fromQuizBEtoQuizFE } from "../utils/fromQuizBEtoQuizFE";

export async function getMacroQuiz(macroReqArray: MacroTopicBase[]) {
  const payload: MacroTopicRequest = {
    arrayMacrotopic: macroReqArray,
  };

  const res = await authFetch<MacroTopicResponse>(
    BE_DOMAIN + "/api/macro",
    "POST",
    payload,
  );

  const localQuizSate: QuizLocalState[] = res.quizesArray.map((QuizBE) =>
    fromQuizBEtoQuizFE(QuizBE),
  );

  setCurrentQuizzes(localQuizSate);
}

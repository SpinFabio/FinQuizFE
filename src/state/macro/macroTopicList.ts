import { toast } from "react-toastify";
import { getMacroFromID } from "../../utils/macro-micro";

export interface MacroTopic {
  id: number;
  name: string;
  quizTot: number;
  defaultNumber: number;
  selectedNumber: number;
  prevNumber: number;
  isChecked: boolean;
  completedPercentage: number;
}

export const macroTopicArray: MacroTopic[] = [
  {
    id: 1,
    name: getMacroFromID(1),
    quizTot: 2000,
    defaultNumber: 5,
    selectedNumber: 5,
    prevNumber: 0,
    isChecked: true,
    completedPercentage: 0,
  },
  {
    id: 2,
    name: getMacroFromID(2),
    quizTot: 500,
    defaultNumber: 6,
    selectedNumber: 6,
    prevNumber: 0,
    isChecked: true,
    completedPercentage: 0,
  },
  {
    id: 3,
    name: getMacroFromID(3),
    quizTot: 400,
    defaultNumber: 6,
    selectedNumber: 6,
    prevNumber: 0,
    isChecked: true,
    completedPercentage: 0,
  },
  {
    id: 4,
    name: getMacroFromID(4),
    quizTot: 500,
    defaultNumber: 19,
    selectedNumber: 19,
    prevNumber: 0,
    isChecked: true,
    completedPercentage: 0,
  },
  {
    id: 5,
    name: getMacroFromID(5),
    quizTot: 1600,
    defaultNumber: 24,
    selectedNumber: 24,
    prevNumber: 0,
    isChecked: true,
    completedPercentage: 0,
  },
];

export interface UserMacroFav {
  id: number;
  selectedNumberFav: number;
}

//---------------------------------------- gestione del preferito -----------------------------------------------------------------------------------------------

const USER_MACRO_FAV_KEY_NAME = "macroTopicFavArray";

export function setFavMacro(macroTopicArray: MacroTopic[]): void {
  const favArray: UserMacroFav[] = macroTopicArray.map((macro) => {
    const fav: UserMacroFav = {
      id: macro.id,
      selectedNumberFav: macro.selectedNumber,
    };
    return fav;
  });

  console.log(favArray);

  localStorage.setItem(USER_MACRO_FAV_KEY_NAME, JSON.stringify(favArray));
}

export function getFavMacro(macroArray: MacroTopic[]): MacroTopic[] {
  const favData = localStorage.getItem(USER_MACRO_FAV_KEY_NAME);
  if (!favData) {
    toast.warning(
      "Non esiste alcun preferito per questa categoria su questo dispositivo",
    );
    return macroArray;
  }

  const favArray: UserMacroFav[] = JSON.parse(favData);

  const newMacroArray = macroArray.map((macroT) => {
    const fav: UserMacroFav | undefined = favArray.find(
      (f) => f.id === macroT.id,
    );

    if (fav) {
      return {
        ...macroT,
        selectedNumber: fav.selectedNumberFav,
      } as MacroTopic;
    }
    return macroT;
  });

  console.log(newMacroArray);

  return newMacroArray;
}

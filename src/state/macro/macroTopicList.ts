import { toast } from "react-toastify";

export interface MacroTopic {
  id: number;
  name: string;
  quizTot: number;
  defaultNumber: number;
  selectedNumber: number;
  completedPercentage: number;
}

export const macroTopicArray: MacroTopic[] = [
  {
    id: 1,
    name: "Diritto di mercato e degli intermediari",
    quizTot: 2000,
    defaultNumber: 5,
    selectedNumber: 5,
    completedPercentage: 0,
  },
  {
    id: 2,
    name: "Diritto previdenziale e assicurativo",
    quizTot: 500,
    defaultNumber: 6,
    selectedNumber: 6,
    completedPercentage: 0,
  },
  {
    id: 3,
    name: "Diritto privato e commerciale",
    quizTot: 400,
    defaultNumber: 6,
    selectedNumber: 6,
    completedPercentage: 0,
  },
  {
    id: 4,
    name: "Diritto tributario del mercato finanziario",
    quizTot: 500,
    defaultNumber: 19,
    selectedNumber: 19,
    completedPercentage: 0,
  },
  {
    id: 5,
    name: "Matematica e economia del mercato",
    quizTot: 1600,
    defaultNumber: 24,
    selectedNumber: 24,
    completedPercentage: 0,
  },
];

export interface UserMacroFav {
  id: number;
  selectedNumberFav: number;
}

//---------------------------------------- gestione del preferito -----------------------------------------------------------------------------------------------

const USER_MACRO_FAV_KEY_NAME = "macroTopicFavArray";

export function setFav(macroTopicArray: MacroTopic[]): void {
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

export function getFav(macroArray: MacroTopic[]): MacroTopic[] {
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

  console.log(newMacroArray)

  return newMacroArray;
}

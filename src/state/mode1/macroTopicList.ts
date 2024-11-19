export interface MacroTopic {
  id: number;
  nome: string;
  isChecked: boolean;
  quizTot: number;
  defaultNumber: number;
  selectednumber: number;
  completedPercentage: number;
}

export const macroTopicArray: MacroTopic[] = [
  {
    id: 1,
    nome: "Diritto di mercato e degli intermediari",
    isChecked: true,
    quizTot: 2000,
    defaultNumber: 5,
    selectednumber: 5,
    completedPercentage: 0,
  },
  {
    id: 2,
    nome: "Diritto previdenziale e assicurativo",
    isChecked: true,
    quizTot: 500,
    defaultNumber: 6,
    selectednumber: 6,
    completedPercentage: 0,
  },
  {
    id: 3,
    nome: "Diritto privato e commerciale",
    isChecked: true,
    quizTot: 400,
    defaultNumber: 6,
    selectednumber: 6,
    completedPercentage: 0,
  },
  {
    id: 4,
    nome: "Diritto tributario del mercato finanziario",
    isChecked: true,
    quizTot: 500,
    defaultNumber: 19,
    selectednumber: 19,
    completedPercentage: 0,
  },
  {
    id: 5,
    nome: "Matematica e economia del mercato",
    isChecked: true,
    quizTot: 1600,
    defaultNumber: 24,
    selectednumber: 24,
    completedPercentage: 0,
  },
];

export interface UserMacroFav {
  id: number;
  isCheckedFav: boolean;
  selectedNumberFav: number;
}

const macroTopicFavArray: UserMacroFav[] = [
  {
    id: 1,
    isCheckedFav: true, // Predefinito basato sull'immagine
    selectedNumberFav: 5, // Default per "Diritto di mercato e degli intermediari"
  },
  {
    id: 2,
    isCheckedFav: true,
    selectedNumberFav: 6, // Default per "Diritto previdenziale e assicurativo"
  },
  {
    id: 3,
    isCheckedFav: true,
    selectedNumberFav: 6, // Default per "Diritto privato e commerciale"
  },
  {
    id: 4,
    isCheckedFav: true,
    selectedNumberFav: 19, // Default per "Diritto tributario del mercato finanziario"
  },
  {
    id: 5,
    isCheckedFav: true,
    selectedNumberFav: 24, // Default per "Matematica e economia del mercato"
  },
];

//---------------------------------------------------------------------------------------------------------------------------------------

const USER_MACRO_FAV_KEY_NAME = "macroTopicFavArray";

function setFav(favArray: UserMacroFav[]): void {
  localStorage.setItem(USER_MACRO_FAV_KEY_NAME, JSON.stringify(favArray));
}

function getFav(macroArray: MacroTopic[]): MacroTopic[] {
  const favData = localStorage.getItem(USER_MACRO_FAV_KEY_NAME);
  if (!favData) {
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
        isChecked: fav.isCheckedFav,
        selectednumber: fav.selectedNumberFav,
      } as MacroTopic;
    }
    return macroT;
  });

  return newMacroArray;
}

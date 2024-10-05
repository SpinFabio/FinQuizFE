export interface MacroQuiz {
  categoryName: string;
  quantitySelected: number;
  categoryID: number;
  isChecked: boolean;
}

export const initialMacroQuizData: MacroQuiz[] = [
  {
    categoryName: 'Diritto del mercato',
    quantitySelected: 24,
    categoryID: 1,
    isChecked: true
  },
  {
    categoryName: 'Nozioni di matematica',
    quantitySelected: 19,
    categoryID: 2,
    isChecked: true
  },
  {
    categoryName: 'Diritto tributario',
    quantitySelected: 6,
    categoryID: 3,
    isChecked: true
  },
  {
    categoryName: 'Diritto previdenziale',
    quantitySelected: 14,
    categoryID: 4,
    isChecked: true
  },
  {
    categoryName: 'Diritto privato',
    quantitySelected: 11,
    categoryID: 5,
    isChecked: true
  },
];

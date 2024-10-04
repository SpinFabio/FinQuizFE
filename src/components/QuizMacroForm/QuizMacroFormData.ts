export interface MacroQuiz {
  categoryName: string;
  quantitySelected: number;
  isChecked: boolean;
}

export const initialMacroQuizData: MacroQuiz[] = [
  { categoryName: 'diritto del mercato', quantitySelected: 24, isChecked: true },
  { categoryName: 'nozioni di matematica', quantitySelected: 19, isChecked: true },
  { categoryName: 'diritto tributario', quantitySelected: 6, isChecked: true },
  { categoryName: 'diritto previdenziale', quantitySelected: 14, isChecked: true },
  { categoryName: 'diritto privato', quantitySelected: 11, isChecked: true },
];

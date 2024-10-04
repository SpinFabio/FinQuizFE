
export const UrlExerciceMode= '/esercitati';

export interface ButtonConfig {
  id: string;
  partialPath: string;
  to: string;
  tooltip: string;
  text: string;
  className: string;
}

export const buttonConfigs: ButtonConfig[] = [
  {
    id: 'QuizMacro',
    partialPath:'quiz-macro',
    to: UrlExerciceMode+'/quiz-macro',
    tooltip: 'Simula un esame completo come se fosse reale.',
    text: 'Simulazione Esame',
    className: 'mode1',
  },
  {
    id: 'QuizMicro',
    partialPath:'quiz-micro',
    to: UrlExerciceMode+'/quiz-micro',
    tooltip: 'Fai quiz suddivisi per argomento specifico.',
    text: 'Quiz per Argomento',
    className: 'mode2',
  },
  {
    id: 'VeroEsame',
    partialPath:'vero-esame',
    to: UrlExerciceMode+'/vero-esame',
    tooltip: 'Testa la vera modalità d\'esame, identica all\'originale.',
    text: 'Vera Modalità d\'Esame',
    className: 'mode3',
  },
];


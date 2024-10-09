
export const UrlExerciceMode= '/esercitati';

export interface ButtonConfig {
  partialPath: string;
  to: string;
  tooltip: string;
  text: string;
  isDisabled: boolean;
  className: string;
}

export const buttonConfigs: ButtonConfig[] = [
  {
    partialPath:'quiz-macro',
    to: UrlExerciceMode+'/quiz-macro',
    tooltip: 'Simula un esame completo come se fosse reale.',
    text: 'Simulazione Esame',
    isDisabled: false,
    className: 'mode1',
  },
  {
    partialPath:'quiz-micro',
    to: UrlExerciceMode+'/quiz-micro',
    tooltip: 'Fai quiz suddivisi per argomento specifico.',
    text: 'Quiz per Argomento',
    isDisabled: false,
    className: 'mode2',
  },
  {
    partialPath: 'coming-soon',//'vero-esame',
    to: UrlExerciceMode+'/vero-esame',
    tooltip: 'coming soon ',// 'Testa la vera modalità d\'esame, identica all\'originale.',
    text: 'coming soon ',//'Vera Modalità d\'Esame',
    isDisabled: true,
    className: 'mode3',
  },
];


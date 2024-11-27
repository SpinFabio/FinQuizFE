import {
  MACRO_PAGE_ROUTE,
  MICRO_PAGE_ROUTE,
  QUIZ_PAGE_ROUTE,
  TRAINING_PAGE_ROUTE,
} from "../../../config/routes";

export interface Modes {
  modeName: string;
  linkTo: string;
}

export const modes: Modes[] = [
  {
    modeName: "Esercitati",
    linkTo: MACRO_PAGE_ROUTE,
  },
  {
    modeName: "Quiz per Argomento",
    linkTo: MICRO_PAGE_ROUTE,
  },
  {
    modeName: "Ripasso",
    linkTo: TRAINING_PAGE_ROUTE,
  },
];

export interface ResumeButtonInterface {
  buttonText: string;
  linkTo: string;
}

export const resumeButton: ResumeButtonInterface = {
  buttonText: "Riprendi la prova precedente",
  linkTo: QUIZ_PAGE_ROUTE,
};

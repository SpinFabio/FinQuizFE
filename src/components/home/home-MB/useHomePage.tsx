export interface Modes {
  modeName: string;
  linkTo: string;
}

export const modes: Modes[] = [
  {
    modeName: "Esercitati",
    linkTo: "/esercitati",
  },
  {
    modeName: "Quiz per Argomento",
    linkTo: "/quiz-argomenti",
  },
  {
    modeName: "Ripasso",
    linkTo: "/ripasso",
  },
];

export interface ResumeButtonInterface {
  buttonText: string;
  linkTo: string;
}

export const resumeButton: ResumeButtonInterface = {
  buttonText: "Riprendi la prova precedente",
  linkTo: "/quiz",
};

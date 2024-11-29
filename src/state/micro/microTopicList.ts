import { getMacroFromID } from "../../utils/macro-micro";

export interface MicroTopic {
  idMicro: number;
  nameMicro: string;
  quizTot: number;
  isChecked: boolean;
  selectedNumber: number;
  completedPercetage: number;
}

export interface MacroMicroData {
  idMacro: number;
  nameMacro: string;
  isOpen: boolean;
  sumOfSelected: number;
  microArray: MicroTopic[];
}

export const microDataArray: MacroMicroData[] = [
  {
    idMacro: 1,
    isOpen: false,
    nameMacro: getMacroFromID(1),
    sumOfSelected: 0,
    microArray: [
      {
        idMicro: 101,
        isChecked: false,
        nameMicro: "Abusi di mercato",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 102,
        isChecked: false,
        nameMicro: "Appello al pubblico risparmio",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 103,
        isChecked: false,
        nameMicro: "Attività dei consulenti finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 104,
        isChecked: false,
        nameMicro: "Disciplina dell'Albo unico dei consulenti finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 105,
        isChecked: false,
        nameMicro: "Emittenti e società con azioni quotate",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 106,
        isChecked: false,
        nameMicro: "Gestione collettiva del risparmio",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 107,
        isChecked: false,
        nameMicro: "La normativa antiriciclaggio",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 108,
        isChecked: false,
        nameMicro: "Mercati degli strumenti finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 109,
        isChecked: false,
        nameMicro:
          "Organismo di vigilanza e tenuta dell'albo unico dei consulenti finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 110,
        isChecked: false,
        nameMicro: "Promozione e collocamento a distanza e offerta fuori sede",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 111,
        isChecked: false,
        nameMicro:
          "Provvedimenti sanzionatori e cautelari nei confronti dei consulenti finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 112,
        isChecked: false,
        nameMicro: "Requisiti e deontologia dei consulenti finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 113,
        isChecked: false,
        nameMicro: "Servizi e attività di investimento",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 114,
        isChecked: false,
        nameMicro:
          "Trasparenza delle condizioni contrattuali e dei rapporti con i clienti",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 115,
        isChecked: false,
        nameMicro: "Vigilanza su mercati e intermediari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
    ],
  },
  {
    idMacro: 2,
    isOpen: false,
    nameMacro: getMacroFromID(2),
    sumOfSelected: 0,
    microArray: [
      {
        idMicro: 201,
        isChecked: false,
        nameMicro: "Analisi di scenario",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 202,
        isChecked: false,
        nameMicro: "Costruzione del portafoglio",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 203,
        isChecked: false,
        nameMicro: "Fondi comuni di investimento",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 204,
        isChecked: false,
        nameMicro: "Futures",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 205,
        isChecked: false,
        nameMicro: "Nozioni di matematica finanziaria",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 206,
        isChecked: false,
        nameMicro: "Opzioni",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 207,
        isChecked: false,
        nameMicro: "Strumenti derivati",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 208,
        isChecked: false,
        nameMicro: "Strumenti di mercato monetario",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 209,
        isChecked: false,
        nameMicro: "Strumenti e operatività",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 210,
        isChecked: false,
        nameMicro: "Swap",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 211,
        isChecked: false,
        nameMicro: "Titoli azionari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 212,
        isChecked: false,
        nameMicro: "Titoli di credito",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 213,
        isChecked: false,
        nameMicro: "Titoli obbligazionari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 214,
        isChecked: false,
        nameMicro: "Titoli strutturati",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 215,
        isChecked: false,
        nameMicro: "Valutazione delle obbligazioni",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
    ],
  },
  {
    idMacro: 3,
    isOpen: false,
    nameMacro: getMacroFromID(3),
    sumOfSelected: 0,
    microArray: [
      {
        idMicro: 301,
        isChecked: false,
        nameMicro: "Aspetti del sistema tributario",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 302,
        isChecked: false,
        nameMicro: "La tassazione degli strumenti del risparmio gestito",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 303,
        isChecked: false,
        nameMicro: "La tassazione degli strumenti di investimento diretto",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 304,
        isChecked: false,
        nameMicro: "La tassazione indiretta dei redditi finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
    ],
  },
  {
    idMacro: 4,
    isOpen: false,
    nameMacro: getMacroFromID(4),
    sumOfSelected: 0,
    microArray: [
      {
        idMicro: 401,
        isChecked: false,
        nameMicro: "Aspetti civilistici del contratto",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 402,
        isChecked: false,
        nameMicro: "Aspetti tecnici, attuariali e finanziari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 403,
        isChecked: false,
        nameMicro: "Aspetti tributari",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 404,
        isChecked: false,
        nameMicro: "Gli intermediari assicurativi",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 405,
        isChecked: false,
        nameMicro:
          "I compiti dell'Istituto per la vigilanza sulle assicurazioni",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 406,
        isChecked: false,
        nameMicro: "I principi assicurativi",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 407,
        isChecked: false,
        nameMicro: "Il TFR",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 408,
        isChecked: false,
        nameMicro: "La previdenza complementare",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 409,
        isChecked: false,
        nameMicro: "La previdenza pubblica",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 410,
        isChecked: false,
        nameMicro: "Le imprese di assicurazione",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 411,
        isChecked: false,
        nameMicro: "Tipologie di rami e polizze",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
    ],
  },
  {
    idMacro: 5,
    isOpen: false,
    nameMacro: getMacroFromID(5),
    sumOfSelected: 0,
    microArray: [
      {
        idMicro: 501,
        isChecked: false,
        nameMicro: "Beni e diritti reali: nozione e disciplina",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 502,
        isChecked: false,
        nameMicro: "Conclusione, interpretazione e adempimento del contratto",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 503,
        isChecked: false,
        nameMicro: "Contratti tipici",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 504,
        isChecked: false,
        nameMicro: "Le obbligazioni: nozione e disciplina",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 505,
        isChecked: false,
        nameMicro: "L'impresa: nozione e disciplina",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 506,
        isChecked: false,
        nameMicro:
          "Matrimonio, rapporti patrimoniali tra coniugi e impresa familiare",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 507,
        isChecked: false,
        nameMicro: "Risoluzione e invalidità del contratto",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 508,
        isChecked: false,
        nameMicro: "Scritture contabili e bilancio",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 509,
        isChecked: false,
        nameMicro: "Società di capitali: disciplina e organizzazione",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 510,
        isChecked: false,
        nameMicro: "Società di persone: disciplina e organizzazione",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 511,
        isChecked: false,
        nameMicro: "Titoli di credito",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 512,
        isChecked: false,
        nameMicro:
          "Vicende modificative della società e operazioni straordinarie",
        quizTot: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
    ],
  },
];

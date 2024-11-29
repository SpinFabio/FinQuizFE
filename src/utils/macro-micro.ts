import { QuizBaseBE } from "../common/quiz-interfaces";
import { QuizLocalState } from "../state/quiz/quiz";

interface MacroTopic {
  id: number;
  name: string;
}

const macroTopics: MacroTopic[] = [
  { id: 1, name: "Diritto del mercato e degli intermediari" },
  {
    id: 2,
    name: "Matematica e economia del mercato  ",
  },
  {
    id: 3,
    name: "Diritto tributario del mercato ",
  },
  { id: 4, name: " Diritto previdenziale e assicurativo" },
  { id: 5, name: " Diritto privato e di diritto commerciale" },
];

interface MicroTopic {
  id: number;
  name: string;
  macroTopicId: number;
}

const microTopics: MicroTopic[] = [
  // MacroTopic 1: Diritto del mercato finanziario e degli intermediari
  { id: 101, name: "Abusi di mercato", macroTopicId: 1 },
  { id: 102, name: "Appello al pubblico risparmio", macroTopicId: 1 },
  { id: 103, name: "Attività dei consulenti finanziari", macroTopicId: 1 },
  {
    id: 104,
    name: "Disciplina dell'Albo unico dei consulenti finanziari",
    macroTopicId: 1,
  },
  { id: 105, name: "Emittenti e società con azioni quotate", macroTopicId: 1 },
  { id: 106, name: "Gestione collettiva del risparmio", macroTopicId: 1 },
  { id: 107, name: "La normativa antiriciclaggio", macroTopicId: 1 },
  { id: 108, name: "Mercati degli strumenti finanziari", macroTopicId: 1 },
  {
    id: 109,
    name: "Organismo di vigilanza e tenuta dell'albo unico dei consulenti finanziari",
    macroTopicId: 1,
  },
  {
    id: 110,
    name: "Promozione e collocamento a distanza e offerta fuori sede",
    macroTopicId: 1,
  },
  {
    id: 111,
    name: "Provvedimenti sanzionatori e cautelari nei confronti dei consulenti finanziari",
    macroTopicId: 1,
  },
  {
    id: 112,
    name: "Requisiti e deontologia dei consulenti finanziari",
    macroTopicId: 1,
  },
  { id: 113, name: "Servizi e attività di investimento", macroTopicId: 1 },
  {
    id: 114,
    name: "Trasparenza delle condizioni contrattuali e dei rapporti con i clienti",
    macroTopicId: 1,
  },
  { id: 115, name: "Vigilanza su mercati e intermediari", macroTopicId: 1 },

  // MacroTopic 2: Nozioni di matematica finanza e di economia del mercato finanziario
  { id: 201, name: "Analisi di scenario", macroTopicId: 2 },
  { id: 202, name: "Costruzione del portafoglio", macroTopicId: 2 },
  { id: 203, name: "Fondi comuni di investimento", macroTopicId: 2 },
  { id: 204, name: "Futures", macroTopicId: 2 },
  { id: 205, name: "Nozioni di matematica finanziaria", macroTopicId: 2 },
  { id: 206, name: "Opzioni", macroTopicId: 2 },
  { id: 207, name: "Strumenti derivati", macroTopicId: 2 },
  { id: 208, name: "Strumenti di mercato monetario", macroTopicId: 2 },
  { id: 209, name: "Strumenti e operatività", macroTopicId: 2 },
  { id: 210, name: "Swap", macroTopicId: 2 },
  { id: 211, name: "Titoli azionari", macroTopicId: 2 },
  { id: 212, name: "Titoli di credito", macroTopicId: 2 },
  { id: 213, name: "Titoli obbligazionari", macroTopicId: 2 },
  { id: 214, name: "Titoli strutturati", macroTopicId: 2 },
  { id: 215, name: "Valutazione delle obbligazioni", macroTopicId: 2 },

  // MacroTopic 3: Nozioni di diritto tributario riguardanti il mercato finanziario
  { id: 301, name: "Aspetti del sistema tributario", macroTopicId: 3 },
  {
    id: 302,
    name: "La tassazione degli strumenti del risparmio gestito",
    macroTopicId: 3,
  },
  {
    id: 303,
    name: "La tassazione degli strumenti di investimento diretto",
    macroTopicId: 3,
  },
  {
    id: 304,
    name: "La tassazione indiretta dei redditi finanziari",
    macroTopicId: 3,
  },

  // MacroTopic 4: Nozioni di diritto previdenziale e assicurativo
  { id: 401, name: "Aspetti civilistici del contratto", macroTopicId: 4 },
  {
    id: 402,
    name: "Aspetti tecnici, attuariali e finanziari",
    macroTopicId: 4,
  },
  { id: 403, name: "Aspetti tributari", macroTopicId: 4 },
  { id: 404, name: "Gli intermediari assicurativi", macroTopicId: 4 },
  {
    id: 405,
    name: "I compiti dell'Istituto per la vigilanza sulle assicurazioni",
    macroTopicId: 4,
  },
  { id: 406, name: "I principi assicurativi", macroTopicId: 4 },
  { id: 407, name: "Il TFR", macroTopicId: 4 },
  { id: 408, name: "La previdenza complementare", macroTopicId: 4 },
  { id: 409, name: "La previdenza pubblica", macroTopicId: 4 },
  { id: 410, name: "Le imprese di assicurazione", macroTopicId: 4 },
  { id: 411, name: "Tipologie di rami e polizze", macroTopicId: 4 },

  // MacroTopic 5: Nozioni di diritto privato e di diritto commerciale
  {
    id: 501,
    name: "Beni e diritti reali: nozione e disciplina",
    macroTopicId: 5,
  },
  {
    id: 502,
    name: "Conclusione, interpretazione e adempimento del contratto",
    macroTopicId: 5,
  },
  { id: 503, name: "Contratti tipici", macroTopicId: 5 },
  { id: 504, name: "Le obbligazioni: nozione e disciplina", macroTopicId: 5 },
  { id: 505, name: "L'impresa: nozione e disciplina", macroTopicId: 5 },
  {
    id: 506,
    name: "Matrimonio, rapporti patrimoniali tra coniugi e impresa familiare",
    macroTopicId: 5,
  },
  { id: 507, name: "Risoluzione e invalidità del contratto", macroTopicId: 5 },
  { id: 508, name: "Scritture contabili e bilancio", macroTopicId: 5 },
  {
    id: 509,
    name: "Società di capitali: disciplina e organizzazione",
    macroTopicId: 5,
  },
  {
    id: 510,
    name: "Società di persone: disciplina e organizzazione",
    macroTopicId: 5,
  },
  { id: 511, name: "Titoli di credito", macroTopicId: 5 },
  {
    id: 512,
    name: "Vicende modificative della società e operazioni straordinarie",
    macroTopicId: 5,
  },
];

export function getMicroFromID(microTopicId: number): string {
  const micro = microTopics.find((topic) => topic.id === microTopicId);
  if (!micro) {
    throw new Error(`Micro topic con ID ${microTopicId} non trovato.`);
  }
  return micro.name;
}

export function getMacroFromID(macroTopicId: number): string {
  const macro = macroTopics.find((topic) => topic.id === macroTopicId);
  if (!macro) {
    throw new Error(`Macro topic con ID ${macroTopicId} non trovato.`);
  }
  return macro.name;
}

export function fromQuizBEtoQuizFE(quiz: QuizBaseBE): QuizLocalState {
  return {
    macro: getMacroFromID(quiz.macroTopicID),
    micro: getMicroFromID(quiz.microTopicID),
    question: quiz.question,
    correctAnswer: quiz.correctAnswer,
    selectedAnswer: "", // Inizialmente vuoto
    allAnswers: quiz.allAnswers,
    score: 1, // Imposta il punteggio iniziale a 1
    isViewed: false, // Inizialmente non visto
    isFlagged: false, // Inizialmente non marcato
  };
}

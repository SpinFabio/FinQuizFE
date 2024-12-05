import { QuizFE } from "../../common/quiz-interfaces";

export const mockQuizData: QuizFE[] = [
  // NON CANCELLARLO CHE SERVE PER INIZIALIZZARE LA PAGINA QUIZ
  {
    macro: "Mock Macro",
    micro: "Mock Micro",
    question: "Questo è un mock quiz, usa dati reali.",
    correctAnswer: "Risposta corretta mock",
    allAnswers: [
      "Risposta mock 1",
      "Risposta mock 2",
      "Risposta mock 3",
      "Risposta mock 4",
    ],
    score: 1,
    selectedAnswer: "",
    isViewed: false,
    isFlagged: false,
  },
];

export const DUMMY_DATA_QUIZ: QuizFE[] = [
  {
    macro: "Abusi di mercato",
    micro: "Ambito di applicazione",
    question:
      "Secondo il comma 4 dell'articolo 182 del decreto legislativo n. 58/1998 (Testo Unico della Finanza), i reati previsti in materia di abusi di mercato, commessi in territorio estero, sono sanzionati secondo:",
    correctAnswer:
      "la legge italiana, se attengono a strumenti finanziari ammessi alla negoziazione in un sistema multilaterale di negoziazione italiano",
    allAnswers: [
      "la legge italiana, se attengono a strumenti finanziari ammessi alla negoziazione in un sistema multilaterale di negoziazione italiano",
      "la legge del Paese estero in cui risiede il soggetto che ha commesso i reati, anche se i reati attengono a strumenti finanziari ammessi alla negoziazione in un mercato regolamentato italiano",
      "la legge del Paese in cui ha sede legale l'emittente degli strumenti finanziari ai quali attengono i reati, anche se tali strumenti sono ammessi alla negoziazione in un mercato regolamentato italiano",
      "un regolamento dell'Unione europea, anche se attengono a strumenti finanziari negoziati su un sistema organizzato di negoziazione italiano",
    ],
    score: 1,
    selectedAnswer: "",
    isViewed: false,
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Sanzioni amministrative",
    question:
      "Un soggetto acquista strumenti finanziari all’apertura del mercato con l’effetto o il probabile effetto di fuorviare gli investitori che agiscono sulla base dei prezzi esposti, compresi i prezzi di apertura. Ai sensi del comma 1 dell’art. 187-ter del d. lgs. n. 58/1998 (Testo Unico della Finanza), salve le sanzioni penali quando il fatto costituisce reato, tale soggetto è punito con:",
    correctAnswer:
      "la sanzione amministrativa pecuniaria da ventimila euro a cinque milioni di euro",
    allAnswers: [
      "la sanzione amministrativa pecuniaria da ventimila euro a cinque milioni di euro",
      "la reclusione da uno a dieci anni",
      "la sanzione amministrativa pecuniaria da mille euro a centomila euro",
      "la reclusione fino a sei anni",
    ],
    score: 2,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Sanzioni penali",
    question:
      "In quale delle seguenti fattispecie si configura la manipolazione del mercato disciplinata dall'articolo 185 del decreto legislativo n. 58/1998 (Testo Unico della Finanza)?",
    correctAnswer:
      "L'operatore addetto all'esecuzione di ordini di strumenti finanziari sui mercati regolamentati italiani diffonde la notizia falsa del fallimento di una società quotata",
    allAnswers: [
      "L'operatore addetto all'esecuzione di ordini di strumenti finanziari sui mercati regolamentati italiani diffonde la notizia falsa del fallimento di una società quotata",
      "L'esecutore materiale di un'attività delittuosa, in possesso di un'informazione precisa, non ancora pubblicata, vende obbligazioni utilizzando l'informazione stessa",
      "L'esecutore materiale di un'attività delittuosa, in possesso di un'informazione precisa, non ancora pubblicata, acquista azioni utilizzando l'informazione stessa",
      "Il membro dell'organo di amministrazione di una società quotata utilizza le informazioni di cui dispone in virtù del ruolo ricoperto per indurre terzi a compiere determinate operazioni sugli stessi strumenti finanziari",
    ],
    score: 2,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Definizioni",
    question:
      "Secondo l'articolo 180 del d. lgs. n. 58/1998 (Testo Unico della Finanza), per informazione privilegiata si intende un'informazione che, tra l'altro:",
    correctAnswer:
      "è di carattere preciso, non è stata resa pubblica e concerne, direttamente o indirettamente, uno o più strumenti finanziari",
    allAnswers: [
      "è di carattere preciso, non è stata resa pubblica e concerne, direttamente o indirettamente, uno o più strumenti finanziari",
      "se di carattere preciso, può anche essere stata resa già pubblica",
      "concerne, direttamente o indirettamente, almeno tre strumenti finanziari",
      "concerne, esclusivamente in via diretta, almeno due emittenti di strumenti finanziari",
    ],
    score: 1,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Sanzioni amministrative",
    question:
      "Ai sensi dell'articolo 187-septies del decreto legislativo n. 58/1998, entro quanti giorni dalla contestazione è possibile presentare deduzioni in merito a sanzioni amministrative?",
    correctAnswer:
      "Entro trenta giorni e possono anche chiedere un’audizione personale in sede di istruttoria",
    allAnswers: [
      "Entro trenta giorni e possono anche chiedere un’audizione personale in sede di istruttoria",
      "Entro sessanta giorni, e possono chiedere un’audizione per il loro avvocato",
      "Entro novanta giorni per il caso di abuso di informazioni privilegiate ed entro sessanta giorni per il caso di manipolazione del mercato",
      "Entro centottanta giorni per il caso di abuso di informazioni privilegiate ed entro novanta giorni per il caso di manipolazione del mercato",
    ],
    score: 1,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Ambito di applicazione",
    question:
      "Il comma 1 dell'art. 182 del d. lgs. n. 58/1998 prevede che le disposizioni in materia di manipolazione del mercato si applicano:",
    correctAnswer:
      "ai fatti concernenti strumenti finanziari per i quali è stata presentata una richiesta di ammissione alla negoziazione in un sistema multilaterale di negoziazione italiano o di altro Paese dell'Unione europea",
    allAnswers: [
      "ai fatti concernenti strumenti finanziari per i quali è stata presentata una richiesta di ammissione alla negoziazione in un sistema multilaterale di negoziazione italiano o di altro Paese dell'Unione europea",
      "ai fatti concernenti strumenti finanziari ammessi alla negoziazione in un mercato regolamentato italiano",
      "alle operazioni attinenti alla politica monetaria dei membri del Sistema Europeo di Banche Centrali",
      "alle operazioni attinenti alla gestione del debito pubblico da parte di uno Stato membro dell’Unione europea",
    ],
    score: 2,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Sanzioni penali",
    question:
      "Secondo l'articolo 185 del d. lgs. n. 58/1998, il reato di manipolazione del mercato è punito con:",
    correctAnswer:
      "la reclusione fino a tre anni e la multa da ventimila a cinque milioni di euro",
    allAnswers: [
      "la reclusione fino a tre anni e la multa da ventimila a cinque milioni di euro",
      "la reclusione fino a sei mesi e la multa da cinquemila a cinquantamila euro",
      "solo la reclusione fino a due anni",
      "la reclusione fino a un anno senza multa",
    ],
    score: 2,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Definizioni",
    question:
      "Ai sensi dell'articolo 183 del decreto legislativo n. 58/1998, quale dei seguenti costituisce un caso di esenzione dalle disposizioni in materia di abusi di mercato?",
    correctAnswer:
      "Operazioni realizzate nella conduzione della politica monetaria dalla Banca Centrale Europea",
    allAnswers: [
      "Operazioni realizzate nella conduzione della politica monetaria dalla Banca Centrale Europea",
      "Operazioni attinenti alla gestione del debito pubblico compiute dalla Francia",
      "Operazioni di politica monetaria effettuate dalla Banca centrale del Giappone",
      "Operazioni attinenti alla politica dei cambi compiute da un qualunque Paese dell'area OCSE",
    ],
    score: 1,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Ambito di applicazione",
    question:
      "Secondo il comma 4 dell'articolo 182 del decreto legislativo n. 58/1998, i reati in materia di abusi di mercato commessi in territorio estero sono sanzionati secondo:",
    correctAnswer:
      "la legge italiana, se attengono a strumenti finanziari ammessi alla negoziazione in un sistema multilaterale di negoziazione italiano",
    allAnswers: [
      "la legge italiana, se attengono a strumenti finanziari ammessi alla negoziazione in un sistema multilaterale di negoziazione italiano",
      "la legge del Paese in cui risiede il soggetto che ha commesso i reati",
      "un regolamento dell'Unione europea",
      "la legge del Paese in cui ha sede legale l'emittente degli strumenti finanziari ai quali attengono i reati",
    ],
    score: 2,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Sanzioni amministrative",
    question:
      "Secondo l'articolo 187-ter del d. lgs. n. 58/1998, salve le sanzioni penali, chiunque viola il divieto di manipolazione del mercato è punito con:",
    correctAnswer:
      "la sanzione amministrativa pecuniaria da ventimila euro a cinque milioni di euro",
    allAnswers: [
      "la sanzione amministrativa pecuniaria da ventimila euro a cinque milioni di euro",
      "la sanzione amministrativa pecuniaria da mille euro a cinquantamila euro",
      "la reclusione fino a sei mesi",
      "la reclusione fino a un anno senza multa",
    ],
    score: 2,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Sanzioni penali",
    question:
      "Quale delle seguenti fattispecie configura manipolazione del mercato ai sensi dell'articolo 185 del decreto legislativo n. 58/1998?",
    correctAnswer:
      "Diffondere notizie false idonee a provocare una sensibile alterazione del prezzo di strumenti finanziari",
    allAnswers: [
      "Diffondere notizie false idonee a provocare una sensibile alterazione del prezzo di strumenti finanziari",
      "Essere in possesso di informazioni privilegiate senza diffonderle",
      "Effettuare ordini di mercato con una variazione minima dei prezzi",
      "Pubblicare informazioni di dominio pubblico sugli strumenti finanziari",
    ],
    score: 1,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
  {
    macro: "Abusi di mercato",
    micro: "Definizioni",
    question:
      "Secondo l'articolo 180 del d. lgs. n. 58/1998, quale tra le seguenti è un'informazione privilegiata?",
    correctAnswer:
      "Un'informazione non pubblica e di carattere preciso che riguarda strumenti finanziari",
    allAnswers: [
      "Un'informazione non pubblica e di carattere preciso che riguarda strumenti finanziari",
      "Un'informazione pubblica e relativa a strumenti non quotati",
      "Una comunicazione approvata dal consiglio di amministrazione",
      "Un'informazione che riguarda solo titoli di Stato",
    ],
    score: 1,
    isViewed: false,
    selectedAnswer: "",
    isFlagged: false,
  },
];

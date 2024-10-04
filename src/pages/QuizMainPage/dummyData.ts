export interface Quiz {
  macroTopic: string;
  microTopic: string;
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  level: number;
  subcontent: string;
  userAnsware: string;
  flagged: boolean;
}

class QuizItem implements Quiz {
  macroTopic: string;
  microTopic: string;
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  level: number;
  subcontent: string;
  userAnsware:string= '';
  flagged: boolean = false;

  constructor(
    macroTopic: string,
    microTopic: string,
    question: string,
    correctAnswer: string,
    allAnswers: string[],
    level: number,
    subcontent: string
  ) {
    this.macroTopic = macroTopic;
    this.microTopic = microTopic;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.allAnswers = allAnswers;
    this.level = level;
    this.subcontent = subcontent;
  }
}

// Creazione del vettore di quiz utilizzando la classe QuizItem
export const quizData: Quiz[] = [
  new QuizItem(
    "Finanza",
    "Concetti di base",
    "Che cos'è un'azione?",
    "Una partecipazione al capitale di una società",
    [
      "Un tipo di obbligazione",
      "Un prestito a lungo termine",
      "Una partecipazione al capitale di una società",
      "Un'assicurazione"
    ],
    1,
    "Concetti di base"
  ),
  new QuizItem(
    "Finanza",
    "Investimenti",
    "Cosa si intende per 'diversificazione' in un portafoglio di investimenti?",
    "Distribuire gli investimenti tra diversi tipi di asset",
    [
      "Investire tutto in un'unica azione",
      "Distribuire gli investimenti tra diversi tipi di asset",
      "Investire solo in obbligazioni",
      "Acquistare solo beni immobili"
    ],
    1,
    "Investimenti"
  ),
  new QuizItem(
    "Finanza",
    "Bilancio",
    "Qual è la principale funzione del bilancio d'esercizio?",
    "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
    [
      "Calcolare il reddito netto",
      "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
      "Determinare il valore delle azioni",
      "Indicare il valore dei beni immateriali"
    ],
    1,
    "Bilancio"
  ),
  new QuizItem(
    "Finanza",
    "Contabilità",
    "Cos'è un bilancio?",
    "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
    [
      "Un documento che registra tutte le fatture",
      "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
      "Un report delle vendite",
      "Un elenco dei crediti e debiti"
    ],
    1,
    "Contabilità"
  ),
  new QuizItem(
    "Finanza",
    "Rendimenti",
    "Come si calcola il rendimento percentuale di un investimento?",
    "(Valore finale - Valore iniziale) / Valore iniziale * 100",
    [
      "(Valore finale - Valore iniziale) / Valore iniziale * 100",
      "(Valore iniziale - Valore finale) / Valore iniziale * 100",
      "Valore finale - Valore iniziale",
      "Valore finale / Valore iniziale * 100"
    ],
    2,
    "Rendimenti"
  ),
  new QuizItem(
    "Finanza",
    "Mercati",
    "Cosa rappresenta l'indice di borsa?",
    "Una misura della performance complessiva di un mercato azionario",
    [
      "Il valore di una singola azione",
      "Una misura della performance complessiva di un mercato azionario",
      "Il numero di azioni emesse",
      "Il valore delle obbligazioni"
    ],
    2,
    "Mercati"
  ),
  new QuizItem(
    "Finanza",
    "Pianificazione finanziaria",
    "Qual è l'obiettivo principale della pianificazione finanziaria personale?",
    "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
    [
      "Massimizzare le spese mensili",
      "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
      "Investire in beni immobili",
      "Minimizzare il reddito"
    ],
    2,
    "Pianificazione finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Analisi dei costi",
    "Cosa rappresenta il 'break-even point'?",
    "Il punto in cui i ricavi totali sono uguali ai costi totali",
    [
      "Il punto in cui i ricavi totali sono uguali ai costi totali",
      "Il momento in cui l'impresa inizia a fare profitto",
      "Il punto in cui i costi sono massimi",
      "Il livello di vendite necessario per coprire i costi fissi"
    ],
    2,
    "Analisi dei costi"
  ),
  new QuizItem(
    "Finanza",
    "Obbligazioni",
    "Cos'è un'obbligazione?",
    "Un titolo di debito emesso da una società o ente pubblico",
    [
      "Un titolo di debito emesso da una società o ente pubblico",
      "Una quota di partecipazione in una società",
      "Un contratto di assicurazione",
      "Una forma di investimento a breve termine"
    ],
    1,
    "Obbligazioni"
  ),
  new QuizItem(
    "Finanza",
    "Strategie di investimento",
    "Qual è una strategia comune per la protezione di un portafoglio?",
    "Utilizzare opzioni di copertura",
    [
      "Investire solo in azioni",
      "Utilizzare opzioni di copertura",
      "Acquistare solo obbligazioni a lungo termine",
      "Diversificare in beni immobili"
    ],
    2,
    "Strategie di investimento"
  ),
  new QuizItem(
    "Finanza",
    "Analisi finanziaria",
    "Cos'è il rapporto P/E?",
    "Il rapporto prezzo/utili di un'azione",
    [
      "Il rapporto prezzo/utili di un'azione",
      "Il rapporto tra debito e capitale proprio",
      "Il rapporto tra ricavi e costi",
      "Il prezzo di mercato delle obbligazioni"
    ],
    2,
    "Analisi finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Fiscalità",
    "Qual è la principale forma di tassazione sui redditi da investimento?",
    "Imposta sulle plusvalenze",
    [
      "Imposta sulle plusvalenze",
      "IVA",
      "Tassa di successione",
      "Imposta sul reddito personale"
    ],
    3,
    "Fiscalità"
  ),
  new QuizItem(
    "Finanza",
    "Economia globale",
    "Cosa indica il tasso di inflazione?",
    "L'aumento percentuale dei prezzi al consumo",
    [
      "L'aumento percentuale dei prezzi al consumo",
      "Il cambiamento del tasso di interesse",
      "La crescita del PIL",
      "La variazione dei tassi di cambio"
    ],
    3,
    "Economia globale"
  ),
  new QuizItem(
    "Finanza",
    "Concetti di base",
    "Che cos'è un'azione?",
    "Una partecipazione al capitale di una società",
    [
      "Un tipo di obbligazione",
      "Un prestito a lungo termine",
      "Una partecipazione al capitale di una società",
      "Un'assicurazione"
    ],
    1,
    "Concetti di base"
  ),
  new QuizItem(
    "Finanza",
    "Investimenti",
    "Cosa si intende per 'diversificazione' in un portafoglio di investimenti?",
    "Distribuire gli investimenti tra diversi tipi di asset",
    [
      "Investire tutto in un'unica azione",
      "Distribuire gli investimenti tra diversi tipi di asset",
      "Investire solo in obbligazioni",
      "Acquistare solo beni immobili"
    ],
    1,
    "Investimenti"
  ),
  new QuizItem(
    "Finanza",
    "Bilancio",
    "Qual è la principale funzione del bilancio d'esercizio?",
    "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
    [
      "Calcolare il reddito netto",
      "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
      "Determinare il valore delle azioni",
      "Indicare il valore dei beni immateriali"
    ],
    1,
    "Bilancio"
  ),
  new QuizItem(
    "Finanza",
    "Contabilità",
    "Cos'è un bilancio?",
    "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
    [
      "Un documento che registra tutte le fatture",
      "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
      "Un report delle vendite",
      "Un elenco dei crediti e debiti"
    ],
    1,
    "Contabilità"
  ),
  new QuizItem(
    "Finanza",
    "Rendimenti",
    "Come si calcola il rendimento percentuale di un investimento?",
    "(Valore finale - Valore iniziale) / Valore iniziale * 100",
    [
      "(Valore finale - Valore iniziale) / Valore iniziale * 100",
      "(Valore iniziale - Valore finale) / Valore iniziale * 100",
      "Valore finale - Valore iniziale",
      "Valore finale / Valore iniziale * 100"
    ],
    2,
    "Rendimenti"
  ),
  new QuizItem(
    "Finanza",
    "Mercati",
    "Cosa rappresenta l'indice di borsa?",
    "Una misura della performance complessiva di un mercato azionario",
    [
      "Il valore di una singola azione",
      "Una misura della performance complessiva di un mercato azionario",
      "Il numero di azioni emesse",
      "Il valore delle obbligazioni"
    ],
    2,
    "Mercati"
  ),
  new QuizItem(
    "Finanza",
    "Pianificazione finanziaria",
    "Qual è l'obiettivo principale della pianificazione finanziaria personale?",
    "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
    [
      "Massimizzare le spese mensili",
      "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
      "Investire in beni immobili",
      "Minimizzare il reddito"
    ],
    2,
    "Pianificazione finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Analisi dei costi",
    "Cosa rappresenta il 'break-even point'?",
    "Il punto in cui i ricavi totali sono uguali ai costi totali",
    [
      "Il punto in cui i ricavi totali sono uguali ai costi totali",
      "Il momento in cui l'impresa inizia a fare profitto",
      "Il punto in cui i costi sono massimi",
      "Il livello di vendite necessario per coprire i costi fissi"
    ],
    2,
    "Analisi dei costi"
  ),
  new QuizItem(
    "Finanza",
    "Obbligazioni",
    "Cos'è un'obbligazione?",
    "Un titolo di debito emesso da una società o ente pubblico",
    [
      "Un titolo di debito emesso da una società o ente pubblico",
      "Una quota di partecipazione in una società",
      "Un contratto di assicurazione",
      "Una forma di investimento a breve termine"
    ],
    1,
    "Obbligazioni"
  ),
  new QuizItem(
    "Finanza",
    "Strategie di investimento",
    "Qual è una strategia comune per la protezione di un portafoglio?",
    "Utilizzare opzioni di copertura",
    [
      "Investire solo in azioni",
      "Utilizzare opzioni di copertura",
      "Acquistare solo obbligazioni a lungo termine",
      "Diversificare in beni immobili"
    ],
    2,
    "Strategie di investimento"
  ),
  new QuizItem(
    "Finanza",
    "Analisi finanziaria",
    "Cos'è il rapporto P/E?",
    "Il rapporto prezzo/utili di un'azione",
    [
      "Il rapporto prezzo/utili di un'azione",
      "Il rapporto tra debito e capitale proprio",
      "Il rapporto tra ricavi e costi",
      "Il prezzo di mercato delle obbligazioni"
    ],
    2,
    "Analisi finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Fiscalità",
    "Qual è la principale forma di tassazione sui redditi da investimento?",
    "Imposta sulle plusvalenze",
    [
      "Imposta sulle plusvalenze",
      "IVA",
      "Tassa di successione",
      "Imposta sul reddito personale"
    ],
    3,
    "Fiscalità"
  ),
  new QuizItem(
    "Finanza",
    "Economia globale",
    "Cosa indica il tasso di inflazione?",
    "L'aumento percentuale dei prezzi al consumo",
    [
      "L'aumento percentuale dei prezzi al consumo",
      "Il cambiamento del tasso di interesse",
      "La crescita del PIL",
      "La variazione dei tassi di cambio"
    ],
    3,
    "Economia globale"
  ),new QuizItem(
    "Finanza",
    "Concetti di base",
    "Che cos'è un'azione?",
    "Una partecipazione al capitale di una società",
    [
      "Un tipo di obbligazione",
      "Un prestito a lungo termine",
      "Una partecipazione al capitale di una società",
      "Un'assicurazione"
    ],
    1,
    "Concetti di base"
  ),
  new QuizItem(
    "Finanza",
    "Investimenti",
    "Cosa si intende per 'diversificazione' in un portafoglio di investimenti?",
    "Distribuire gli investimenti tra diversi tipi di asset",
    [
      "Investire tutto in un'unica azione",
      "Distribuire gli investimenti tra diversi tipi di asset",
      "Investire solo in obbligazioni",
      "Acquistare solo beni immobili"
    ],
    1,
    "Investimenti"
  ),
  new QuizItem(
    "Finanza",
    "Bilancio",
    "Qual è la principale funzione del bilancio d'esercizio?",
    "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
    [
      "Calcolare il reddito netto",
      "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
      "Determinare il valore delle azioni",
      "Indicare il valore dei beni immateriali"
    ],
    1,
    "Bilancio"
  ),
  new QuizItem(
    "Finanza",
    "Contabilità",
    "Cos'è un bilancio?",
    "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
    [
      "Un documento che registra tutte le fatture",
      "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
      "Un report delle vendite",
      "Un elenco dei crediti e debiti"
    ],
    1,
    "Contabilità"
  ),
  new QuizItem(
    "Finanza",
    "Rendimenti",
    "Come si calcola il rendimento percentuale di un investimento?",
    "(Valore finale - Valore iniziale) / Valore iniziale * 100",
    [
      "(Valore finale - Valore iniziale) / Valore iniziale * 100",
      "(Valore iniziale - Valore finale) / Valore iniziale * 100",
      "Valore finale - Valore iniziale",
      "Valore finale / Valore iniziale * 100"
    ],
    2,
    "Rendimenti"
  ),
  new QuizItem(
    "Finanza",
    "Mercati",
    "Cosa rappresenta l'indice di borsa?",
    "Una misura della performance complessiva di un mercato azionario",
    [
      "Il valore di una singola azione",
      "Una misura della performance complessiva di un mercato azionario",
      "Il numero di azioni emesse",
      "Il valore delle obbligazioni"
    ],
    2,
    "Mercati"
  ),
  new QuizItem(
    "Finanza",
    "Pianificazione finanziaria",
    "Qual è l'obiettivo principale della pianificazione finanziaria personale?",
    "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
    [
      "Massimizzare le spese mensili",
      "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
      "Investire in beni immobili",
      "Minimizzare il reddito"
    ],
    2,
    "Pianificazione finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Analisi dei costi",
    "Cosa rappresenta il 'break-even point'?",
    "Il punto in cui i ricavi totali sono uguali ai costi totali",
    [
      "Il punto in cui i ricavi totali sono uguali ai costi totali",
      "Il momento in cui l'impresa inizia a fare profitto",
      "Il punto in cui i costi sono massimi",
      "Il livello di vendite necessario per coprire i costi fissi"
    ],
    2,
    "Analisi dei costi"
  ),
  new QuizItem(
    "Finanza",
    "Obbligazioni",
    "Cos'è un'obbligazione?",
    "Un titolo di debito emesso da una società o ente pubblico",
    [
      "Un titolo di debito emesso da una società o ente pubblico",
      "Una quota di partecipazione in una società",
      "Un contratto di assicurazione",
      "Una forma di investimento a breve termine"
    ],
    1,
    "Obbligazioni"
  ),
  new QuizItem(
    "Finanza",
    "Strategie di investimento",
    "Qual è una strategia comune per la protezione di un portafoglio?",
    "Utilizzare opzioni di copertura",
    [
      "Investire solo in azioni",
      "Utilizzare opzioni di copertura",
      "Acquistare solo obbligazioni a lungo termine",
      "Diversificare in beni immobili"
    ],
    2,
    "Strategie di investimento"
  ),
  new QuizItem(
    "Finanza",
    "Analisi finanziaria",
    "Cos'è il rapporto P/E?",
    "Il rapporto prezzo/utili di un'azione",
    [
      "Il rapporto prezzo/utili di un'azione",
      "Il rapporto tra debito e capitale proprio",
      "Il rapporto tra ricavi e costi",
      "Il prezzo di mercato delle obbligazioni"
    ],
    2,
    "Analisi finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Fiscalità",
    "Qual è la principale forma di tassazione sui redditi da investimento?",
    "Imposta sulle plusvalenze",
    [
      "Imposta sulle plusvalenze",
      "IVA",
      "Tassa di successione",
      "Imposta sul reddito personale"
    ],
    3,
    "Fiscalità"
  ),
  new QuizItem(
    "Finanza",
    "Economia globale",
    "Cosa indica il tasso di inflazione?",
    "L'aumento percentuale dei prezzi al consumo",
    [
      "L'aumento percentuale dei prezzi al consumo",
      "Il cambiamento del tasso di interesse",
      "La crescita del PIL",
      "La variazione dei tassi di cambio"
    ],
    3,
    "Economia globale"
  ),new QuizItem(
    "Finanza",
    "Concetti di base",
    "Che cos'è un'azione?",
    "Una partecipazione al capitale di una società",
    [
      "Un tipo di obbligazione",
      "Un prestito a lungo termine",
      "Una partecipazione al capitale di una società",
      "Un'assicurazione"
    ],
    1,
    "Concetti di base"
  ),
  new QuizItem(
    "Finanza",
    "Investimenti",
    "Cosa si intende per 'diversificazione' in un portafoglio di investimenti?",
    "Distribuire gli investimenti tra diversi tipi di asset",
    [
      "Investire tutto in un'unica azione",
      "Distribuire gli investimenti tra diversi tipi di asset",
      "Investire solo in obbligazioni",
      "Acquistare solo beni immobili"
    ],
    1,
    "Investimenti"
  ),
  new QuizItem(
    "Finanza",
    "Bilancio",
    "Qual è la principale funzione del bilancio d'esercizio?",
    "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
    [
      "Calcolare il reddito netto",
      "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
      "Determinare il valore delle azioni",
      "Indicare il valore dei beni immateriali"
    ],
    1,
    "Bilancio"
  ),
  new QuizItem(
    "Finanza",
    "Contabilità",
    "Cos'è un bilancio?",
    "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
    [
      "Un documento che registra tutte le fatture",
      "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
      "Un report delle vendite",
      "Un elenco dei crediti e debiti"
    ],
    1,
    "Contabilità"
  ),
  new QuizItem(
    "Finanza",
    "Rendimenti",
    "Come si calcola il rendimento percentuale di un investimento?",
    "(Valore finale - Valore iniziale) / Valore iniziale * 100",
    [
      "(Valore finale - Valore iniziale) / Valore iniziale * 100",
      "(Valore iniziale - Valore finale) / Valore iniziale * 100",
      "Valore finale - Valore iniziale",
      "Valore finale / Valore iniziale * 100"
    ],
    2,
    "Rendimenti"
  ),
  new QuizItem(
    "Finanza",
    "Mercati",
    "Cosa rappresenta l'indice di borsa?",
    "Una misura della performance complessiva di un mercato azionario",
    [
      "Il valore di una singola azione",
      "Una misura della performance complessiva di un mercato azionario",
      "Il numero di azioni emesse",
      "Il valore delle obbligazioni"
    ],
    2,
    "Mercati"
  ),
  new QuizItem(
    "Finanza",
    "Pianificazione finanziaria",
    "Qual è l'obiettivo principale della pianificazione finanziaria personale?",
    "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
    [
      "Massimizzare le spese mensili",
      "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
      "Investire in beni immobili",
      "Minimizzare il reddito"
    ],
    2,
    "Pianificazione finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Analisi dei costi",
    "Cosa rappresenta il 'break-even point'?",
    "Il punto in cui i ricavi totali sono uguali ai costi totali",
    [
      "Il punto in cui i ricavi totali sono uguali ai costi totali",
      "Il momento in cui l'impresa inizia a fare profitto",
      "Il punto in cui i costi sono massimi",
      "Il livello di vendite necessario per coprire i costi fissi"
    ],
    2,
    "Analisi dei costi"
  ),
  new QuizItem(
    "Finanza",
    "Obbligazioni",
    "Cos'è un'obbligazione?",
    "Un titolo di debito emesso da una società o ente pubblico",
    [
      "Un titolo di debito emesso da una società o ente pubblico",
      "Una quota di partecipazione in una società",
      "Un contratto di assicurazione",
      "Una forma di investimento a breve termine"
    ],
    1,
    "Obbligazioni"
  ),
  new QuizItem(
    "Finanza",
    "Strategie di investimento",
    "Qual è una strategia comune per la protezione di un portafoglio?",
    "Utilizzare opzioni di copertura",
    [
      "Investire solo in azioni",
      "Utilizzare opzioni di copertura",
      "Acquistare solo obbligazioni a lungo termine",
      "Diversificare in beni immobili"
    ],
    2,
    "Strategie di investimento"
  ),
  new QuizItem(
    "Finanza",
    "Analisi finanziaria",
    "Cos'è il rapporto P/E?",
    "Il rapporto prezzo/utili di un'azione",
    [
      "Il rapporto prezzo/utili di un'azione",
      "Il rapporto tra debito e capitale proprio",
      "Il rapporto tra ricavi e costi",
      "Il prezzo di mercato delle obbligazioni"
    ],
    2,
    "Analisi finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Fiscalità",
    "Qual è la principale forma di tassazione sui redditi da investimento?",
    "Imposta sulle plusvalenze",
    [
      "Imposta sulle plusvalenze",
      "IVA",
      "Tassa di successione",
      "Imposta sul reddito personale"
    ],
    3,
    "Fiscalità"
  ),
  new QuizItem(
    "Finanza",
    "Economia globale",
    "Cosa indica il tasso di inflazione?",
    "L'aumento percentuale dei prezzi al consumo",
    [
      "L'aumento percentuale dei prezzi al consumo",
      "Il cambiamento del tasso di interesse",
      "La crescita del PIL",
      "La variazione dei tassi di cambio"
    ],
    3,
    "Economia globale"
  ),new QuizItem(
    "Finanza",
    "Concetti di base",
    "Che cos'è un'azione?",
    "Una partecipazione al capitale di una società",
    [
      "Un tipo di obbligazione",
      "Un prestito a lungo termine",
      "Una partecipazione al capitale di una società",
      "Un'assicurazione"
    ],
    1,
    "Concetti di base"
  ),
  new QuizItem(
    "Finanza",
    "Investimenti",
    "Cosa si intende per 'diversificazione' in un portafoglio di investimenti?",
    "Distribuire gli investimenti tra diversi tipi di asset",
    [
      "Investire tutto in un'unica azione",
      "Distribuire gli investimenti tra diversi tipi di asset",
      "Investire solo in obbligazioni",
      "Acquistare solo beni immobili"
    ],
    1,
    "Investimenti"
  ),
  new QuizItem(
    "Finanza",
    "Bilancio",
    "Qual è la principale funzione del bilancio d'esercizio?",
    "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
    [
      "Calcolare il reddito netto",
      "Mostrare la situazione patrimoniale e finanziaria dell'impresa",
      "Determinare il valore delle azioni",
      "Indicare il valore dei beni immateriali"
    ],
    1,
    "Bilancio"
  ),
  new QuizItem(
    "Finanza",
    "Contabilità",
    "Cos'è un bilancio?",
    "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
    [
      "Un documento che registra tutte le fatture",
      "Un documento contabile che riassume la situazione patrimoniale e finanziaria di un'impresa",
      "Un report delle vendite",
      "Un elenco dei crediti e debiti"
    ],
    1,
    "Contabilità"
  ),
  new QuizItem(
    "Finanza",
    "Rendimenti",
    "Come si calcola il rendimento percentuale di un investimento?",
    "(Valore finale - Valore iniziale) / Valore iniziale * 100",
    [
      "(Valore finale - Valore iniziale) / Valore iniziale * 100",
      "(Valore iniziale - Valore finale) / Valore iniziale * 100",
      "Valore finale - Valore iniziale",
      "Valore finale / Valore iniziale * 100"
    ],
    2,
    "Rendimenti"
  ),
  new QuizItem(
    "Finanza",
    "Mercati",
    "Cosa rappresenta l'indice di borsa?",
    "Una misura della performance complessiva di un mercato azionario",
    [
      "Il valore di una singola azione",
      "Una misura della performance complessiva di un mercato azionario",
      "Il numero di azioni emesse",
      "Il valore delle obbligazioni"
    ],
    2,
    "Mercati"
  ),
  new QuizItem(
    "Finanza",
    "Pianificazione finanziaria",
    "Qual è l'obiettivo principale della pianificazione finanziaria personale?",
    "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
    [
      "Massimizzare le spese mensili",
      "Gestire e ottimizzare le risorse economiche per raggiungere obiettivi specifici",
      "Investire in beni immobili",
      "Minimizzare il reddito"
    ],
    2,
    "Pianificazione finanziaria"
  ),
  new QuizItem(
    "Finanza",
    "Analisi dei costi",
    "Cosa rappresenta il 'break-even point'?",
    "Il punto in cui i ricavi totali sono uguali ai costi totali",
    [
      "Il punto in cui i ricavi totali sono uguali ai costi totali",
      "Il momento in cui l'impresa inizia a fare profitto",
      "Il punto in cui i costi sono massimi",
      "Il livello di vendite necessario per coprire i costi fissi"
    ],
    2,
    "Analisi dei costi"
  ),
];

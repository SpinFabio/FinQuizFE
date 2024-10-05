export interface MicroQuiz {
  categoryName: string;
  isChecked: boolean;
  categoryID: number;
  subArgArray: subArgMicro[];
}

export interface subArgMicro{
  subcategoryName:string;
  isChecked: boolean;
  categoryID:number;
  quantitySelected: number;
}
export const initialMicroQuizData: MicroQuiz[] = [
  {
    categoryName: 'Diritto del mercato',
    isChecked: true,
    categoryID: 1,
    subArgArray: [
      { subcategoryName: 'Abusi di mercato', isChecked: true, categoryID: 101, quantitySelected: 0 },
      { subcategoryName: 'Appello al pubblico risparmio', isChecked: true, categoryID: 102, quantitySelected: 0 },
      { subcategoryName: 'Attività dei consulenti finanziari', isChecked: true, categoryID: 103, quantitySelected: 0 },
      { subcategoryName: 'Disciplina dell\'Albo unico dei consulenti finanziari', isChecked: true, categoryID: 104, quantitySelected: 0 },
      { subcategoryName: 'Emittenti e società con azioni quotate', isChecked: true, categoryID: 105, quantitySelected: 0 },
      { subcategoryName: 'Gestione collettiva del risparmio', isChecked: true, categoryID: 106, quantitySelected: 0 },
      { subcategoryName: 'La normativa antiriciclaggio', isChecked: true, categoryID: 107, quantitySelected: 0 },
      { subcategoryName: 'Mercati degli strumenti finanziari', isChecked: true, categoryID: 108, quantitySelected: 0 },
      { subcategoryName: 'Organismo di vigilanza e tenuta dell\'albo unico dei consulenti finanziari', isChecked: true, categoryID: 109, quantitySelected: 0 },
      { subcategoryName: 'Promozione e collocamento a distanza e offerta fuori sede', isChecked: true, categoryID: 110, quantitySelected: 0 },
      { subcategoryName: 'Provvedimenti sanzionatori e cautelari nei confronti dei consulenti finanziari', isChecked: true, categoryID: 111, quantitySelected: 0 },
      { subcategoryName: 'Requisiti e deontologia dei consulenti finanziari', isChecked: true, categoryID: 112, quantitySelected: 0 },
      { subcategoryName: 'Servizi e attività di investimento', isChecked: true, categoryID: 113, quantitySelected: 0 },
      { subcategoryName: 'Trasparenza delle condizioni contrattuali e dei rapporti con i clienti', isChecked: true, categoryID: 114, quantitySelected: 0 },
      { subcategoryName: 'Vigilanza su mercati e intermediari', isChecked: true, categoryID: 115, quantitySelected: 0 },
    ]
  },
  {
    categoryName: 'Nozioni di matematica',
    isChecked: true,
    categoryID: 2,
    subArgArray: [
      { subcategoryName: 'Analisi di scenario', isChecked: true, categoryID: 201, quantitySelected: 0 },
      { subcategoryName: 'Costruzione del portafoglio', isChecked: true, categoryID: 202, quantitySelected: 0 },
      { subcategoryName: 'Fondi comuni di investimento', isChecked: true, categoryID: 203, quantitySelected: 0 },
      { subcategoryName: 'Futures', isChecked: true, categoryID: 204, quantitySelected: 0 },
      { subcategoryName: 'Nozioni di matematica finanziaria', isChecked: true, categoryID: 205, quantitySelected: 0 },
      { subcategoryName: 'Opzioni', isChecked: true, categoryID: 206, quantitySelected: 0 },
      { subcategoryName: 'Strumenti derivati', isChecked: true, categoryID: 207, quantitySelected: 0 },
      { subcategoryName: 'Strumenti di mercato monetario', isChecked: true, categoryID: 208, quantitySelected: 0 },
      { subcategoryName: 'Strumenti e operatività', isChecked: true, categoryID: 209, quantitySelected: 0 },
      { subcategoryName: 'Swap', isChecked: true, categoryID: 210, quantitySelected: 0 },
      { subcategoryName: 'Titoli azionari', isChecked: true, categoryID: 211, quantitySelected: 0 },
      { subcategoryName: 'Titoli di credito', isChecked: true, categoryID: 212, quantitySelected: 0 },
      { subcategoryName: 'Titoli obbligazionari', isChecked: true, categoryID: 213, quantitySelected: 0 },
      { subcategoryName: 'Titoli strutturati', isChecked: true, categoryID: 214, quantitySelected: 0 },
      { subcategoryName: 'Valutazione delle obbligazioni', isChecked: true, categoryID: 215, quantitySelected: 0 },
    ]
  },
  {
    categoryName: 'Diritto tributario',
    isChecked: true,
    categoryID: 3,
    subArgArray: [
      { subcategoryName: 'Aspetti del sistema tributario', isChecked: true, categoryID: 301, quantitySelected: 0 },
      { subcategoryName: 'La tassazione degli strumenti del risparmio gestito', isChecked: true, categoryID: 302, quantitySelected: 0 },
      { subcategoryName: 'La tassazione degli strumenti di investimento diretto', isChecked: true, categoryID: 303, quantitySelected: 0 },
      { subcategoryName: 'La tassazione indiretta dei redditi finanziari', isChecked: true, categoryID: 304, quantitySelected: 0 },
    ]
  },
  {
    categoryName: 'Diritto previdenziale',
    isChecked: true,
    categoryID: 4,
    subArgArray: [
      { subcategoryName: 'Aspetti civilistici del contratto', isChecked: true, categoryID: 401, quantitySelected: 0 },
      { subcategoryName: 'Aspetti tecnici, attuariali e finanziari', isChecked: true, categoryID: 402, quantitySelected: 0 },
      { subcategoryName: 'Aspetti tributari', isChecked: true, categoryID: 403, quantitySelected: 0 },
      { subcategoryName: 'Gli intermediari assicurativi', isChecked: true, categoryID: 404, quantitySelected: 0 },
      { subcategoryName: 'I compiti dell\'Istituto per la vigilanza sulle assicurazioni', isChecked: true, categoryID: 405, quantitySelected: 0 },
      { subcategoryName: 'I principi assicurativi', isChecked: true, categoryID: 406, quantitySelected: 0 },
      { subcategoryName: 'Il TFR', isChecked: true, categoryID: 407, quantitySelected: 0 },
      { subcategoryName: 'La previdenza complementare', isChecked: true, categoryID: 408, quantitySelected: 0 },
      { subcategoryName: 'La previdenza pubblica', isChecked: true, categoryID: 409, quantitySelected: 0 },
      { subcategoryName: 'Le imprese di assicurazione', isChecked: true, categoryID: 410, quantitySelected: 0 },
      { subcategoryName: 'Tipologie di rami e polizze', isChecked: true, categoryID: 411, quantitySelected: 0 },
    ]
  },
  {
    categoryName: 'Diritto privato',
    isChecked: true,
    categoryID: 5,
    subArgArray: [
      { subcategoryName: 'Beni e diritti reali: nozione e disciplina', isChecked: true, categoryID: 501, quantitySelected: 0 },
      { subcategoryName: 'Conclusione, interpretazione e adempimento del contratto', isChecked: true, categoryID: 502, quantitySelected: 0 },
      { subcategoryName: 'Contratti tipici', isChecked: true, categoryID: 503, quantitySelected: 0 },
      { subcategoryName: 'Le obbligazioni: nozione e disciplina', isChecked: true, categoryID: 504, quantitySelected: 0 },
      { subcategoryName: 'L\'impresa: nozione e disciplina', isChecked: true, categoryID: 505, quantitySelected: 0 },
      { subcategoryName: 'Matrimonio, rapporti patrimoniali tra coniugi e impresa familiare', isChecked: true, categoryID: 506, quantitySelected: 0 },
      { subcategoryName: 'Risoluzione e invalidità del contratto', isChecked: true, categoryID: 507, quantitySelected: 0 },
      { subcategoryName: 'Scritture contabili e bilancio', isChecked: true, categoryID: 508, quantitySelected: 0 },
      { subcategoryName: 'Società di capitali: disciplina e organizzazione', isChecked: true, categoryID: 509, quantitySelected: 0 },
      { subcategoryName: 'Società di persone: disciplina e organizzazione', isChecked: true, categoryID: 510, quantitySelected: 0 },
      { subcategoryName: 'Titoli di credito', isChecked: true, categoryID: 511, quantitySelected: 0 },
      { subcategoryName: 'Vicende modificative della società e operazioni straordinarie', isChecked: true, categoryID: 512, quantitySelected: 0 },
    ]
  }
];

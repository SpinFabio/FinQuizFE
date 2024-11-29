import { toast } from "react-toastify";
import { getMacroFromID, getMicroFromID } from "../../utils/macro-micro";

export interface MicroTopic {
  idMicro: number;
  nameMicro: string;
  quizTot: number;
  prevNumber: number;
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

export const MICRO_DATA_ARRAY: MacroMicroData[] = [
  {
    idMacro: 1,
    isOpen: false,
    nameMacro: getMacroFromID(1),
    sumOfSelected: 0,
    microArray: [
      {
        idMicro: 101,
        isChecked: false,
        nameMicro: getMicroFromID(101),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 102,
        isChecked: false,
        nameMicro: getMicroFromID(102),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 103,
        isChecked: false,
        nameMicro: getMicroFromID(103),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 104,
        isChecked: false,
        nameMicro: getMicroFromID(104),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 105,
        isChecked: false,
        nameMicro: getMicroFromID(105),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 106,
        isChecked: false,
        nameMicro: getMicroFromID(106),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 107,
        isChecked: false,
        nameMicro: getMicroFromID(107),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 108,
        isChecked: false,
        nameMicro: getMicroFromID(108),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 109,
        isChecked: false,
        nameMicro: getMicroFromID(109),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 110,
        isChecked: false,
        nameMicro: getMicroFromID(110),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 111,
        isChecked: false,
        nameMicro: getMicroFromID(111),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 112,
        isChecked: false,
        nameMicro: getMicroFromID(112),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 113,
        isChecked: false,
        nameMicro: getMicroFromID(113),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 114,
        isChecked: false,
        nameMicro: getMicroFromID(114),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 115,
        isChecked: false,
        nameMicro: getMicroFromID(115),
        quizTot: 0,
        prevNumber: 0,
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
        nameMicro: getMicroFromID(201),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 202,
        isChecked: false,
        nameMicro: getMicroFromID(202),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 203,
        isChecked: false,
        nameMicro: getMicroFromID(203),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 204,
        isChecked: false,
        nameMicro: getMicroFromID(204),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 205,
        isChecked: false,
        nameMicro: getMicroFromID(205),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 206,
        isChecked: false,
        nameMicro: getMicroFromID(206),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 207,
        isChecked: false,
        nameMicro: getMicroFromID(207),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 208,
        isChecked: false,
        nameMicro: getMicroFromID(208),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 209,
        isChecked: false,
        nameMicro: getMicroFromID(209),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 210,
        isChecked: false,
        nameMicro: getMicroFromID(210),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 211,
        isChecked: false,
        nameMicro: getMicroFromID(211),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 212,
        isChecked: false,
        nameMicro: getMicroFromID(212),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 213,
        isChecked: false,
        nameMicro: getMicroFromID(213),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 214,
        isChecked: false,
        nameMicro: getMicroFromID(214),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 215,
        isChecked: false,
        nameMicro: getMicroFromID(215),
        quizTot: 0,
        prevNumber: 0,
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
        nameMicro: getMicroFromID(301),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 302,
        isChecked: false,
        nameMicro: getMicroFromID(302),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 303,
        isChecked: false,
        nameMicro: getMicroFromID(303),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 304,
        isChecked: false,
        nameMicro: getMicroFromID(304),
        quizTot: 0,
        prevNumber: 0,
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
        nameMicro: getMicroFromID(401),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 402,
        isChecked: false,
        nameMicro: getMicroFromID(402),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 403,
        isChecked: false,
        nameMicro: getMicroFromID(403),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 404,
        isChecked: false,
        nameMicro: getMicroFromID(404),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 405,
        isChecked: false,
        nameMicro: getMicroFromID(405),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 406,
        isChecked: false,
        nameMicro: getMicroFromID(406),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 407,
        isChecked: false,
        nameMicro: getMicroFromID(407),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 408,
        isChecked: false,
        nameMicro: getMicroFromID(408),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 409,
        isChecked: false,
        nameMicro: getMicroFromID(409),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 410,
        isChecked: false,
        nameMicro: getMicroFromID(410),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 411,
        isChecked: false,
        nameMicro: getMicroFromID(411),
        quizTot: 0,
        prevNumber: 0,
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
        nameMicro: getMicroFromID(501),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 502,
        isChecked: false,
        nameMicro: getMicroFromID(502),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 503,
        isChecked: false,
        nameMicro: getMicroFromID(503),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 504,
        isChecked: false,
        nameMicro: getMicroFromID(504),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 505,
        isChecked: false,
        nameMicro: getMicroFromID(505),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 506,
        isChecked: false,
        nameMicro: getMicroFromID(506),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 507,
        isChecked: false,
        nameMicro: getMicroFromID(507),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 508,
        isChecked: false,
        nameMicro: getMicroFromID(508),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 509,
        isChecked: false,
        nameMicro: getMicroFromID(509),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 510,
        isChecked: false,
        nameMicro: getMicroFromID(510),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 511,
        isChecked: false,
        nameMicro: getMicroFromID(511),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 512,
        isChecked: false,
        nameMicro: getMicroFromID(512),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
    ],
  },
];

//---------------------------------------- gestione del preferito -----------------------------------------------------------------------------------------------

const USER_MICRO_FAV_KEY_NAME = "microTopicFavArray";

export function setFavMicro(MacroMicroArray: MacroMicroData[]): void {
  localStorage.setItem(
    USER_MICRO_FAV_KEY_NAME,
    JSON.stringify(MacroMicroArray),
  );
}

export function getFavMicro(): MacroMicroData[] {
  const favData = localStorage.getItem(USER_MICRO_FAV_KEY_NAME);
  if (!favData) {
    toast.warning(
      "Non esiste alcun preferito per questa categoria su questo dispositivo",
    );
    return MICRO_DATA_ARRAY;
  }
  return JSON.parse(favData)
}

import { toast } from "react-toastify";
import { getMacroFromID, getMicroFromID } from "../../utils/macro-micro";
import { getAccessTokenPayload } from "../../utils/acces-token-utils";

export interface MicroTopic {
  idMicro: number;
  nameMicro: string;
  quizTot: number;
  prevNumber: number;
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
        nameMicro: getMicroFromID(101),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 102,
        nameMicro: getMicroFromID(102),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 103,
        nameMicro: getMicroFromID(103),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 104,
        nameMicro: getMicroFromID(104),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 105,
        nameMicro: getMicroFromID(105),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 106,
        nameMicro: getMicroFromID(106),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 107,
        nameMicro: getMicroFromID(107),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 108,
        nameMicro: getMicroFromID(108),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 109,
        nameMicro: getMicroFromID(109),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 110,
        nameMicro: getMicroFromID(110),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 111,
        nameMicro: getMicroFromID(111),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 112,
        nameMicro: getMicroFromID(112),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 113,
        nameMicro: getMicroFromID(113),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 114,
        nameMicro: getMicroFromID(114),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 115,

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
        nameMicro: getMicroFromID(201),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 202,
        nameMicro: getMicroFromID(202),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 203,
        nameMicro: getMicroFromID(203),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 204,
        nameMicro: getMicroFromID(204),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 205,
        nameMicro: getMicroFromID(205),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 206,
        nameMicro: getMicroFromID(206),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 207,
        nameMicro: getMicroFromID(207),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 208,
        nameMicro: getMicroFromID(208),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 209,
        nameMicro: getMicroFromID(209),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 210,
        nameMicro: getMicroFromID(210),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 211,
        nameMicro: getMicroFromID(211),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 212,
        nameMicro: getMicroFromID(212),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 213,
        nameMicro: getMicroFromID(213),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 214,
        nameMicro: getMicroFromID(214),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 215,
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
        nameMicro: getMicroFromID(301),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 302,
        nameMicro: getMicroFromID(302),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 303,
        nameMicro: getMicroFromID(303),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 304,
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
        nameMicro: getMicroFromID(401),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 402,
        nameMicro: getMicroFromID(402),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 403,
        nameMicro: getMicroFromID(403),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 404,
        nameMicro: getMicroFromID(404),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 405,
        nameMicro: getMicroFromID(405),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 406,
        nameMicro: getMicroFromID(406),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 407,
        nameMicro: getMicroFromID(407),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 408,
        nameMicro: getMicroFromID(408),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 409,
        nameMicro: getMicroFromID(409),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 410,
        nameMicro: getMicroFromID(410),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 411,
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
        nameMicro: getMicroFromID(501),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 502,
        nameMicro: getMicroFromID(502),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 503,
        nameMicro: getMicroFromID(503),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 504,
        nameMicro: getMicroFromID(504),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 505,
        nameMicro: getMicroFromID(505),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 506,
        nameMicro: getMicroFromID(506),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 507,
        nameMicro: getMicroFromID(507),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 508,
        nameMicro: getMicroFromID(508),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 509,
        nameMicro: getMicroFromID(509),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 510,
        nameMicro: getMicroFromID(510),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 511,
        nameMicro: getMicroFromID(511),
        quizTot: 0,
        prevNumber: 0,
        selectedNumber: 0,
        completedPercetage: 0,
      },
      {
        idMicro: 512,
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

const USER_MICRO_FAV_KEY_NAME = `${getAccessTokenPayload().id}microTopicFavArray`;

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
  return JSON.parse(favData);
}

import {
  DEFAULT_TIME,
  TimeInterface,
} from "../../components/layouts/layout-MB/useTimer";

const USER_MACRO_FAV_TIME_KEY = "macroTimeFav";

export function setFavTimeMacro(time: TimeInterface): void {
  localStorage.setItem(USER_MACRO_FAV_TIME_KEY, JSON.stringify(time));
}

export function getFavTimeMacro(): TimeInterface {
  const stringTime = localStorage.getItem(USER_MACRO_FAV_TIME_KEY);

  if (stringTime) {
    const localTime: TimeInterface = JSON.parse(stringTime);
    return localTime;
  } else {
    return DEFAULT_TIME;
  }
}

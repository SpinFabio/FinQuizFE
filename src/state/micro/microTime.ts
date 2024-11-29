import {
  DEFAULT_TIME,
  TimeInterface,
} from "../../components/layouts/layout-MB/useTimer";

const USER_MICRO_FAV_TIME_KEY = "macroTimeFav";

export function setFavTimeMicro(time: TimeInterface): void {
  localStorage.setItem(USER_MICRO_FAV_TIME_KEY, JSON.stringify(time));
}

export function getFavTimeMicro(): TimeInterface {
  const stringTime = localStorage.getItem(USER_MICRO_FAV_TIME_KEY);

  if (stringTime) {
    const localTime: TimeInterface = JSON.parse(stringTime);
    return localTime;
  } else {
    return DEFAULT_TIME;
  }
}

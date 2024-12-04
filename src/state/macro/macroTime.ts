import {
  DEFAULT_TIME,
  TimeInterface,
} from "../../components/layouts/layout-MB/useTimer";
import { getAccessTokenPayload } from "../access-token/acces-token";

function getUserMacroFavTimeKey(): string {
  return `${getAccessTokenPayload()?.id ?? "temp"}macroTimeFav`;
}

export function setFavTimeMacro(time: TimeInterface): void {
  localStorage.setItem(getUserMacroFavTimeKey(), JSON.stringify(time));
}

export function getFavTimeMacro(): TimeInterface {
  const stringTime = localStorage.getItem(getUserMacroFavTimeKey());

  if (stringTime) {
    const localTime: TimeInterface = JSON.parse(stringTime);
    return localTime;
  } else {
    return DEFAULT_TIME;
  }
}

import {
  DEFAULT_TIME,
  TimeInterface,
} from "../../components/layouts/layout-MB/useTimer";
import { getAccessTokenPayload } from "../access-token/acces-token";

function getUserMicroFavTimeKey(): string {
  return `${getAccessTokenPayload()?.id ?? "temp"}macroTimeFav`;
}

export function setFavTimeMicro(time: TimeInterface): void {
  localStorage.setItem(getUserMicroFavTimeKey(), JSON.stringify(time));
}

export function getFavTimeMicro(): TimeInterface {
  const stringTime = localStorage.getItem(getUserMicroFavTimeKey());

  if (stringTime) {
    const localTime: TimeInterface = JSON.parse(stringTime);
    return localTime;
  } else {
    return DEFAULT_TIME;
  }
}

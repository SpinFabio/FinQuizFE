import { TimeInterface } from "../../components/layouts/layout-MB/useTimer";
import { getAccessTokenPayload } from "../access-token/acces-token";

const LOCAL_STORAGE_CURRENT_TIME_KEY = `${getAccessTokenPayload()?.id ?? "temp"}currenTimeForTimer`;

export function setCurrentTimer(time: TimeInterface): void {
  localStorage.setItem(LOCAL_STORAGE_CURRENT_TIME_KEY, JSON.stringify(time));
}

export function getCurrentTimer(): TimeInterface {
  const time = localStorage.getItem(LOCAL_STORAGE_CURRENT_TIME_KEY);
  if (!time) {
    throw new Error("No TimeInterface was found in local storage");
  } else {
    const parsedTime: TimeInterface = JSON.parse(time);
    return parsedTime;
  }
}

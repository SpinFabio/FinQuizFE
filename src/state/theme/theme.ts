import { getAccessTokenPayload } from "../access-token/acces-token";

export type ThemeType = "light" | "dark";

const LOCAL_STORAGE_THEME_KEY = `${getAccessTokenPayload()?.id??"temp"}theme`;

export function setTheme(theme: ThemeType) {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
}


export function getTheme(): ThemeType {
  const myTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (!myTheme || myTheme === "light") {
    return "light";
  } else {
    return "dark";
  }
}

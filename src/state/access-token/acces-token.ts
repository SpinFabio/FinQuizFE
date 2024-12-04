import { jwtDecode } from "jwt-decode";
import { AccessTokenPayload } from "../../common/tokens-interfaces";

const ACCESS_TOKEN_KEY_NAME = "accessToken";
const ACCESS_TOKEN_PAYLOAD_KEY_NAME = "accessTokenPayload";

export function setAccessToken(rawAccessToken: string) {
  try {
    const data = jwtDecode<AccessTokenPayload>(rawAccessToken);

    localStorage.setItem(ACCESS_TOKEN_PAYLOAD_KEY_NAME, JSON.stringify(data));
    sessionStorage.setItem(
      ACCESS_TOKEN_KEY_NAME,
      JSON.stringify(rawAccessToken),
    );
  } catch (error) {
    throw new Error("Invalid Access Token ");
  }
}

export function getAccessTokenPayload(): AccessTokenPayload|null {
  // da usare solo per cose che non richiedono scurezza tipo nome utente e password
  const data = localStorage.getItem(ACCESS_TOKEN_PAYLOAD_KEY_NAME);
  if (!data) {
    return  null
  }
  return JSON.parse(data) as AccessTokenPayload;
}

export function getRawAccessToken(): string {
  //versione sicura che controlla che nessuno abbia fatto delle "memory injection" con un payload fasullo, da usare quando si fanno delle richieste strutturate
  const rawAccessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY_NAME);
  if (!rawAccessToken) {
    throw new Error("Non è presente nessun Access Token in memoria");
  }
  return rawAccessToken;
}

export function removeAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_PAYLOAD_KEY_NAME);
  sessionStorage.removeItem(ACCESS_TOKEN_KEY_NAME);
}

export function verifyAccessTokenPresence(): boolean {
  const rawAccessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY_NAME);
  if (!rawAccessToken) {
    return false;
  }
  return true;
}

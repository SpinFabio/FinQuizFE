import {
  AuthBodyReqRes,
  authBodyReqResSchema,
} from "../common/user-interfaces";
import { BE_DOMAIN } from "../config/myenv";
import { setAccessToken, getAccessToken } from "./acces-token-utils";

export async function unauthFetch(
  endpoint_u: string,
  method_u: string,
  payload_u: object,
  message_u?: string,
): Promise<void> {
  const response: Response = await myFetch(
    endpoint_u,
    method_u,
    payload_u,
    message_u,
  );

  if (!response.ok) {
    throw new Error(`UnauthFetch failed with status: ${response.status}`);
  }

  const data: AuthBodyReqRes = await authBodyReqResSchema.validate(
    response.json,
  );
  setAccessToken(data.accessToken);

  return;
}

export async function authFetch<T>(
  endpoint_u: string,
  method_u: string,
  payload_u: object,
  message_u: string,
  onUnauthorized: () => void,
): Promise<T> {
  let response: Response = await myFetch(
    endpoint_u,
    method_u,
    payload_u,
    message_u,
  );

  if (response.status === 401) {
    try {
      const accessToken = await refreshTokens();
      setAccessToken(accessToken);
    } catch (error) {
      onUnauthorized();
      throw new Error("Refresh faield");
    }
    response = await myFetch(endpoint_u, method_u, payload_u, message_u);
  }

  if (!response.ok) {
    throw new Error(`UnauthFetch failed with status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function refreshTokens(): Promise<string> {
  const res: Response = await fetch(BE_DOMAIN + "api/user/refresh", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to refresh Tokens");
  }

  const body = res.json() as Promise<AuthBodyReqRes>;
  return (await body).accessToken;
}

async function myFetch(
  endpoint_u: string,
  method_u: string,
  payload_u: object,
  message_u?: string,
): Promise<Response> {
  const response: Response = await fetch(endpoint_u, {
    method: method_u,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload_u,
      accessToken: getAccessToken(),
      message: message_u || "",
    }),
  });

  return response;
}

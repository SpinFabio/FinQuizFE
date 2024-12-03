import {
  AuthBodyReqRes,
  authBodyReqResSchema,
} from "../common/user-interfaces";
import { BE_DOMAIN } from "../config/myenv";
import { LOGIN_PAGE_ROUTE } from "../config/routes";
import {
  setAccessToken,
  getAccessTokenPayload,
} from "../utils/acces-token-utils";

type HttpRequest = "POST" | "GET";

export async function unauthFetch(
  endpoint_u: string,
  method_u: HttpRequest,
  payload_u?: object,
): Promise<void> {
  const response: Response = await myFetch(endpoint_u, method_u, payload_u);

  const responseData = await response.json();
  const data: AuthBodyReqRes =
    await authBodyReqResSchema.validate(responseData);

  if (!response.ok) {
    throw new Error(
      `UnauthFetch failed with status: ${response.status} \n message: ${responseData.message}`,
    );
  }

  //console.log(data);
  setAccessToken(data.accessToken);

  return;
}

export async function authFetch<T>(
  endpoint_u: string,
  method_u: HttpRequest,
  payload_u?: object,
): Promise<T> {
  let response: Response = await myFetch(endpoint_u, method_u, payload_u);

  if (response.status === 401) {
    try {
      const accessToken = await refreshTokens();
      setAccessToken(accessToken);
    } catch (error) {
      window.location.href = LOGIN_PAGE_ROUTE;
      throw new Error("Refresh faield");
    }
    response = await myFetch(endpoint_u, method_u, payload_u);
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

//----------------------------------------------------------

async function myFetch(
  endpoint_u: string,
  method_u: HttpRequest,
  payload_u?: object,
): Promise<Response> {
  const response: Response = await fetch(endpoint_u, {
    method: method_u,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload_u,
    }),
  });

  return response;
}

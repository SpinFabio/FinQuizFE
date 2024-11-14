const ACCESS_TOKEN_KEY_NAME = "accessToken";

export function getAccessToken() {
  const accessToken: string | null = sessionStorage.getItem(
    ACCESS_TOKEN_KEY_NAME,
  );
  return accessToken;
}

export function setAccessToken(accessToken: string) {
  sessionStorage.setItem(ACCESS_TOKEN_KEY_NAME, accessToken);
}

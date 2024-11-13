export async function unauthFetch<T>(
  endpoint_u: string,
  method_u: string,
  payload_u: object,
): Promise<T> {
  const response: Response= await fetch(endpoint_u, {
    method: method_u,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload_u)
  });
  
  if (!response.ok) {
    throw new Error(`unauthFetch failed with status: ${response.status}`);
  }

  return response.json() as Promise<T>
}

export async function authFetch(endpoint: string) {}

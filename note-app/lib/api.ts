export const API_BASE = "http://127.0.0.1:8000";

export async function apiRequest<TResponse, TBody = undefined>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: TBody,
  token?: string
): Promise<TResponse> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail);
  }

  return res.json() as Promise<TResponse>;
}

import type { ApiResponseType } from "./types";

export async function parseResponse<T>(
  response: Response,
  responseType: ApiResponseType = "json"
): Promise<T> {
  if (
    response.status === 204 ||
    response.status === 205
  ) {
    return undefined as T;
  }

  switch (responseType) {
    case "text":
      return (await response.text()) as T;

    case "blob":
      return (await response.blob()) as T;

    case "arrayBuffer":
      return (await response.arrayBuffer()) as T;

    case "json":
    default: {
      const text = await response.text();

      if (!text) {
        return undefined as T;
      }

      try {
        return JSON.parse(text) as T;
      } catch {
        return text as T;
      }
    }
  }
}


export function getErrorMessage(data: unknown): string {
  if (typeof data === "string" && data.length > 0) {
    return data;
  }

  if (typeof data === "object" && data !== null) {
    const response = data as Record<string, unknown>;

    if (typeof response.detail === "string") {
      return response.detail;
    }

    if (typeof response.message === "string") {
      return response.message;
    }
  }

  return "An unexpected API error occurred.";
}
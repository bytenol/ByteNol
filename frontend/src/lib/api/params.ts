import type { QueryParams } from "./types";

export function serializeParams(
  params?: QueryParams
): string {
  if (!params) return "";

  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (value instanceof Date) {
      searchParams.append(key, value.toISOString());
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        searchParams.append(key, String(item));
      }

      continue;
    }

    searchParams.append(key, String(value));
  }

  const query = searchParams.toString();

  return query ? `?${query}` : "";
}


export function buildURL(
  baseURL: string,
  endpoint: string,
  params?: QueryParams
): string {
  const normalizedBase = baseURL.replace(/\/+$/, "");
  const normalizedEndpoint = endpoint.replace(/^\/+/, "");

  const url = `${normalizedBase}/${normalizedEndpoint}`;

  return `${url}${serializeParams(params)}`;
}
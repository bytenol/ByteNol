export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

export type ApiResponseType =
  | "json"
  | "text"
  | "blob"
  | "arrayBuffer";

export type QueryParamValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | readonly (string | number | boolean)[];

export type QueryParams = Record<string, QueryParamValue>;

export interface ApiRequestConfig
  extends Omit<RequestInit, "body" | "method"> {
  params?: QueryParams;
  body?: unknown;
  responseType?: ApiResponseType;
  timeout?: number;
  auth?: boolean;
}

export interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: HeadersInit;

  getAccessToken?: () =>
    | string
    | null
    | undefined
    | Promise<string | null | undefined>;

  onUnauthorized?: () => void | Promise<void>;
}

export interface ApiErrorResponse {
  detail?: string;
  message?: string;
  [key: string]: unknown;
}






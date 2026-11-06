import { ApiClient } from "./client";


export const api = new ApiClient({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000/api/v1",

    timeout: 30000,

    headers: {
        Accept: "application/json",
    },

    getAccessToken: () => {
        return localStorage.getItem("access_token");
    },

    onUnauthorized: () => {
        // Authentication flow will be connected here.
        // Do not automatically redirect until the auth
        // and token-refresh architecture is implemented.
    },
});

export { ApiError } from "./client";

export type {
    ApiRequestConfig,
    ApiClientConfig,
    QueryParams,
    QueryParamValue,
    HttpMethod,
    ResponseType,
} from "./client";
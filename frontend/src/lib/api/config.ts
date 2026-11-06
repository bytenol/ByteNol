import { ApiClient } from "./client";


export const api = new ApiClient({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ??
    "http://127.0.0.1:8000/api/v1",

  timeout: 30000,

  headers: {
    Accept: "application/json",
  },

  getAccessToken: () => {
    return localStorage.getItem("access_token");
  },

  onUnauthorized: () => {
    // JWT refresh and authentication handling
    // will be implemented in the authentication layer.
  },
});
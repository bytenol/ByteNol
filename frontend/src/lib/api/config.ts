import { ApiClient } from "./client";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const VITE_REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN;


if (!VITE_API_URL) {
    throw new Error("VITE_API_URL is not defined");
}

if(!VITE_ACCESS_TOKEN) {
    throw new Error("VITE_ACCESS_TOKEN is not defined");
}

if(!VITE_REFRESH_TOKEN) {
    throw new Error("VITE_REFRESH_TOKEN is not defined");
}


export const api = new ApiClient({
    baseURL: VITE_API_URL,

    timeout: 30000,

    headers: {
        Accept: "application/json",
    },

    getAccessToken: () => {
        return localStorage.getItem(VITE_ACCESS_TOKEN);
    },

    setAccessToken: (token: string) => {
        localStorage.setItem(VITE_ACCESS_TOKEN, token);
    },

    getRefreshToken: () => {
        return localStorage.getItem(VITE_REFRESH_TOKEN);
    },

    setRefreshToken: (token: string) => {
        localStorage.setItem(VITE_REFRESH_TOKEN, token);
    },

    clearAuthToken: () => {
        localStorage.removeItem(VITE_ACCESS_TOKEN);
        localStorage.removeItem(VITE_REFRESH_TOKEN); 
    },

    onUnauthorized: () => {
        // JWT refresh and authentication handling
        // will be implemented in the authentication layer.
    },
});
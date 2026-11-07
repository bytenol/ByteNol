import { refreshTokenReq } from "../../features/auth/auth.api";
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "../../features/auth/auth.utils";
import { ApiClient } from "./client";

const VITE_API_URL = import.meta.env.VITE_API_URL;


if (!VITE_API_URL) {
    throw new Error("VITE_API_URL is not defined");
}


export const api = new ApiClient({
    baseURL: VITE_API_URL,

    timeout: 30000,

    headers: {
        Accept: "application/json",
    },

    getAccessToken: getAccessToken,

    getRefreshToken: getRefreshToken,

    onUnauthorized: async() => {
        const refreshToken = getRefreshToken();
        try {
            const resp  = await refreshTokenReq(refreshToken as string);
            setAccessToken(resp.access as string);
            setRefreshToken(resp.refresh as string);
        } catch {
            // nothing to do here
        }

    },
});
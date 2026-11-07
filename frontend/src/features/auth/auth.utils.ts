const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const VITE_REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN;


if(!VITE_ACCESS_TOKEN) {
    throw new Error("VITE_ACCESS_TOKEN is not defined");
}

if(!VITE_REFRESH_TOKEN) {
    throw new Error("VITE_REFRESH_TOKEN is not defined");
}


export const setAccessToken = (token: string) => {
    window.localStorage.setItem(VITE_ACCESS_TOKEN, token);
}


export const setRefreshToken = (token: string) => {
    window.localStorage.setItem(VITE_REFRESH_TOKEN, token);
}


export const getAccessToken = () => window.localStorage.getItem(VITE_ACCESS_TOKEN);


export const getRefreshToken = () => window.localStorage.getItem(VITE_REFRESH_TOKEN);


export const clearAuthTokens = () => {
    window.localStorage.removeItem(VITE_ACCESS_TOKEN);
    window.localStorage.removeItem(VITE_REFRESH_TOKEN);
}
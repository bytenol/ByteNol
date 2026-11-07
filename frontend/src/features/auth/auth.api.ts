import { api } from "../../lib/api"
import type { iUser } from "../users/users.types";
import type { iAuthForm, iAuthResponse, iMeResponse } from "./auth.types"


export const registerReq = async(body: iAuthForm) => {
    return api.post<Partial<iUser>>("auth/register/", body, { auth: false });
}


export const loginReq = async(body: Partial<iAuthForm>) => {
    return api.post<iAuthResponse>("auth/login/", body, { auth: false });
}


export const logoutReq = async(refreshToken: string) => {
    return api.post<null>("auth/logout/", { refresh: refreshToken });
}


export const refreshTokenReq = async(refreshToken: string) => {
    return api.post<Partial<iAuthResponse>>("auth/token/refresh/", {
        token: refreshToken
    }, { auth: false });
}


export const verifyEmailReq = async(uid: string, token: string) => {
    return api.post<null>("auth/verify-email/", {
        uid: uid,
        token: token
    }, { auth: false });
}


export const resendVerificationMailReq = async(email: string) => {
    return api.post<null>("auth/resend-verification/", {
        email
    }, { auth: false })
}



export const getAuthenticatedUserReq = async() => {
    return api.get<iMeResponse>("auth/me/");
}
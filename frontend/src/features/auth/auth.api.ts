import { api } from "../../lib/api"
import type { iUser } from "../users/users.types";
import type { iAuthForm, iAuthResponse } from "./auth.types"


export const registerReq = async(body: iAuthForm) => {
    return api.post<Partial<iUser>>("auth/register/", body, { auth: false });
}


export const loginReq = async(body: Partial<iAuthForm>) => {
    return api.post<iAuthResponse>("auth/login/", body, { auth: false });
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
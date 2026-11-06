import type { iUser } from "../users/users.types";

export interface iAuthForm {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    password_confirm: string;
}


export interface iAuthResponse {
    refresh: string;
    access: string;
    user: iUser
}
export type user_role_t = "ADMIN" | "CUSTOMER" | "STAFF";

export interface iUser {
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    id: string;
    profile_image: string | null,
    role: user_role_t;
    is_email_verified: boolean;
    date_joined: string;
}
export type contact_choice_t = "LEARN" | "BUILD" | "GENERAL" | "SOLUTION" | "AUTOMATE"


export interface iContact {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    content: string;
    choice: contact_choice_t;
}
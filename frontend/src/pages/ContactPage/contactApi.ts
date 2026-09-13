import { sendJsonRequest } from "../../api/client"
import type { iJsonResponse } from "../../types/api"
import type { iContact } from "../../types/contact"


export const createContactReq = async(data: iContact) => {
    return await sendJsonRequest<iContact, iJsonResponse<string>>("contact/create/", data, true);
}
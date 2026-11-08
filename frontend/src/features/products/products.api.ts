import { api } from "../../lib/api"
import type { iJsonResponse } from "../../types/api";
import type { iProduct, iCategory } from "./products.types"

export const fetchCategoriesReq = async() => {
    return api.get<iCategory[]>("categories/");
}


export const fetchProductsReq = async() => {
    return api.get<iJsonResponse<iProduct>>("products/");
}


export const fetchProductDetailsReq = async(slug: string) => {
    return api.get<iProduct>(`products/${slug}/`);
}
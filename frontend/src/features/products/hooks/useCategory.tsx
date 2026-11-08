import { useEffect, useState } from "react"
import type { iCategory } from "../products.types"
import { fetchCategoriesReq } from "../products.api";

export const useCategory = () => {
    const [categories, setCategories] = useState<iCategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async() => {
        setIsLoading(true);
        try {
            const catResp = await fetchCategoriesReq();
            setCategories(catResp);
        } catch {
            setCategories([]);
        }finally {
            setIsLoading(false);
        }
    };

    return { categories, isLoading };
}
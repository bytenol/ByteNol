import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { iUser } from "../features/users/users.types";
import { getAuthenticatedUserReq, loginReq, logoutReq } from "../features/auth/auth.api";
import type { iAuthForm } from "../features/auth/auth.types";
import { clearAuthTokens, getRefreshToken, setAccessToken, setRefreshToken } from "../features/auth/auth.utils";


interface iSessionContext {
    authenticatedUser: iUser | null;
    isAuthLoading: boolean;
    login: (data: Partial<iAuthForm>) => Promise<void>;
    logout: () => Promise<void>;
}


interface iSessionProviderProps {
    children: ReactNode;
}


const SessionContext = createContext<iSessionContext | undefined>(undefined);


export const SessionProvider = ({ children }: iSessionProviderProps) => {
    const [authenticatedUser, setAuthenticatedUser] = useState<iUser | null>(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);


    useEffect(() => {
        const loadAll = async() => {
            setIsAuthLoading(true);
            try {
                await fetchAuthenticatedUser();
            } finally {
                setIsAuthLoading(false);
            }
        }
        loadAll();
    }, []);


    const login = async(data: Partial<iAuthForm>) => {
        try {
            // login user
            const resp = await loginReq(data);
            setAccessToken(resp.access);
            setRefreshToken(resp.refresh);
            setAuthenticatedUser(resp.user);
        } catch(err) {
            throw err;
        }
    }


    const logout = async() => {
        const refreshToken = getRefreshToken() || "";
        try {
            await logoutReq(refreshToken);
            clearAuthTokens();
            setAuthenticatedUser(null);
        } catch (err) {

        }
    }


    const fetchAuthenticatedUser = async() => {
        try {
            const resp = await getAuthenticatedUserReq();
            setAuthenticatedUser(resp.user);
        } catch {
            setAuthenticatedUser(null);
        }
    }

    return (
        <SessionContext.Provider
            value={{
                authenticatedUser,
                isAuthLoading,
                login,
                logout
            }}
        >
            { children }
        </SessionContext.Provider>
    );
}


export const useSession = () => {
    const context = useContext(SessionContext);

    if(!context) {
        throw new Error("useSession() must be called inside a SessionProvider");
    }

    return context;
}
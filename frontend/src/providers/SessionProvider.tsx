import { createContext, useContext, type ReactNode } from "react";


interface iSessionContext {

}


interface iSessionProviderProps {
    children: ReactNode;
}


const SessionContext = createContext<iSessionContext | undefined>(undefined);


export const SessionProvider = ({ children }: iSessionProviderProps) => {
    return (
        <SessionContext.Provider
            value={{

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
import { Outlet, type RouteObject } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import TroubleSigningInPage from "./pages/TroubleSigningInPage";

export const authRoutes: RouteObject[] = [

    {
        path: "auth",
        element: <Outlet />,
        children: [
            {
                path: ":formType",
                element: <AuthPage />
            },

            {
                path: "reset",
                element: <TroubleSigningInPage />
            }
        ]
    },

    {
        path: "verify-email",
        element: <VerifyEmailPage />
    },
]
import { Outlet, type RouteObject } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";

export const authRoutes: RouteObject[] = [

    {
        path: "auth",
        element: <Outlet />,
        children: [
            {
                path: ":formType",
                element: <AuthPage />
            },
        ]
    },

    {
        path: "verify-email",
        element: <VerifyEmailPage />
    }
]
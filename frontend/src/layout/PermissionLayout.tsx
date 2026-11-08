import type { user_role_t } from "../features/users/users.types";
import { useSession } from "../providers/SessionProvider";
import { Navigate, Outlet } from "react-router-dom";


interface iPermissionLayoutProps {
    roles: user_role_t[];
}



export default function PermissionLayout({ roles }: iPermissionLayoutProps) {
    const { authenticatedUser } = useSession();

    if(!authenticatedUser) {
        return <Navigate to="/auth/signin" replace />;
    }

    if(roles.some(role => authenticatedUser.role !== role))
        return <Navigate to="/not-permitted" replace />;

    return <Outlet />;
}
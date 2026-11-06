import type { RouteObject } from "react-router-dom";
import { dashboardRoutes } from "../features/dashboard/dashboard.routes";


export const protectedRoutes: RouteObject[] = [
    ...dashboardRoutes
]
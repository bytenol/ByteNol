import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";

import publicRoutes from "./publicRoutes";
import { protectedRoutes } from "./protectedRoutes";
import productRoutes from "../features/products/products.routes";
import PermissionDeniedPage from "../pages/ErrorPage/PermissionDeniedPage";

const router = createBrowserRouter([
	...publicRoutes,	
	...protectedRoutes,

	...productRoutes,
	{
		path: "not-permitted",
		element: <PermissionDeniedPage />
	},

	{
		path: "*",
		element: <NotFoundPage />
	}
]);

export default router;
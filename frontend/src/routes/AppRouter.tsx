import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";

import publicRoutes from "./publicRoutes";
import { protectedRoutes } from "./protectedRoutes";

const router = createBrowserRouter([
	...publicRoutes,	
	...protectedRoutes,
	{
		path: "*",
		element: <NotFoundPage />
	}
]);

export default router;
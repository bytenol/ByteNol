import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";

import publicRoutes from "./publicRoutes";

const router = createBrowserRouter([
	...publicRoutes,	

	{
		path: "*",
		element: <NotFoundPage />
	}
]);

export default router;
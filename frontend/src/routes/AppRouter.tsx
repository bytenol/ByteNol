import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";

import publicRoutes from "./publicRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PublicLayout />,
		children: publicRoutes,
	},  

	{
		path: "*",
		element: <NotFoundPage />
	}
]);

export default router;
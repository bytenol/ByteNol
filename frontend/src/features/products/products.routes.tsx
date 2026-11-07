import { Outlet, type RouteObject } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";


const productRoutes: RouteObject[] = [
    {
        path: "products",
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <ProductListPage />
            },

            {
                path: ":productId",
                element: <ProductDetailsPage />
            }
        ]
    }
];


export default productRoutes;
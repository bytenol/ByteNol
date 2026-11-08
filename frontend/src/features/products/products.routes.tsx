import { type RouteObject } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import PublicLayout from "../../layout/PublicLayout";
import PublicFooter from "../../components/layout/PublicFooter";
import PublicNavbar from "../../components/layout/PublicNavbar";
import ProductFormPage from "./pages/ProductCreatePage";
import PermissionLayout from "../../layout/PermissionLayout";


const productRoutes: RouteObject[] = [
    {
        path: "products",
        element: <PublicLayout header={<PublicNavbar />} footer={<PublicFooter />} />,
        children: [
            {
                index: true,
                element: <ProductListPage />
            },

            // protected routes
            {
                path: "",
                element: <PermissionLayout roles={["ADMIN", "STAFF"]} />,
                children: [
                    {
                        path: "new",
                        element: <ProductFormPage />
                    },

                    {
                        path: ":productId/edit",
                        element: <ProductFormPage />
                    }
                ]
            },
        ]
    },

    {
        path: "products",
        element: <PublicLayout header={null} footer={<PublicFooter />} />,
        children: [
            {
                path: ":productId",
                element: <ProductDetailsPage />
            },
        ]
    }
];


export default productRoutes;
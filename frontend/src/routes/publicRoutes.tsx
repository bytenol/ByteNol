import type { RouteObject } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ResourcesPage from "../pages/ResourcesPage/ResourcesPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CourseDetailPage from "../features/courses/pages/CourseDetailPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import CourseListPage from "../features/courses/pages/CourseListPage";


const publicRoutes: RouteObject[] = [
    {
        index: true,
        element: <HomePage />
    },

    {
        path: "/about",
        element: <AboutPage />
    },

    {
        path: "/products",
        element: <ProductsPage />
    },

    {
        path: "/resources",
        element: <ResourcesPage />
    },

    {
        path: "/courses",
        element: <CourseListPage />
    },

    {
        path: "/courses/:courseName",
        element: <CourseDetailPage />
    },

    {
        path: "/contact",
        element: <ContactPage />
    },

    {
        path: "auth/:formType",
        element: <AuthPage />
    }
];

export default publicRoutes;
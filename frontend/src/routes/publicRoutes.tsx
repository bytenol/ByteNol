import type { RouteObject } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ResourcesPage from "../pages/ResourcesPage/ResourcesPage";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CourseDetailPage from "../pages/CoursesPage/CourseDetailPage";


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
        element: <CoursesPage />
    },

    {
        path: "/courses/:courseName",
        element: <CourseDetailPage />
    },

    {
        path: "/contact",
        element: <ContactPage />
    }
];

export default publicRoutes;
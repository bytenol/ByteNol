import type { RouteObject } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ResourcesPage from "../pages/ResourcesPage/ResourcesPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CourseDetailPage from "../features/courses/pages/CourseDetailPage";
import CourseListPage from "../features/courses/pages/CourseListPage";
import { authRoutes } from "../features/auth/auth.routes";
import PublicLayout from "../layout/PublicLayout";
import PublicNavbar from "../components/layout/PublicNavbar";
import PublicFooter from "../components/layout/PublicFooter";


const publicRoutes: RouteObject[] = [
    {
        path: "",
        element: <PublicLayout header={<PublicNavbar />} footer={<PublicFooter />} />,
        children: [
            {
                index: true,
                element: <HomePage />
            },

            {
                path: "/about",
                element: <AboutPage />
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

        ]
    },

    ...authRoutes
];

export default publicRoutes;
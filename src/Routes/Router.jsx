import { createBrowserRouter } from "react-router";
import HomePageLayout from "../Layouts/HomePageLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePageLayout
    }
])
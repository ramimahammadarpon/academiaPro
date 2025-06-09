import { createBrowserRouter } from "react-router";
import HomePageLayout from "../Layouts/HomePageLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Courses from "../Pages/Courses";
import AddCourse from "../Pages/AddCourse";
import CourseDetails from "../Pages/CourseDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePageLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'signUp',
                Component: SignUp
            },
            {
                path: 'courses',
                Component: Courses
            },
            {
                path: 'AddCourse',
                Component: AddCourse
            },
            {
                path: 'courseDetails/:id',
                Component: CourseDetails
            }
        ]
    }
])
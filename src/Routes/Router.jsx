import { createBrowserRouter } from "react-router";
import HomePageLayout from "../Layouts/HomePageLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Courses from "../Pages/Courses";
import AddCourse from "../Pages/AddCourse";
import CourseDetails from "../Pages/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import ManageCourses from "../Pages/ManageCourses";
import { path } from "motion/react-client";
import EditCourse from "../Pages/EditCourse";
import MyEnrolledCourses from "../Pages/MyEnrolledCourses";
import Error from "../Pages/Error";
import AboutUs from "../Pages/AboutUs";
import TermsAndServices from "../Pages/TermsAndServices";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import OtherDocumentations from "../Pages/OtherDocumentations";

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
                element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
            },
            {
                path: 'courseDetails/:id',
                element: <CourseDetails></CourseDetails>
            }, 
            {
                path: 'manageCourses',
                element: <PrivateRoute><ManageCourses></ManageCourses></PrivateRoute>
            },
            {
                path: 'editCourse/:id',
                element: <PrivateRoute><EditCourse></EditCourse></PrivateRoute>
            },
            {
                path: 'myEnrolledCourses',
                element: <PrivateRoute><MyEnrolledCourses></MyEnrolledCourses></PrivateRoute>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'termsAndServices',
                Component: TermsAndServices
            },
            {
                path: 'privacyPolicy',
                Component: PrivacyPolicy
            },
            {
                path: 'otherDocumentations',
                Component: OtherDocumentations
            }
        ]
    }, 
    {
        path: '/*', 
        Component: Error
    }
])
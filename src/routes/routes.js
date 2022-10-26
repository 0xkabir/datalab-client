import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Blog from "../pages/Blog/Blog";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <Home></Home>},
        {path: '/', element: <Home></Home>},
        {path: '/courses', element: <Courses></Courses>, loader: ()=>fetch('https://datalab-server.vercel.app/courses/')},
        {path: '/courses/:id', element: <CourseDetails></CourseDetails>, loader: ({params})=>fetch(`https://datalab-server.vercel.app/courses/${params.id}/`)},
        {path: '/faq', element: <FAQ></FAQ>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>}
    ]}
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <Home></Home>},
        {path: '/', element: <Home></Home>},
        {path: '/courses', element: <Courses></Courses>},
        {path: '/faq', element: <FAQ></FAQ>},
        {path: '/blog', element: <Blog></Blog>}
    ]}
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/Home/Home/AboutMe/AboutMe";
import Contact from "../Pages/Home/Home/Contact/Contact";
import ProjectDetails from "../Pages/Home/Home/Projects/ProjectDetails";
import Projects from "../Pages/Home/Home/Projects/Projects";
import Services from "../Pages/Home/Home/Services/Services";
import Skills from "../Pages/Home/Home/Skils/Skills";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <AboutMe/>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services/>,
            },
            {
                path: '/services',
                element: <Services/>,
            },
            {
                path: '/skills',
                element: <Skills/>,
            },
            {
                path: '/projects',
                element: <Projects/>,
            },
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails />,
                loader:({params})=>fetch(`projectData.json/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/blogs',
                element: <Blogs/>
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 page !!</h1>
    }
])
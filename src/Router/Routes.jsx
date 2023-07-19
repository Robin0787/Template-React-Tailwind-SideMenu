import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact.jsx";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/projects',
                element: <div className="text-3xl md:text-5xl text-center font-thin bg-gradient-to-r from-indigo-800 to-indigo-900 text-white flex justify-center items-center h-full w-full">
                <h2 className="p-10  rounded-lg shadow-[2px_2px_10px_6px] shadow-blue-300">Projects</h2>
            </div>
            }
        ]
    }
])



export default routes;
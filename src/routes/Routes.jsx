import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'sing-up',
                element: <SingUp></SingUp>
            }
        ],
        errorElement: <div className="text-center h-[100vh] flex justify-center items-center">
            <div><h1>404 Eroor</h1>
                <Link to="/"><div className="btn btn-primary my-20">Back to Home</div></Link></div>
        </div>
    }
]);
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServiceTotal from "../../Pages/Home/Services/ServicesTotal/ServiceTotal";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/serviceTotal',
                element: <ServiceTotal></ServiceTotal>
            }
        ]
    }
])

export default router;
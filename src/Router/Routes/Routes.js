import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import ServiceTotal from "../../Pages/Home/Services/ServicesTotal/ServiceTotal";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/serviceTotal',
                element: <ServiceTotal></ServiceTotal>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://personal-criminan-lawyer-server.vercel.app/details/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRoute><Review></Review></PrivateRoute>
            }

        ]
    }
])

export default router;
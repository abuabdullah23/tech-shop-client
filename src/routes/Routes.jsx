import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Error from "../Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductUpdate from "../pages/ProductUpdate/ProductUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-product',
                element: <PrivateRoutes><AddProduct /></PrivateRoutes>
            },
            {
                path: '/my-cart',
                element: <PrivateRoutes><MyCart /></PrivateRoutes>
            },
            {
                path: '/products/:title',
                element: <Products />,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoutes><ProductDetails /></PrivateRoutes>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_API}/product-details/${params.id}`)
            },
            {
                path: '/product-update/:id',
                element: <PrivateRoutes><ProductUpdate /></PrivateRoutes>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_API}/product-details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
]);

export default router;
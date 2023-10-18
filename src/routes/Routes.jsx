import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Error from "../Error";

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
                element: <AddProduct />
            },
            {
                path: '/my-cart',
                element: <MyCart />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
]);

export default router;
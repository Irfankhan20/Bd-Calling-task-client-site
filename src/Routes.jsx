import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contacts from "./pages/contacts/Contacts";
import Login from "./pages/login/Login";
import Registration from "./pages/register/Registration";
import ProductDetails from "./pages/products/ProductDetails";
import AddToCart from "./pages/products/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () =>
          fetch("https://bd-calling-job-task-server.vercel.app/products"),
      },

      {
        path: "/contactUs",
        element: <Contacts></Contacts>,
      },
      {
        path: `/products/:id`,
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://bd-calling-job-task-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/addtocart",
        element: <AddToCart></AddToCart>,
      },
    ],
  },
]);

export default router;

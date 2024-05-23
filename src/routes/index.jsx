import { Navigate, createHashRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Producto from "../pages/Producto";
import RouteNotFound from "../pages/RouteNotFound";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Sneakers from "../pages/Sneakers";
import Hats from "../pages/Hats";
import Jackets from "../pages/Jackets";
import Register from "../pages/Register";
import Carrito from "../pages/Carrito";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteNotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/sneakers",
        element: <Sneakers />,
      },
      {
        path: "/hats",
        element: <Hats />,
      },
      {
        path: "/jackets",
        element: <Jackets />,
      },
      {
        path: "/producto",
        element: <Producto />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/carrito",
        element: <Carrito />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

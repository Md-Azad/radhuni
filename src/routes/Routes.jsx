import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/OrderFood/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Secret from "../pages/sharedPages/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Home/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import DashboardHome from "../pages/Dashboard/Home/DashboardHome";
import Users from "../pages/Dashboard/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/myCart",
        element: <MyCart></MyCart>,
      },

      //   admin routes
      {
        path: "/dashboard/users",
        element: <Users></Users>,
      },
    ],
  },
]);

export default router;

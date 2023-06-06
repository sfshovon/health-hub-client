import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Appointment from "../pages/Appointment/Appointment";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/appointment',
        element: <Appointment/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes> <Dashboard/> </PrivateRoutes> 
  }
])
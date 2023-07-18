import { createBrowserRouter } from "react-router-dom";
import MyAppointment from "../Components/MyAppointment/MyAppointment";
import DashboardLayout from "../Layout/DashboardLayout";
import Layout from "../Layout/Layout";
import Appointment from "../pages/Appointment/Appointment";
import AllUser from "../pages/Dashboard/AllUser";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
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
    element: <PrivateRoutes> <DashboardLayout/> </PrivateRoutes> ,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment/> 
      },
      {
        path: '/dashboard/allUsers',
        element: <AdminRoutes>  <AllUser/>  </AdminRoutes> 
      }
    ]
  }
])
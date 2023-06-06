import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Appointment from "../pages/Appointment/Appointment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

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
        path: '/appointment',
        element: <Appointment/>
      }
    ]
  },
])
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Pages/Layout/Root';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Authproviders from './Providers/Authproviders';
import AddProduct from './Components/Pages/AddProduct/AddProduct';
import DashBoard from './Components/Pages/DashBoard/DashBoard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyTasks from './Components/Pages/MyTasks/MyTasks';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import Statistics from './Components/Pages/Statistics/Statistics';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      },
      {
        path: "/mytasks",
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
      },
      {
        path : "/statistics",
        element : <PrivateRoute><Statistics></Statistics></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authproviders>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
      </Authproviders>
  </React.StrictMode>,
)

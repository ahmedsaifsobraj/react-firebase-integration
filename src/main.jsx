import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Products from './components/Products/Products.jsx';
import Orders from './components/Orders/Orders.jsx';
import RequireAuth from './components/RequireAuth/RequireAuth.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/home",
        element:<Home/>,
      },
      {
        path:"/products",
        element:<Products></Products>,
      },
      {
        path:"/orders",
        element:<RequireAuth><Orders></Orders></RequireAuth>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

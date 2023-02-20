import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './login';
import Accueil from './accueil';
import LoginCode from './loginCode';
import Template from './template';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginCode",
    element: <LoginCode/>,
  },
  {
    path: "/accueil",
    element: <Accueil />,
  },
  {
    path: "/template",
    element: <Template />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



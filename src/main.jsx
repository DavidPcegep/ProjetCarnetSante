import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './page/login/login.jsx';
import Accueil from './page/accueil/accueil.jsx';
import LoginCode from './page/login/loginCode.jsx';
import Template from './template';
import Ressource from './page/ressource/ressource.jsx';
import Generalite from './page/generalites/generalite.jsx';
import Douleur from './page/douleur/douleur.jsx';
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
    path: "/generalite",
    element: <Generalite />,
  },
  {
    path: "/template",
    element: <Template />,
  },
  {
    path: "/douleur",
    element: <Douleur />,
  },
  {
    path: "/ressource",
    element: <Ressource />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



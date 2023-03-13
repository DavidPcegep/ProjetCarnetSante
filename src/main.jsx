import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './page/login/login.jsx';
import Accueil from './page/accueil/accueil.jsx';
import LoginCode from './page/login/loginCode.jsx';
import Template from './template';
import Ressource from './page/ressource/ressource.jsx';
import Specialiste from './page/ressource/specialiste.jsx';
import ModifierInfrastructure from './page/ressource/modifierInfrastructure';
import ModifierAccompagnant from './page/ressource/modifierAccompagnant';
import Accompagnant from './page/ressource/accompagnant';
import Infrastructure from './page/ressource/infrastructure';
import NumeroUrgence from './page/ressource/numeroUrgence';
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
  },
  {
    path: "/ressource/specialiste",
    element: <Specialiste />,
  },
  {
    path: "/ressource/accompagnant",
    element: <Accompagnant />,
  },
  {
    path: "/ressource/infrastructure",
    element: <Infrastructure />,
  },
  {
    path: "/ressource/infrastructure/modifier",
    element: <ModifierInfrastructure />,
  },
  {
    path: "/ressource/accompagnant/modifier",
    element: <ModifierAccompagnant />,
  },
  {
    path: "/ressource/numeroUrgence",
    element: <NumeroUrgence />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



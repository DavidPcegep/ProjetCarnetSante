import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './page/connexion/login/login.jsx';
import Accueil from './page/accueil/accueil.jsx';
import LoginCode from './page/connexion/loginCode/loginCode.jsx';
import Template from './template';
import Generalite from './page/informationPersonnelle/generalites/generalite.jsx';
import Douleur from './page/rendezVous/autoEvaluation/douleur/douleur.jsx';
import Quizz from './page/rendezVous/autoEvaluation/quizz/quizz.jsx';
import Prescription from './page/informationPersonnelle/prescription/prescription.jsx';
import Ressource from './page/ressource/ressource.jsx';
import AssuranceMaladie from './page/boiteAOutil/assuranceMaladie/assuranceMaladie.jsx';
import CarteHopital from './page/boiteAOutil/carteHopital/carteHopital.jsx';
import MatiereDangereuse from './page/boiteAOutil/matiereDangereuse/matiereDangereuse.jsx';
import MedecinFamille from './page/boiteAOutil/medecinFamille/medecinFamille.jsx';
import TemperaturePression from './page/boiteAOutil/temperaturePression/temperaturePression.jsx';
import {
  createBrowserRouter, Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,

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
    path: "/quizz",
    element: <Quizz />,
  },
  {
    path: "/prescription",
    element: <Prescription />,
  },
  {
    path: "/ressource",
    element: <Ressource />,
  },
  {
    path: "/assuranceMaladie",
    element: <AssuranceMaladie />,
  },
  {
    path: "/carteHopital",
    element: <CarteHopital />,
  },
  {
    path: "/matiereDangereuse",
    element: <MatiereDangereuse />,
  },
  {
    path: "/medecinFamille",
    element: <MedecinFamille />,
  },
  {
    path: "/temperaturePression",
    element: <TemperaturePression />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



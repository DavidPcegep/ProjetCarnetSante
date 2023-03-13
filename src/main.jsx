import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Accueil from './page/accueil/accueil.jsx';

import Login from './page/connexion/login/login.jsx';
import LoginCode from './page/connexion/loginCode/loginCode.jsx';
import Inscription from './page/connexion/inscription/inscription.jsx';


import Generalite from './page/informationPersonnelle/generalites/generalite.jsx';
import Prescription from './page/informationPersonnelle/prescription/prescription.jsx';

import Douleur from './page/rendezVous/autoEvaluation/douleur/douleur.jsx';
import Quizz from './page/rendezVous/autoEvaluation/quizz/quizz.jsx';

import AssuranceMaladie from './page/boiteAOutil/assuranceMaladie/assuranceMaladie.jsx';
import CarteHopital from './page/boiteAOutil/carteHopital/carteHopital.jsx';
import MatiereDangereuse from './page/boiteAOutil/matiereDangereuse/matiereDangereuse.jsx';
import MedecinFamille from './page/boiteAOutil/medecinFamille/medecinFamille.jsx';
import TemperaturePression from './page/boiteAOutil/temperaturePression/temperaturePression.jsx';
import Template from './template';
import Ressource from './page/ressource/ressource.jsx';
import Specialiste from './page/ressource/specialiste.jsx';
import ModifierInfrastructure from './page/ressource/modifierInfrastructure';
import ModifierAccompagnant from './page/ressource/modifierAccompagnant';
import Accompagnant from './page/ressource/accompagnant';
import Infrastructure from './page/ressource/infrastructure';
import NumeroUrgence from './page/ressource/numeroUrgence';
import {
  createBrowserRouter, Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/connexion/login" />,
  },
  {
    path: "/connexion/login",
    element: <Login />,
  },
  {
    path: "/connexion/loginCode",
    element: <LoginCode/>,
  },
  {
    path: "/connexion/inscription",
    element: <Inscription />,
  },
  {
    path: "/accueil",
    element: <Accueil />,
  },
  {
    path: "/informationPersonnelle/generalite",
    element: <Generalite />,
  },
  {
    path: "/rendezVous/AutoEvaluation/douleur",
    element: <Douleur />,
  },
  {
    path: "/rendezVous/AutoEvaluation/quizz",
    element: <Quizz />,
  },
  {
    path: "/informationPersonnelle/prescription",
    element: <Prescription />,
  },
  {
    path: "/boiteAOutil/assuranceMaladie",
    element: <AssuranceMaladie />,
  },
  {
    path: "/boiteAOutil/carteHopital",
    element: <CarteHopital />,
  },
  {
    path: "/boiteAOutil/matiereDangereuse",
    element: <MatiereDangereuse />,
  },
  {
    path: "/boiteAOutil/medecinFamille",
    element: <MedecinFamille />,
  },
  {
    path: "/boiteAOutil/temperaturePression",
    element: <TemperaturePression />,
  },
  {
    path: "/ressource",
    element: <Ressource />,
  },
  {
    path: "/template",
    element: <Template />,
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



import * as React from "react";
import "./login.css"
import backgroundLogin from './assets/img/Logo/BackgroundLogin.png'; 
import logoMonCarnetSante from "./assets/img/Logo/MonCarnetDeSante.png";
import { useState } from 'react';
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://172.16.6.116:80/api/utilisateur/authentifier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(data => {
      if(data[0]){
        console.log("oui")
        window.location.href = '/accueil';
      }
      else{
        console.log("Erreur")
        toast.error('Échec de la connexion!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
    )
    .catch((error) => {
      console.error('Error:', error);
    }
    );
  }
  return (
      <div className="Content">
          <div className="logoContent">
              <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
          </div>
          <hr></hr>
            <form onSubmit={handleSubmit}>
              <div className="textLoginContent">
                <h1 className="textLogin">Connecte-toi</h1>
              </div>
                <input type="text" className="form-control form-control-lg" placeholder="Email" name="user" value={inputs.user || ''} onChange={handleChange}/>
                <input type="password" className="form-control form-control-lg" placeholder="Mot de passe" name="mdp" value={inputs.mdp || ''} onChange={handleChange}/>
              <div className="buttonContentLogin">
                <input type="submit" className="buttonLogin" value="Se connecter"/>
              </div>
            </form>
            <div className="choixContent">ou</div>
            <div className="buttonContentLogin">
              <a href="/loginCode" className="btn btn-primary">Se connecter via un code</a>
            </div>
          <hr></hr>
          <div className="inscription container">
            <div className="backgroundLogin">
              <img src={backgroundLogin} className="w-100" />
            </div>
            <div className="inscriptionContent container">
              <div className="textLoginContent">
                <h3 className="textIncription">Pas encore de compte ?</h3>
              </div>
              <div className="buttonContentLogin">
                <button className="buttonLogin">S'inscrire</button>
              </div>
            </div>
          </div>
          <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </div>
  );
}


export default Login;

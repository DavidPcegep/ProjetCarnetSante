import * as React from "react";
import "./login.css"
import { useState } from 'react';
import backgroundLogin from '../../assets/img/Logo/BackgroundLogin.png';
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSante.png";
function LoginCode() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(inputs)
    fetch('http://172.16.7.165:8080/api/utilisateur/authentifier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
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
                <h1 className="textLogin">Envoie un code</h1>
              </div>
                <input type="text" className="form-control form-control-lg" placeholder="Email" name="user" value={inputs.user || ''} onChange={handleChange}/>
              <div className="buttonContentLogin">
                <input type="submit" className="buttonLogin w-100" value="Envoyer le code par courriel"/>
              </div>
              <div className="choixContent">ou</div>
              <div className="buttonContentLogin">
                <input type="submit" className="buttonLogin w-100 mt-3" value="Envoyer le code par téléphone"/>
              </div>
            </form>
          <hr></hr>
          <div className="inscription container">
            <div className="backgroundLogin">
              <img src={backgroundLogin} className="w-100" />
            </div>
            <div className="inscriptionContent container">
              <div className="buttonContentLogin">
                <a href="/login" className="btn btn-primary">Retour</a>
              </div>
            </div>
          </div>
      </div>
  );
}


export default LoginCode;

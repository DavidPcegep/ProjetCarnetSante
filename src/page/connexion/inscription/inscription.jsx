import * as React from "react";
import "./inscription.css"
import backgroundLogin from '../../../assets/img/Logo/logoBackground.png';
import logoMonCarnetSante from "../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import { useState } from 'react';
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

$(document).ready(function(){
  var inputInscriptionTelephone = $("#inputInscriptionTelephone");
  var im = new Inputmask("999-999-9999");
  im.mask(inputInscriptionTelephone);

  var inputInscriptionDateDeNaissance = $("#inputInscriptionDateDeNaissance");
  var im = new Inputmask("1999-01-01");
  im.mask(inputInscriptionDateDeNaissance);

});

function Inscription() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://172.16.6.116:8080/api/client/authentifier', {
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
                <h1 className="textLogin">Inscris-toi</h1>
              </div>
              <label form="inputInscriptionNom" id="labelInscriptionNom">Nom</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputInscriptionNom" name="inputInscriptionNom" placeholder="Felix"/>
              <label form="inputInscriptionPrenom" id="labelInscriptionNom">Prénom</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputInscriptionPrenom" name="inputInscriptionPrenom" placeholder="Kjellberg"/>
              <label form="inputInscriptionCourriel" id="labelInscriptionNom">Courriel</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputInscriptionNom" name="inputInscriptionNom" placeholder="Félix"/>
              <label form="inputInscriptionNom" id="labelInscriptionNom">dateDeNaissance</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputInscriptionNom" name="inputInscriptionNom" placeholder="Félix"/>
              <label form="inputInscriptionNom" id="labelInscriptionNom">Prénom</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputInscriptionNom" name="inputInscriptionNom" placeholder="Félix"/>
              <label form="inputInscriptionNom" id="labelInscriptionNom">Pharmacie</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputInscriptionNom" name="inputInscriptionNom" placeholder="Félix"/>
              <label form="inputGeneraliteTelephonePharmacie" id="labelGeneraliteTelephonePharmacieAjouter">Téléphone de la pharmacie</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputGeneralitePharmacieTelephone" name="inputGeneralitePharmacieTelephone" placeholder="Téléphone"/>
              <label form="inputGeneraliteAdressePhamarcie" id="labelGeneraliteAdressePhamarcieAjouter">Adresse de la pharmacie</label>
              <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteAdressePhamarcie" name="inputGeneraliteAdressePhamarcie" placeholder="Adresse de la pharmacie"/>

              <input type="password" className="form-control form-control-lg" placeholder="Email" name="courriel" value={inputs.courriel || ''} onChange={handleChange}/>
              <input type="password" className="form-control form-control-lg" placeholder="Mot de passe" name="motDePasse" value={inputs.motDePasse || ''} onChange={handleChange}/>
              <br/>
              <div className="buttonContentLogin">
                <input type="submit" className="buttonLogin" value="Se connecter"/>
              </div>
            </form>
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

export default Inscription;
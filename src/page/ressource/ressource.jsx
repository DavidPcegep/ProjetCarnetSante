import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./ressource.css"
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import logoHospital from "../../assets/img/Divers/Hopital.png"
import logoSpecialiste from "../../assets/img/Divers/MedecinDeFamille.png"
import logoAccompagnant from "../../assets/img/Divers/PersonnesContacter.png"
import logoTelephone from "../../assets/img/Divers/Telephone.png"
import Navigation from "../../extensions/navigation/navigation.jsx";


function Ressource() {
  return (
    <div>
      <div className="Content">
        
      {Navigation()}
        <a href="/login" className="position-absolute start-0 me-2 p-3 fs-1">
            <i className="btn-exit bi bi-box-arrow-left"></i>
        </a>
        <div className="logoContent">
            <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
        </div>
        <hr></hr>
                <button className="btn btnRessource">
                <a href="/ressource/specialiste"><img src={logoSpecialiste} alt="logoSpecialiste" className="logoRessource" />
                  <span>  | Specialiste </span></a>
                </button><br/>
                <button className="btn btnRessource">
                <a href="/ressource/accompagnant"><img src={logoAccompagnant} alt="logoAccompagnant" className="logoRessource" />
                  <span>  | Accompagnant </span></a>
                </button><br/>
                <button className="btn btnRessource">
                <a href="/ressource/infrastructure"><img src={logoHospital} alt="logoHospital" className="logoRessource" />
                  <span>  | Infrastructure </span></a>
                </button><br/>
                <button className="btn btnRessource">
                <a href="/ressource/numeroUrgence"><img src={logoTelephone} alt="logoTelephone" className="logoRessource" />
                  <span>  | Numero Urgence </span></a>
                </button>
      </div>
    </div>
  );
}

export default Ressource;
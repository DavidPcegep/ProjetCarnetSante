import * as React from "react";
import "./douleur.css";
import jauge from "../../extensions/jauge/jauge.jsx";
import jauge2 from "../../extensions/jauge/jauge2.jsx";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
function Douleur() {
    return (
        <div>
        <div className="Content">
            <a href="/login" className="position-absolute start-0 me-2 p-3 fs-1">
                <i className="btn-exit bi bi-box-arrow-left"></i>
            </a>
            <div className="logoContent">
                <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
            </div>
            <hr></hr>
            {jauge()}
        </div>
        </div>
    );
 }
export default Douleur;
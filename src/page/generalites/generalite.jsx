import * as React from "react";
import "./generalite.css"
import jauge from "../../extensions/jauge/jauge.jsx";
import calendrier from "../../extensions/calendrier/calendrier.jsx";
import sentiment from "../../extensions/sentiment/sentiment.jsx";
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";

function Generalite() {
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
          {sentiment()}
      </div>
    </div>
  );
}

export default Generalite;
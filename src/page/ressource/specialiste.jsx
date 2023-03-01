import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./specialiste.css"
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";


function Specialiste() {
    return (
      <div>
        <div className="Content">
          <a href="/ressource" className="position-absolute start-0 me-2 p-3 fs-1">
              <i className="btn-exit bi bi-box-arrow-left"></i>
          </a>
          <div className="logoContent">
              <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
          </div>
          <hr></hr>

          </div>
    </div>
  );
}

export default Specialiste;
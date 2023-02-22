import * as React from "react";
import "./generalite.css"
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Inputmask from "inputmask";
$(document).ready(function(){
    var inputDouleurTelephone = $("#inputDouleurTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputDouleurTelephone);

});
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
          <div className="container">
            <form>
                <div className="form-control border-0">
                    <label form="inputDouleurNomPrenom" >Nom et prénom</label>
                    <input type="text" className="form-control form-control-lg border-2" name="inputDouleurNomPrenom" placeholder="Nom" />
                    <label form="inputDouleurTelephone" >Téléphone</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputDouleurTelephone" name="inputDouleurTelephone" placeholder="Téléphone" />
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Generalite;
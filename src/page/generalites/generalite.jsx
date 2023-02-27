import * as React from "react";
import "./generalite.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Inputmask from "inputmask";
import Navigation from "../../extensions/navigation/navigation.jsx";



$(document).ready(function(){
    var inputDouleurTelephone = $("#inputDouleurTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputDouleurTelephone);
});



function Generalite() {
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        console.log(scrollTop);

        // hide navbar on scroll down
        if (scrollTop > 200) {
            //nav bar fade out
            $(".navBarBrand").fadeOut(200);
        }
        else {
            $(".navBarBrand").fadeIn(200);
        }
    };

    return (
    <div className="generaliteContent" onScroll={handleScroll} >
        {Navigation()}
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
                    <label form="inputDouleurTelephone" >Groupe Sanguin</label>
                    <select type="text" className="form-control form-control-lg border-2" id="inputDouleurTelephone" name="inputDouleurTelephone" placeholder="Téléphone">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <label form="inputDouleurTelephone" >Contact d'urgence </label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputDouleurTelephone" name="inputDouleurTelephone" placeholder="Contact d'urgence"/>

                    <label form="inputDouleurNomPrenom" >Nom et prénom</label>
                    <input type="text" className="form-control form-control-lg border-2" name="inputDouleurNomPrenom" placeholder="Nom" />
                    <label form="inputDouleurTelephone" >Téléphone</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputDouleurTelephone" name="inputDouleurTelephone" placeholder="Téléphone" />
                    <label form="inputDouleurTelephone" >Groupe Sanguin</label>
                    <select type="text" className="form-control form-control-lg border-2" id="inputDouleurTelephone" name="inputDouleurTelephone" placeholder="Téléphone">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <label form="inputDouleurTelephone" >Contact d'urgence </label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputDouleurTelephone" name="inputDouleurTelephone" placeholder="Contact d'urgence"/>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-lg btnGeneralite">Suivant</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Generalite;
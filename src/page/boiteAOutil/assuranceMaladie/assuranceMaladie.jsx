import * as React from "react";
import "./assuranceMaladie.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import assuranceMaladie from "../../../assets/img/Divers/CarteAssuranceMaladie.svg";
import Inputmask from "inputmask";
import Navigation from "../../../extensions/navigation/navigation.jsx";

$(document).ready(function(){
    var inputDouleurTelephone = $("#inputDouleurTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputDouleurTelephone);
});

function AssuranceMaladie() {
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
            <div className="assuranceMaladie">
                <h3>Carte d'assurance maladie</h3>
                <p>Numéro d’assurance maladie
                    (4 lettres et 8 chiffres)
                </p>
                <img src={assuranceMaladie} alt="assuranceMaladieCarte" />
                <p>Date d’expiration</p>
                <p className="red">Lorsque vous
                    prenez
                    un rendez-vous,
                    on vous
                    demandera
                    ce numéro.
                </p> 
            </div>
        </div>
    </div>
  );
}

export default AssuranceMaladie;
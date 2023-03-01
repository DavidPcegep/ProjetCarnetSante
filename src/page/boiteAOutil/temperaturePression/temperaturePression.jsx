import * as React from "react";
import "./temperaturePression.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import pression from "../../../assets/img/Divers/Pression.svg";
import temperature from "../../../assets/img/Divers/Temperature.svg";
import Inputmask from "inputmask";
import Navigation from "../../../extensions/navigation/navigation.jsx";

$(document).ready(function(){
    var inputDouleurTelephone = $("#inputDouleurTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputDouleurTelephone);
});

function TemperaturePression() {
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // console.log(scrollTop);

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
            <div className="temperature">
                <h3>Temperature</h3>
                <p>La température
                    normale varie entre
                    36°C et 37,5°C.
                    Je fais de la fièvre
                    à partir de 38,5°C.
                </p>
                <img src={temperature} alt="temperature" />
                <p className="red">Il est recommandé d’appeler
                    Info-santé (811) si la fièvre est
                    au-dessus de 4O°C (1O4,O°F)
                    ou si elle persiste plus de 48 heures.
                </p> 
            </div>
            <hr></hr>
            <div className="pression ">
                <h3>Pression</h3>
                <p className="h6 text-center mb-0"> Une pression NORMALE
                    se situe entre 12O/8O mmHg
                    et 14O/9O mmHg.
                    La pression artérielle ne devrait pas
                    être plus élevée que 14O/9O mmHg.
                </p>
                <img src={pression} alt="Pression" className="Pression mt-2"/>
                <p className="red mb-5"> Si votre pression est plus basse
                    ou plus élevée que la normale,
                    consultez votre pharmacien.
                    ne ou
                    votre médecin.
                </p> 
            </div>
            
        </div>
    </div>
  );
}

export default TemperaturePression;
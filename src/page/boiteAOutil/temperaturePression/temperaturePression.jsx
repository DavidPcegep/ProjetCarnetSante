import * as React from "react";
import "./temperaturePression.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import pression from "../../../assets/img/Divers/Pression.svg";
import temperature from "../../../assets/img/Divers/Temperature.png";
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
            <div className="pression">
                <img src={pression} alt="Pression" className="Pression"/>
            </div>
            <div className="temperature">
                <img src={temperature} alt="temperature" />
            </div>
        </div>
    </div>
  );
}

export default TemperaturePression;
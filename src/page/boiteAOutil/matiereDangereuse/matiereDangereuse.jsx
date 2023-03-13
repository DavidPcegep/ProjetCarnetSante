import * as React from "react";
import "./matiereDangereuse.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Toxique from "../../../assets/img/Pictogramme/Toxique.svg";
import Corrosif from "../../../assets/img/Pictogramme/Corrosif.svg";
import Inflammable from "../../../assets/img/Pictogramme/Inflammable.svg";
import Explosif from "../../../assets/img/Pictogramme/Explosif.svg";
import Inputmask from "inputmask";
import Navigation from "../../../extensions/navigation/navigation.jsx";



$(document).ready(function(){
    var inputDouleurTelephone = $("#inputDouleurTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputDouleurTelephone);
});



function MatiereDangereuse() {
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
            <div className="toxique">
                <h3>Très toxique</h3>
                <img src={Toxique} alt="toxique" />
                <p className="red">Poison</p>
            </div>
            <hr></hr>
            <div className="corrosif">
                <h3>Corrosif</h3>
                <img src={Corrosif} alt="corrosif" />
                <p className="red">Protéger la peau et les yeux</p>
            </div>
            <hr></hr>
            <div className="inflammable">
                <h3>Facilement  inflammable</h3>
                <img src={Inflammable} alt="inflammable" />
                <p className="red">Attention au feu</p>
            </div>
            <hr></hr>
            <div className="explosif">
                <h3>Explosif</h3>
                <img src={Explosif} alt="explosif" />
                <p className="red">Peut exploser</p>
            </div>
        </div>
    </div>
  );
}

export default MatiereDangereuse;
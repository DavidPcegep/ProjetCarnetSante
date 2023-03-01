import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import { useState } from 'react';
import "./numeroUrgence.css"
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Navigation from "../../extensions/navigation/navigation.jsx";


function NumeroUrgence() {
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
        <div>
            <div className="Content">
                <a href="/ressource" className="position-absolute start-0 me-2 p-3 fs-1">
                    <i className="btn-exit bi bi-box-arrow-left"></i>
                </a>
                <div className="logoContent">
                    <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
                </div>
                <hr></hr>
                <div className="card text-white bg-danger mb-3 cardUrgence">
                    <div className="card-body">
                        <h5 className="card-title">URGENCE  -  911</h5><br/>
                        <h5 className="card-title">INFO-SANTÉ  -  811 et composez le 1</h5>
                        <p className="card-text"> <b>Composez ce numéro si vous avez des questions sur votre état de santé</b></p><br/>
                        <h5 className="card-title">INFO-SANTÉ  -  811 et composez le 2</h5>
                        <p className="card-text"> <b>Composez ce numéro si vous avez des questions sur votre santé mentale.</b> </p><br/>
                        <p className="card-text"><b> Programmes et services sociaux de proximité : <a href='http://www.211quebecregions.ca'>www.211quebecregions.ca</a></b></p><br/>
                        <h6 className="card-title">AAOR du CISSS Bas Saint-Laurent 1 833 422-2267</h6>
                    
                    </div>
                </div>
                <br/>
                <div className="card text-white bg-info mb-3 cardUrgence">
                    <div className="card-body">
                        <h5 className="card-title">Pour avoir accès au répertoire des ressources de votre MRC contactez :</h5><br/>
                        <div className="card text-black bg-Light mb-3 cardUrgence">
                            <div className="card-body">
                                <p className="card-text"> <b>COSMOSS Kamouraska www.cosmosskamouraska.com (sous l’onglet répertoire) ou la CDC du Kamouraska www.cdckamouraska.ca (sous l’onglet organismes membres) </b></p>
                            
                            </div>
                        </div>
                        <h5 className="card-title">D’autres informations sur les ressources de votre milieu peuvent être disponibles auprès de votre CLSC.</h5>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default NumeroUrgence;
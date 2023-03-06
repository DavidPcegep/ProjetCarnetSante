import * as React from "react";
import "./ressource.css"
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



function Ressource() {
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
                        <label form="inputRessourceClsc" >Mon CLSC</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceClsc" placeholder="CLSC" />
                        <label form="inputRessourceClscTelephone" >Téléphone</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputRessourceClscTelephone" name="inputPrescriptionTelephone" placeholder="Téléphone" />
                        <label form="inputRessourceClscAdresse">Adresse</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceClscAdresse" placeholder="Adresse" />
                        <hr className="hr"></hr>
                        <label form="inputRessourceCliniqueMedicale" >Ma clinique médicale</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceCliniqueMedicale" placeholder="Clinique Médicale" />
                        <label form="inputRessourceCliniqueMedicaleTelephone" >Téléphone</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputRessourceCliniqueMedicaleTelephone" name="inputRessourceCliniqueMedicaleTelephone" placeholder="Téléphone" />
                        <label form="inputRessourceCliniqueMedicaleAdresse">Adresse</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceCliniqueMedicaleAdresse" placeholder="Adresse" />
                        <hr className="hr"></hr>
                        <label form="inputRessourceHopital" >Mon hôpital</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceHopital" placeholder="Hôpital" />
                        <label form="inputRessourceHopitalTelephone" >Téléphone</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputRessourceHopitalTelephone" name="inputRessourceHopitalTelephone" placeholder="Téléphone" />
                        <label form="inputRessourceHopitalAdresse">Adresse</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceHopitalAdresse" placeholder="Adresse" />
                        <hr className="hr"></hr>
                        <label form="inputRessourceAcommpagnant" >Personne accompagnante</label>
                        <input type="text" className="form-control form-control-lg border-2" name="inputRessourceAcommpagnant" placeholder="Personne" />
                        <label form="inputRessourceAcommpagnantTelephone" >Téléphone</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputRessourceAcommpagnantTelephone" name="inputRessourceAcommpagnantTelephone" placeholder="Téléphone" />
                        
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

export default Ressource;
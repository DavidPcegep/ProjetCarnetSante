import Alcool from "../../../assets/img/Energie/Alcool.png";
import DemanderAide from "../../../assets/img/Energie/DemanderAide.png";
import Detendre from "../../../assets/img/Energie/Detendre.png";
import Dormir from "../../../assets/img/Energie/Dormir.png";
import PasQuoiFaire from "../../../assets/img/Energie/PasQuoiFaire.png";
import ProduitsNaturels from "../../../assets/img/Energie/ProduitsNaturels.png";
import ResauxSociaux from "../../../assets/img/Energie/ResauxSociaux.png";
import Stimulants from "../../../assets/img/Energie/Stimulants.png";
import Television from "../../../assets/img/Energie/Television.png";
import Autres from "../../../assets/img/Energie/Autres.png";
import $ from "jquery";
import "./habitude.css"
import * as React from "react";
$(document).ready(function() {
    $(".energieHabitude").click(function() {
        if($(this).children("button").css("border-color") != "rgb(207, 222, 129)")
        {
            $(this).children("button").css("border-color", "#cfde81");
        }
        else
        {
            $(this).children("button").css("border-color", "#f5f5f5");
        }
    });
});
function reactionEnergieHabitude(){
    return(
    <div className="reactionEnergieHabitude">
        <div class="scroll-container">
            <div class="scroll-page" id="page-1">
                <div className="energieHabitude">
                    <button className="btn"><img src={Dormir} alt="Dors" className="Dors"/><br></br>Dors</button>
                </div>
                <div className="energieHabitude">
                    <button className="btn"><img src={Detendre} alt="Detendre" className="Detendre"/><br></br>Detendre</button>
                </div>
            </div>
            <div class="scroll-page" id="page-2">
                <div className="energieHabitude">
                    <button className="btn"><img src={Stimulants} alt="Stimulants" className="Stimulants"/><br></br>Stimulants</button>
                </div>
                <div className="energieHabitude">
                    <button className="btn"><img src={Alcool} alt="Alcool" className="Alcool"/><br></br>Alcool</button>
                </div>
            </div>
            <div class="scroll-page" id="page-3">
                <div className="energieHabitude">
                    <button className="btn"><img src={ProduitsNaturels} alt="Routine" className="Routine"/><br></br>Routine</button>
                </div>
                <div className="energieHabitude">
                    <button className="btn"><img src={DemanderAide} alt="DemanderAide" className="DemanderAide"/><br></br>DemanderAide</button>
                </div>
            </div>
            <div class="scroll-page" id="page-4">
                <div className="energieHabitude">
                    <button className="btn"><img src={Television} alt="Television" className="Television"/><br></br>Television</button>
                </div>
                <div className="energieHabitude">
                    <button className="btn"><img src={ResauxSociaux} alt="ResauxSociaux" className="ResauxSociaux"/><br></br>ResauxSociaux</button>
                </div>
            </div>
            <div class="scroll-page" id="page-5">
                <div className="energieHabitude">
                    <button className="btn"><img src={PasQuoiFaire} alt="PasQuoiFaire" className="PasQuoiFaire"/><br></br>PasQuoiFaire</button>
                </div>
                <div className="energieHabitude">
                    <button className="btn"><img src={Autres} alt="Autres" className="Autres"/><br></br>Autres</button>
                </div>
            </div>
            
        </div>
        <div className="buttonContentLogin">
            <button className="buttonLogin">S'inscrire</button>
        </div>
    </div>
    );
}

export default reactionEnergieHabitude;

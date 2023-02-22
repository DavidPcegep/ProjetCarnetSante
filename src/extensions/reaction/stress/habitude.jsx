import Activite from "../../../assets/img/Stress/Activite.png";
import Consommation from "../../../assets/img/Stress/Consommation.png";
import Marcher from "../../../assets/img/Stress/Marcher.png";
import Menage from "../../../assets/img/Stress/Menage.png";
import Impatiente from "../../../assets/img/Stress/Impatiente.png";
import Respire from "../../../assets/img/Stress/Respire.png";
import Seule from "../../../assets/img/Stress/Seule.png";
import ReseauxSociaux from "../../../assets/img/Stress/ReseauxSociaux.png";
import DouleurCorporelles from "../../../assets/img/Stress/DouleurCorporelles.png";
import Autres from "../../../assets/img/Stress/Autres.png";
import $ from "jquery";
import "./habitude.css"
import * as React from "react";
$(document).ready(function() {
    $(".stressHabitude").click(function() {
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
function reactionStressHabitude(){
    return(
    <div className="reactionStressHabitude">
        <div class="scroll-container">
            <div class="scroll-page" id="page-1">
                <div className="stressHabitude">
                    <button className="btn"><img src={Activite} alt="Activite" className="Activite"/><br></br>Activite</button>
                </div>
                <div className="stressHabitude">
                    <button className="btn"><img src={Consommation} alt="Consommation" className="Consommation"/><br></br>Consommation</button>
                </div>
            </div>
            <div class="scroll-page" id="page-2">
                <div className="stressHabitude">
                    <button className="btn"><img src={Marcher} alt="Marcher" className="Marcher"/><br></br>Marcher</button>
                </div>
                <div className="stressHabitude">
                    <button className="btn"><img src={Menage} alt="Menage" className="Menage"/><br></br>Menage</button>
                </div>
            </div>
            <div class="scroll-page" id="page-3">
                <div className="stressHabitude">
                    <button className="btn"><img src={Impatiente} alt="Impatiente" className="Impatiente"/><br></br>Impatiente</button>
                </div>
                <div className="stressHabitude">
                    <button className="btn"><img src={Respire} alt="Respire" className="Respire"/><br></br>Respire</button>
                </div>
            </div>
            <div class="scroll-page" id="page-4">
                <div className="sommeilHabitude">
                    <button className="btn"><img src={Seule} alt="Seule" className="Seule"/><br></br>Seule</button>
                </div>
                <div className="stressHabitude">
                    <button className="btn"><img src={ReseauxSociaux} alt="ReseauxSociaux" className="ReseauxSociaux"/><br></br>ReseauxSociaux</button>
                </div>
            </div>
            <div class="scroll-page" id="page-5">
                <div className="sommeilHabitude">
                    <button className="btn"><img src={DouleurCorporelles} alt="DouleurCorporelles" className="DouleurCorporelles"/><br></br>DouleurCorporelles</button>
                </div>
                <div className="stressHabitude">
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

export default reactionStressHabitude;

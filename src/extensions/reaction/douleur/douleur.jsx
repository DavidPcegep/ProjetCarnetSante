import Brule from "../../../assets/img/Douleurs/Brule.png";
import ChocElectrique from "../../../assets/img/Douleurs/ChocElectrique.png";
import Coupure from "../../../assets/img/Douleurs/Coupure.png";
import Couteau from "../../../assets/img/Douleurs/Couteau.png";
import Dechire from "../../../assets/img/Douleurs/Dechire.png";
import Elance from "../../../assets/img/Douleurs/Elance.png";
import Engourdi from "../../../assets/img/Douleurs/Engourdi.png";
import Etire from "../../../assets/img/Douleurs/Etire.png";
import Gratte from "../../../assets/img/Douleurs/Gratte.png";
import Pique from "../../../assets/img/Douleurs/Pique.png";
import Serre from "../../../assets/img/Douleurs/Serre.png";
import Autres from "../../../assets/img/Douleurs/Autres.png";
import $ from "jquery";
import "./douleur.css"
import * as React from "react";
$(document).ready(function() {
    $(".douleurDouleur").click(function() {
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
function reactionDouleurDouleur(){
    return(
    <div class="scroll-container">
        <div className="d-flex justify-content-center">
            <h1>Douleur</h1>
        </div>
        <div className="reactionDouleurHabitude">
            <div>
                <div class="scroll-page" id="page-1">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Pique} alt="Pique" className="Pique"/><br></br>Pique</button>
                    </div>
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Elance} alt="Elance" className="Elance"/><br></br>Elance</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-2">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Brule} alt="Brule" className="Brule"/><br></br>Brule</button>
                    </div>
                    <div className="douleurHabitude">
                        <button className="btn"><img src={Dechire} alt="Dechire" className="Dechire"/><br></br>Dechire</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-3">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Etire} alt="Etire" className="Etire"/><br></br>Etire</button>
                    </div>
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Couteau} alt="Couteau" className="Couteau"/><br></br>Couteau</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-4">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Serre} alt="Serre" className="Serre"/><br></br>Serre</button>
                    </div>
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Gratte} alt="Gratte" className="Gratte"/><br></br>Gratte</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-5">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Coupure} alt="Coupure" className="Coupure"/><br></br>Coupure</button>
                    </div>
                    <div className="douleurDouleur">
                        <button className="btn"><img src={ChocElectrique} alt="ChocElectrique" className="ChocElectrique"/><br></br>Choc Electrique</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-6">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Engourdi} alt="Engourdi" className="Engourdi"/><br></br>Engourdi</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-7">
                    <div className="douleurDouleur">
                        <button className="btn"><img src={Autres} alt="Autres" className="Autres"/><br></br>Autres</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
                <button className="btn-middle fixed-bottom">Suivant</button>
            </div>
    </div>
    );
}
export default reactionDouleurDouleur;

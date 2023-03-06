import EmojiReveilSouvent from "../../../assets/img/Sommeil/EmojiReveilSouvent.png";
import Jour from "../../../assets/img/Sommeil/Jour.png";
import Medicament from "../../../assets/img/Sommeil/Medicaments.png";
import Mouton from "../../../assets/img/Sommeil/Mouton.png";
import Nuit from "../../../assets/img/Sommeil/Nuit.png";
import Routine from "../../../assets/img/Sommeil/Routine.png";
import Variable from "../../../assets/img/Sommeil/Variable.png";
import Autres from "../../../assets/img/Sommeil/Autres.png";
import $ from "jquery";
import "./habitude.css"
import * as React from "react";
$(document).ready(function() {
    $(".sommeilHabitude").click(function() {
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
function reactionSommeilHabitude(){
    return(
    <div class="scroll-container">
        <div className="d-flex justify-content-center">
            <h1>Sommeil</h1>
        </div>
        <div className="reactionSommeilHabitude">
            <div>
                <div class="scroll-page" id="page-1">
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={Jour} alt="Jour" className="Jour"/><br></br>Jour</button>
                    </div>
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={Nuit} alt="Nuit" className="Nuit"/><br></br>Nuit</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-2">
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={EmojiReveilSouvent} alt="EmojiReveilSouvent" className="EmojiReveilSouvent"/><br></br>Réveil souvent</button>
                    </div>
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={Mouton} alt="Mouton" className="Mouton"/><br></br>Mouton</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-3">
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={Routine} alt="Routine" className="Routine"/><br></br>Routine</button>
                    </div>
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={Medicament} alt="Medicament" className="Medicament"/><br></br>Medicament</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-4">
                    <div className="sommeilHabitude">
                        <button className="btn"><img src={Variable} alt="Variable" className="Variable"/><br></br>Variable</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-5">
                    <div className="sommeilHabitude">
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

export default reactionSommeilHabitude;

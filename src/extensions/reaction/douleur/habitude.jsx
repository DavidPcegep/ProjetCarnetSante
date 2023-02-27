import Cuisiner from "../../../assets/img/Autres/Cuisiner.png";
import Dormir from "../../../assets/img/Autres/Dormir.png";
import Manger from "../../../assets/img/Autres/Manger.png";
import Marcher from "../../../assets/img/Autres/Marcher.png";
import Menage from "../../../assets/img/Autres/Menage.png";
import VoirGens from "../../../assets/img/Autres/VoirGens.png";
import Autres from "../../../assets/img/Autres/Autres.png";
import $ from "jquery";
import "./habitude.css"
import * as React from "react";
$(document).ready(function() {
    $(".douleurHabitude").click(function() {
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
function reactionDouleurHabitude(){
    return(
    <div class="scroll-container">
        <div className="d-flex justify-content-center">
            <h1>Douleur</h1>
        </div>
        <div className="reactionDouleurHabitude">
            <div >
                <div class="scroll-page" id="page-1">
                    <div className="douleurHabitude">
                        <button className="btn"><img src={Cuisiner} alt="Cuisiner" className="Cuisiner"/><br></br>Cuisiner</button>
                    </div>
                    <div className="douleurHabitude">
                        <button className="btn"><img src={VoirGens} alt="VoirGens" className="VoirGens"/><br></br>VoirGens</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-2">
                    <div className="douleurHabitude">
                        <button className="btn"><img src={Dormir} alt="Dormir" className="Dormir"/><br></br>Dormir</button>
                    </div>
                    <div className="douleurHabitude">
                        <button className="btn"><img src={Manger} alt="Manger" className="Manger"/><br></br>Manger</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-3">
                    <div className="douleurHabitude">
                        <button className="btn"><img src={Marcher} alt="Marcher" className="Marcher"/><br></br>Marcher</button>
                    </div>
                    <div className="douleurHabitude">
                        <button className="btn"><img src={Menage} alt="Menage" className="Menage"/><br></br>Menage</button>
                    </div>
                </div>
                <div class="scroll-page" id="page-4">
                    <div className="douleurHabitude">
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

export default reactionDouleurHabitude;

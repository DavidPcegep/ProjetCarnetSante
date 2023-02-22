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
    $(".Oui").click(function() {
        if($(".Oui").css("filter") == "invert(0.9)")
        {
            $(".Oui").css("filter", "invert(0%)");
        }
        else
        {
            $(".Oui").css("filter", "invert(90%)");
        }
    });
    $(".Parfois").click(function() {
        if($(".Parfois").css("filter") == "invert(0.9)")
        {
            $(".Parfois").css("filter", "invert(0%)");
        }
        else
        {
            $(".Parfois").css("filter", "invert(90%)");
        }
    });
    $(".Non").click(function() {
        if($(".Non").css("filter") == "invert(0.9)")
        {
            $(".Non").css("filter", "invert(0%)");
        }
        else
        {
            $(".Non").css("filter", "invert(90%)");
        }
    });
});
function reactionDouleurDouleur(){
    return(
    <div className="sentimentContent">
        <div className="sentiment">
            <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui"/><br></br>Oui</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois"/><br></br>Parfois</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Non} alt="Non" className="Non"/><br></br>Non</button>
        </div>
    </div>
    );
}

export default reactionDouleurDouleur;

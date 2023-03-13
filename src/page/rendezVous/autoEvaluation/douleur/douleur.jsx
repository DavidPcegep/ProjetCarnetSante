import * as React from "react";
import "./douleur.css";
import jaugeDouleur from "../../../../extensions/jauge/jaugeDouleur.jsx";
// import jaugeSommeil from "../../../../extensions/jauge/jaugeSommeil.jsx";
import calendrier from "../../../../extensions/calendrier/calendrier.jsx";
// import sentiment from "../../../../../extensions/sentiment/sentiment.jsx";
// import sentiment2 from "../../../../extensions/sentiment/sentiment2.jsx";
// import reactionDouleurHabitude from "../../../../extensions/reaction/douleur/habitude.jsx";
// import reactionDouleurDouleur from "../../../../extensions/reaction/douleur/douleur.jsx";
// import reactionEnergieHabitude from "../../../../extensions/reaction/energie/habitude.jsx";
import reactionSommeilHabitude from "../../../../extensions/reaction/sommeil/habitude.jsx";
import reactionStressHabitude from "../../../../extensions/reaction/stress/habitude.jsx";
import logoMonCarnetSante from "../../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
function Douleur() {
    return (
        <div>
        <div className="Content">

            <a href="/login" className="position-absolute start-0 me-2 p-3 fs-1">
                <i className="btn-exit bi bi-box-arrow-left"></i>
            </a>
            <div className="logoContent">
                <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
            </div>
            <hr></hr>
            {jaugeDouleur()}
            {calendrier()}
            {reactionStressHabitude()}
        </div>
        </div>
    );
 }
export default Douleur;
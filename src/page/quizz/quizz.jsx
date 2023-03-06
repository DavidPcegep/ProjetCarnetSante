import * as React from "react";
import "./quizz.css";
import sentimentInverse1 from "../../extensions/sentiment/sentimentInverse/sentimentInverse1.jsx";
import sentimentInverse2 from "../../extensions/sentiment/sentimentInverse/sentimentInverse2.jsx";
import sentimentInverse3 from "../../extensions/sentiment/sentimentInverse/sentimentInverse3.jsx";
import sentimentInverse4 from "../../extensions/sentiment/sentimentInverse/sentimentInverse4.jsx";
import sentimentInverse5 from "../../extensions/sentiment/sentimentInverse/sentimentInverse5.jsx";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import $ from "jquery";
function Quizz() {
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
            <h2>Quizz</h2>
            <div class="scroll-container">
                <p className="p1">Est-ce qu'il m'arrive d'oublier mes médicaments ?</p>
                {sentimentInverse1()}
                <p className="p2">Est-ce qu’il m’arrive de ne pas suivre les recommandations quand je prends mes médicaments?</p>
                {sentimentInverse2()}
                <p className="p3">Est-ce que je me sens découragé.e face à ma médication?</p>
                {sentimentInverse3()}
                <p className="p4">Est-ce que j’ai parfois envie d’arrêter ou de ne pas prendre de médication?</p>
                {sentimentInverse4()}
                <p className="p5">Est-ce que la médication me fait peur?</p>
                {sentimentInverse5()}
            </div>
        </div>
        </div>
    );
 }
export default Quizz;
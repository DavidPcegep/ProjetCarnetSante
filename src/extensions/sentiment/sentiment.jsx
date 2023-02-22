import Oui from "../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentiment.css"
import * as React from "react";
$(document).ready(function() {
    $(".Oui").click(function() {
        $(".Oui").css("filter", "invert(90%)");
        $(".Parfois").css("filter", "invert(0%)");
        $(".Non").css("filter", "invert(0%)");
    });
    $(".Parfois").click(function() {
        $(".Oui").css("filter", "invert(0%)");
        $(".Parfois").css("filter", "invert(90%)");
        $(".Non").css("filter", "invert(0%)");
    });
    $(".Non").click(function() {
        $(".Oui").css("filter", "invert(0%)");
        $(".Parfois").css("filter", "invert(0%)");
        $(".Non").css("filter", "invert(90%)");
    });
});
function sentiment(){
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

export default sentiment;

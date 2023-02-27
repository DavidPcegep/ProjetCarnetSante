import Oui from "../../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentimentInverse.css"
import * as React from "react";
$(document).ready(function() {
    $(".Oui3").click(function() {
        if($(".Oui3").css("filter") == "invert(0.9)")
        {
            $(".Oui3").css("filter", "invert(0%)");
        }
        else
        {
            $(".Oui3").css("filter", "invert(90%)");
            $(".Parfois3, .Non3").css("filter", "invert(0%)");
        }
    });
    $(".Parfois3").click(function() {
        if($(".Parfois3").css("filter") == "invert(0.9)")
        {
            $(".Parfois3").css("filter", "invert(0%)");
        }
        else
        {
            $(".Parfois3").css("filter", "invert(90%)");
            $(".Oui3, .Non3").css("filter", "invert(0%)");
        }
    });
    $(".Non3").click(function() {
        if($(".Non3").css("filter") == "invert(0.9)")
        {
            $(".Non3").css("filter", "invert(0%)");
        }
        else
        {
            $(".Non3").css("filter", "invert(90%)");
            $(".Oui3, .Parfois3").css("filter", "invert(0%)");
        }
    });
});
function sentimentInverse3(){
    return(
    <div className="sentimentContent">
        <div className="sentiment">
            <button className="btn border-0"><img src={Non} alt="Non" className="Non3"/><br></br>Oui</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois3"/><br></br>Parfois</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui3"/><br></br>Non</button>
        </div>
    </div>
    );
}

export default sentimentInverse3;

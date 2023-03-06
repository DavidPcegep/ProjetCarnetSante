import Oui from "../../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentimentInverse.css"
import * as React from "react";
$(document).ready(function() {
    $(".Oui4").click(function() {
        if($(".Oui4").css("filter") == "invert(0.9)")
        {
            $(".Oui4").css("filter", "invert(0%)");
        }
        else
        {
            $(".Oui4").css("filter", "invert(90%)");
            $(".Parfois4, .Non4").css("filter", "invert(0%)");
        }
    });
    $(".Parfois4").click(function() {
        if($(".Parfois4").css("filter") == "invert(0.9)")
        {
            $(".Parfois4").css("filter", "invert(0%)");
        }
        else
        {
            $(".Parfois4").css("filter", "invert(90%)");
            $(".Oui4, .Non4").css("filter", "invert(0%)");
        }
    });
    $(".Non4").click(function() {
        if($(".Non4").css("filter") == "invert(0.9)")
        {
            $(".Non4").css("filter", "invert(0%)");
        }
        else
        {
            $(".Non4").css("filter", "invert(90%)");
            $(".Oui4, .Parfois4").css("filter", "invert(0%)");
        }
    });
});
function sentimentInverse4(){
    return(
    <div className="sentimentContent">
        <div className="sentiment">
            <button className="btn border-0"><img src={Non} alt="Non" className="Non4"/><br></br>Oui</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois4"/><br></br>Parfois</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui4"/><br></br>Non</button>
        </div>
    </div>
    );
}

export default sentimentInverse4;

import Oui from "../../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentimentInverse.css"
import * as React from "react";
$(document).ready(function() {
    $(".Oui5").click(function() {
        if($(".Oui5").css("filter") == "invert(0.9)")
        {
            $(".Oui5").css("filter", "invert(0%)");
        }
        else
        {
            $(".Oui5").css("filter", "invert(90%)");
            $(".Parfois5, .Non5").css("filter", "invert(0%)");
        }
    });
    $(".Parfois5").click(function() {
        if($(".Parfois5").css("filter") == "invert(0.9)")
        {
            $(".Parfois5").css("filter", "invert(0%)");
        }
        else
        {
            $(".Parfois5").css("filter", "invert(90%)");
            $(".Oui5, .Non5").css("filter", "invert(0%)");
        }
    });
    $(".Non5").click(function() {
        if($(".Non5").css("filter") == "invert(0.9)")
        {
            $(".Non5").css("filter", "invert(0%)");
        }
        else
        {
            $(".Non5").css("filter", "invert(90%)");
            $(".Oui5, .Parfois5").css("filter", "invert(0%)");
        }
    });
});
function sentimentInverse5(){
    return(
        <div className="sentimentContent">
            <div className="sentiment">
                <button className="btn border-0"><img src={Non} alt="Non" className="Non5"/><br></br>Oui</button>
            </div>
            <div className="sentiment">
                <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois5"/><br></br>Parfois</button>
            </div>
            <div className="sentiment">
                <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui5"/><br></br>Non</button>
            </div>
        </div>
    );
}

export default sentimentInverse5;

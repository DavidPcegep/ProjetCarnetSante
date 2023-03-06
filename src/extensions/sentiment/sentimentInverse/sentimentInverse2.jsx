import Oui from "../../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentimentInverse.css"
import * as React from "react";
$(document).ready(function() {
    $(".Oui2").click(function() {
        if($(".Oui2").css("filter") == "invert(0.9)")
        {
            $(".Oui2").css("filter", "invert(0%)");
        }
        else
        {
            $(".Oui2").css("filter", "invert(90%)");
            $(".Parfois2, .Non2").css("filter", "invert(0%)");
        }
    });
    $(".Parfois2").click(function() {
        if($(".Parfois2").css("filter") == "invert(0.9)")
        {
            $(".Parfois2").css("filter", "invert(0%)");
        }
        else
        {
            $(".Parfois2").css("filter", "invert(90%)");
            $(".Oui2, .Non2").css("filter", "invert(0%)");
        }
    });
    $(".Non2").click(function() {
        if($(".Non2").css("filter") == "invert(0.9)")
        {
           $(".Non2").css("filter", "invert(0%)");
        }
        else
        {
            $(".Non2").css("filter", "invert(90%)");
            $(".Oui2, .Parfois2").css("filter", "invert(0%)");
        }
    });
}); 
function sentimentInverse2(){
    return(
    <div className="sentimentContent">
        <div className="sentiment">
            <button className="btn border-0"><img src={Non} alt="Non" className="Non2"/><br></br>Oui</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois2"/><br></br>Parfois</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui2"/><br></br>Non</button>
        </div>
    </div>
    );
}

export default sentimentInverse2;

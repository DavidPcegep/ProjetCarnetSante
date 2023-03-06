import Oui from "../../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentimentInverse.css"
import * as React from "react";
$(document).ready(function() {
    $(".Oui1").click(function() {
        if($(".Oui1").css("filter") == "invert(0.9)")
        {
            $(".Oui1").css("filter", "invert(0%)");
        }
        else
        {
            $(".Oui1").css("filter", "invert(90%)");
            $(".Parfois1, .Non1").css("filter", "invert(0%)");
        }
    });
    $(".Parfois1").click(function() {
        if($(".Parfois1").css("filter") == "invert(0.9)")
        {
            $(".Parfois1").css("filter", "invert(0%)");
        }
        else
        {
            $(".Parfois1").css("filter", "invert(90%)");
            $(".Oui1, .Non1").css("filter", "invert(0%)");
        }
    });
    $(".Non1").click(function() {
        if($(".Non1").css("filter") == "invert(0.9)")
        {
           $(".Non1").css("filter", "invert(0%)");
        }
        else
        {
            $(".Non1").css("filter", "invert(90%)");
            $(".Oui1, .Parfois1").css("filter", "invert(0%)");
        }
    });
}); 
function sentimentInverse1(){
    return(
        <div className="sentimentContent">
            <div className="sentiment">
                <button className="btn border-0"><img src={Non} alt="Non" className="Non1"/><br></br>Oui</button>
            </div>
            <div className="sentiment">
                <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois1"/><br></br>Parfois</button>
            </div>
            <div className="sentiment">
                <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui1"/><br></br>Non</button>
            </div>
        </div>
    );
}

export default sentimentInverse1;

import Oui from "../../assets/img/EmotionSmiley/Oui.png";
import Non from "../../assets/img/EmotionSmiley/Non.png";
import Parfois from "../../assets/img/EmotionSmiley/Parfois.png";
import $ from "jquery";
import "./sentiment2.css"
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
            $(".Parfois, .Non").css("filter", "invert(0%)");
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
            $(".Oui, .Non").css("filter", "invert(0%)");
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
            $(".Oui, .Parfois").css("filter", "invert(0%)");
        }
    });
});
function sentiment2(){
    return(
    <div className="sentimentContent">
        <div className="sentiment">
            <button className="btn border-0"><img src={Oui} alt="Oui" className="Oui"/><br></br>Oui</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Parfois} alt="Parfois" className="Parfois"/><br></br>+ ou -</button>
        </div>
        <div className="sentiment">
            <button className="btn border-0"><img src={Non} alt="Non" className="Non"/><br></br>Non</button>
        </div>
    </div>
    );
}

export default sentiment2;

import calendrierParfois from "../../assets/img/Calendrier/CalendrierParfois.png";
import calendrierSouvent from "../../assets/img/Calendrier/CalendrierSouvent.png";
import calendrierToujours from "../../assets/img/Calendrier/CalendrierToujours.png";
import $ from "jquery";
import "./calendrier.css"
import * as React from "react";
$(document).ready(function() {
    $(".calendrierParfois").click(function() {
        if($(".calendrierParfois").css("filter") == "invert(0.9)")
        {
            $(".calendrierParfois").css("filter", "invert(0%)");
        }
        else
        {
            $(".calendrierParfois").css("filter", "invert(90%)");
            $(".calendrierSouvent, .calendrierToujours").css("filter", "invert(0%)");
        }
    });
    $(".calendrierSouvent").click(function() {
        if($(".calendrierSouvent").css("filter") == "invert(0.9)")
        {
            $(".calendrierSouvent").css("filter", "invert(0%)");
        }
        else
        {
            $(".calendrierSouvent").css("filter", "invert(90%)");
            $(".calendrierParfois, .calendrierToujours").css("filter", "invert(0%)");
        }
    });
    $(".calendrierToujours").click(function() {
        if($(".calendrierToujours").css("filter") == "invert(0.9)")
        {
            $(".calendrierToujours").css("filter", "invert(0%)");
        }
        else
        {
            $(".calendrierToujours").css("filter", "invert(90%)");
            $(".calendrierParfois, .calendrierSouvent").css("filter", "invert(0%)");
        }
    });
});
function calendrier(){
    return(
    <div className="calendrierContent">
        <div className="calendrier">
            <button className="btn border-0"><img src={calendrierParfois} alt="calendrierParfois" className="calendrierParfois"/><br></br>Parfois</button>
        </div>
        <div className="calendrier">
            <button className="btn border-0"><img src={calendrierSouvent} alt="calendrierSouvent" className="calendrierSouvent"/><br></br>Souvent</button>
        </div>
        <div className="calendrier">
            <button className="btn border-0"><img src={calendrierToujours} alt="calendrierToujours" className="calendrierToujours"/><br></br>Toujours</button>
        </div>
    </div>
    );
}

export default calendrier;

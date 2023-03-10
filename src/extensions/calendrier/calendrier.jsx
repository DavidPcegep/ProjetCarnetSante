import calendrierParfois from "../../assets/img/Calendrier et Eau/CalendrierParfois.png";
import calendrierSouvent from "../../assets/img/Calendrier et Eau/CalendrierSouvent.png";
import calendrierToujours from "../../assets/img/Calendrier et Eau/CalendrierToujours.png";
import $ from "jquery";
import "./calendrier.css"
import * as React from "react";
$(document).ready(function() {
    $(".calendrierParfois").click(function() {
        $(".calendrierParfois").css("filter", "invert(90%)");
        $(".calendrierSouvent").css("filter", "invert(0%)");
        $(".calendrierToujours").css("filter", "invert(0%)");
    });
    $(".calendrierSouvent").click(function() {
        $(".calendrierParfois").css("filter", "invert(0%)");
        $(".calendrierSouvent").css("filter", "invert(90%)");
        $(".calendrierToujours").css("filter", "invert(0%)");
    });
    $(".calendrierToujours").click(function() {
        $(".calendrierSouvent").css("filter", "invert(0%)");
        $(".calendrierSouvent").css("filter", "invert(0%)");
        $(".calendrierToujours").css("filter", "invert(90%)");
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

import jaugeimg from "../../assets/img/Emotion/JaugeDouleur.png";
import $ from "jquery";
import "./jauge2.css";
import * as React from "react";
$(document).ready(function() {
    $("#jauge2").on("input", function() {
        $(".cluster2").css({'transform' : 'rotate(' + $(this).val()*1.8 + 'deg)'});
        console.log($(this).val()/10);
        $(".slider2").css("background-color", "rgba(" + 255 + "," + 0 + "," + 0 + "," + $(this).val()/100 + ")");
        var slider = $(this).addClass("slider2");
        slider.css("background", "rgba(" + 255 + "," + 0 + "," + 0 + "," + $(this).val()/100 + ")")
    });
});
function jauge2(){
    return(
        <div className="jaugeContent">
            <div className="jauge">
                <input type="range" id="jauge2" className="slider2"/>
                <img src={jaugeimg} alt="jauge"/>
                <div className="cluster2">
                    <div className="clusterLine2"></div>
                </div>
                <div id="clusterValue"></div>
            </div>
        </div>
    );
}

export default jauge2;

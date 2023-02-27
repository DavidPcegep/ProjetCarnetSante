
import jaugeimg from "../../assets/img/Sommeil/JaugeSommeil.png";
import $ from "jquery";
import "./jauge.css"
import * as React from "react";
$(document).ready(function() {
    $("#jauge").on("input", function() {
        $(".cluster").css({'transform' : 'rotate(' + $(this).val()*1.8 + 'deg)'});
        console.log($(this).val()/10);
        $("slider").css("background-color", "rgba(" + 255 + "," + 0 + "," + 0 + "," + $(this).val()/100 + ")");
        var slider = $(this).addClass("slider");
        slider.css("background", "rgba(" + 255 + "," + 0 + "," + 0 + "," + $(this).val()/100 + ")")
    });
});
function jauge(){
    return(
        <div className="jaugeContent">
            <div className="jauge">
                <img src={jaugeimg} alt="jauge"/>
                <div className="cluster">
                    <div className="clusterLine"></div>
                </div>
                <div id="clusterValue"></div>
                <input type="range" id="jauge" className="slider"/>
            </div>
        </div>
    );
}

export default jauge;

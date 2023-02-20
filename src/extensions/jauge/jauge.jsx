import jaugeimg from "../../assets/img/Emotion/JaugeDouleur.png";
import $ from "jquery";
import "./jauge.css"
import * as React from "react";
$(document).ready(function() {
    $("#jauge").on("input", function() {
        console.log($(this).val());
        $(".cluster").css({'transform' : 'rotate(' + $(this).val()*1.8 + 'deg)'});
        $("#clusterValue").text($(this).val()/10);
        // change opacity of the input range
        $(this).css("background", "opacity(" + $(this).val()/10 + ")");
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
            <input type="range" id="jauge"/>
        </div>
    </div>
    );
}

export default jauge;

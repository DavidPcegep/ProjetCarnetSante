import * as React from "react";
import jauge from "../../extensions/jauge/jauge.jsx";
import "./generalite.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Inputmask from "inputmask";
import Navigation from "../../extensions/navigation/navigation.jsx";

$(document).ready(function(){
    var inputDouleurTelephone = $("#inputDouleurTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputDouleurTelephone);

    $("#selectGeneraliteMC").on("change", function(){
        var listMC = $(this).val();
        listMC.forEach(element => {
            if(element == "Autre") $("#autreMaladieChronique").show();
            else $("#autreMaladieChronique").hide();
        })
    });

    $("#selectGeneraliteAF").on("change", function(){
        var listAF = $(this).val();
        listAF.forEach(element => {
            if(element == "Autre") $("#autreAntecedentsFamiliaux").show();
            else $("#autreAntecedentsFamiliaux").hide();
        })
    });

    $("#selectGeneraliteAllergie").on("change", function(){
        if ($.inArray("Autre", $(this).val()) >= 0) $("#autreAllergie").show();
        if ($.inArray("Autre", $(this).val()) == -1) $("#autreAllergie").hide();

        if ($.inArray("Fruits et légumes", $(this).val()) >= 0) $("#fruitsLegumesAllergie").show();
        if ($.inArray("Fruits et légumes", $(this).val()) == -1) $("#fruitsLegumesAllergie").hide();

        if ($.inArray("Médicaments", $(this).val()) >= 0) $("#medicamentAllergie").show();
        if ($.inArray("Médicaments", $(this).val()) == -1) $("#medicamentAllergie").hide();
    })

    $("#selectGeneraliteIA").on("change", function(){
        if ($.inArray("Fruits ou légumes", $(this).val()) >= 0) $("#fruitsLegumesIA").show();
        if ($.inArray("Fruits ou légumes", $(this).val()) == -1) $("#fruitsLegumesIA").hide();

        if ($.inArray("Autre", $(this).val()) >= 0) $("#autreIA").show();
        if ($.inArray("Autre", $(this).val()) == -1) $("#autreIA").hide();
    })

    $("#selectGeneraliteCIM").on("change", function(){
        if ($.inArray("Autre", $(this).val()) >= 0) $("#autreCIM").show();
        if ($.inArray("Autre", $(this).val()) == -1) $("#autreCIM").hide();
    })

    $("body").delegate(".btnGeneraliteAjouter", "click", function(){
        var current = $(this).attr("data-current");
        if ($(this).text() == "Ajouter" && $(".inputAjouterContent > .inputGeneraliteAjouter").val().length != 0) {
            var next = parseInt(current) + 1;
            $("#GeneraliteAjouterContent").append('<div class="inputGroupGeneraliteAjouter d-flex flex-row" data-current="1">\n' +
                '                            <div class="inputAjouterContent">\n' +
                '                                <input type="text" class="form-control inputGeneraliteAjouter" name="inputGeneraliteChirugieOperation1" placeholder="Chirurgie/Opération #1"/>\n' +
                '                                <input type="date" class="form-control dateGeneraliteAjouter" name="inputGeneraliteChirugieOperationDate1" placeholder="Date #1"/>\n' +
                '                            </div>\n' +
                '                            <button type="button" class="btnGeneraliteAjouter" data-current="1">Ajouter</button>\n' +
                '                        </div>');
            $(this).text("Enlever");
        }
        else if ($(this).text() == "Enlever") {
            $(this).parent().remove();
            var next = parseInt(current) + 1;
            $.each($(".input-group"), function (index, value) {
                var current = $(this).attr("data-current");
                var newCurrent = parseInt(current) - 1;
                if (current >= next){
                    $(this).attr("data-current", newCurrent);
                    $(".btnGeneraliteAjouter[data-current='" + current + "']").attr("data-current", newCurrent);
                    $(".input-group[data-current='" + newCurrent + "'] > .inputGeneraliteAjouter").attr("placeholder", "Chirurgie ou Opération #" + newCurrent);
                }
            });
        }
        var count = $(".inputAjouterContent").length;
        $("#labelGeneraliteAjouter").text("Chirurgies ou Opérations (" + count + ")");
    })

});

function Generalite() {
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // hide navbar on scroll down
        if (scrollTop > 100) {
            //nav bar fade out
            $(".navBarBrand").fadeOut(200);
        }
        else {
            $(".navBarBrand").fadeIn(200);
        }
    };

    return (
    <div className="generaliteContent" onScroll={handleScroll} >
        {Navigation()}
      <div className="Content">
        <a href="/login" className="position-absolute start-0 me-2 p-3 fs-1">
            <i className="btn-exit bi bi-box-arrow-left"></i>
        </a>
        <div className="logoContent">
            <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
        </div>
        <hr></hr>
          <div className="container">
            <form>
                <div className="form-control border-0">
                    <label form="inputGeneraliteNomPrenom">Nom et prénom</label>
                    <input type="text" className="form-control form-control-lg border-2" name="inputGeneraliteNomPrenom" placeholder="Nom" />
                    <label form="inputGeneraliteTelephone">Téléphone</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteTelephone" name="inputGeneraliteTelephone" placeholder="Téléphone" />
                    <label form="selectGeneraliteGS">Groupe Sanguin</label>
                    <select type="text" className="form-control form-control-lg border-2" id="selectGeneraliteGS" name="selectGeneraliteGS" placeholder="Téléphone">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <label form="inputGeneraliteContactUrgence">Contact d'urgence</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteContactUrgence" name="inputGeneraliteContactUrgence" placeholder="Contact d'urgence"/>
                    <label form="selectGeneraliteMC">Maladies Chroniques</label>
                    <select className="form-select form-select-lg" multiple aria-label="multiple select example" name="selectGeneraliteMC" id="selectGeneraliteMC">
                        <option value="Diabète">Diabète</option>
                        <option value="Maladies dégénératives">Maladies dégénératives</option>
                        <option value="Fibromyalgie">Fibromyalgie</option>
                        <option value="Arthrite">Arthrite</option>
                        <option value="Problèmes de santé mentale">Problèmes de santé mentale</option>
                        <option value="Asthme">Asthme</option>
                        <option value="Autre">Autre</option>
                    </select>
                    <div id="autreMaladieChronique">
                        <label form="inputGeneraliteMCAutre">Autre Maladie Chronique</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteMCAutre" name="inputGeneraliteMCAutre" placeholder="Autre Maladie Chronique"/>
                    </div>
                    <label form="inputGeneraliteAllergie">Antécédents familiaux</label>
                    <select className="form-select form-select-lg" multiple aria-label="multiple select example" name="selectGeneraliteAF" id="selectGeneraliteAF">
                        <option value="Maladie du coeur">Maladie du coeur</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Cholestérol">Cholestérol</option>
                        <option value="Autre">Autre</option>
                    </select>
                    <div id="autreAntecedentsFamiliaux">
                        <label form="inputGeneraliteMCAutre">Autre Antécédents familiaux</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteAFAutre" name="inputGeneraliteAFAutre" placeholder="Autre Antécédents familiaux"/>
                    </div>
                    <label form="inputGeneraliteAllergie">Allergies</label>
                    <select className="form-select form-select-lg" multiple aria-label="multiple select example" name="selectGeneraliteAllergie" id="selectGeneraliteAllergie">
                        <option value="Noix">Noix</option>
                        <option value="Piqures d'insectes">Piqures d'insectes</option>
                        <option value="Animaux">Animaux</option>
                        <option value="Gluten">Gluten</option>
                        <option value="Fruits et légumes">Fruits et légumes</option>
                        <option value="Médicaments">Médicaments</option>
                        <option value="Iode">Iode</option>
                        <option value="Autre">Autre</option>
                    </select>
                    <div id="fruitsLegumesAllergie">
                        <label form="inputGeneraliteAllergieFruitsLegumes">Fruits et légumes</label>
                        <textarea className="form-control form-control-lg border-2" id="inputGeneraliteAllergieFruitsLegumes" name="inputGeneraliteAllergieFruitsLegumes" placeholder="Fruits et légumes"></textarea>
                    </div>
                    <div id="medicamentAllergie" className="mt-4">
                        <label form="inputGeneraliteAllergieMedicament">Médicament</label>
                        <textarea className="form-control form-control-lg border-2" id="inputGeneraliteAllergieMedicament" name="inputGeneraliteAllergieMedicament" placeholder="Médicament"></textarea>
                    </div>
                    <div id="autreAllergie" className="mt-4">
                        <label form="inputGeneraliteAllergieAutre">Autre Allergie</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteAllergieAutre" name="inputGeneraliteAllergieAutre" placeholder="Autre Allergie"/>
                    </div>
                    <label form="inputGeneraliteAllergie">Intolérances alimentaires</label>
                    <select className="form-select form-select-lg" multiple aria-label="multiple select example" name="selectGeneraliteIA" id="selectGeneraliteIA">
                        <option value="Fruits ou légumes">Fruits ou légumes</option>
                        <option value="Produits laitiers">Produits laitiers</option>
                        <option value="Viande">Viande</option>
                        <option value="Gluten">Gluten</option>
                        <option value="Autre">Autre</option>
                    </select>
                    <div id="fruitsLegumesIA" className="mt-4">
                        <label form="inputGeneraliteIAFruitsLegumes">Fruits et légumes</label>
                        <textarea className="form-control form-control-lg border-2" id="inputGeneraliteIAFruitsLegumes" name="inputGeneraliteIAFruitsLegumes" placeholder="Fruits et légumes"></textarea>
                    </div>
                    <div id="autreIA" className="mt-4">
                        <label form="inputGeneraliteIAAutre">Autre Intolérance alimentaire</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteIAAutre" name="inputGeneraliteIAAutre" placeholder="Autre Intolérance alimentaire"/>
                    </div>
                    <label form="inputGeneraliteCIM">Contre-indications médicales</label>
                    <select className="form-select form-select-lg" multiple aria-label="multiple select example" name="selectGeneraliteCIM" id="selectGeneraliteCIM">
                        <option value="IRM">IRM</option>
                        <option value="Transfusions">Transfusions</option>
                        <option value="Autre">Autre</option>
                    </select>
                    <div id="autreCIM" className="mt-4">
                        <label form="inputGeneraliteCIMAutre">Autre Contre-indications médicales</label>
                        <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteCIMAutre" name="inputGeneraliteCIMAutre" placeholder="Autre Contre-indications médicales"/>
                    </div>
                    <label form="inputGeneraliteChirurgie" id="labelGeneraliteAjouter">Chirurgies ou Opérations (1)</label>
                    <div id="GeneraliteAjouterContent">
                        <div className="inputGroupGeneraliteAjouter d-flex flex-row" data-current="1">
                            <div className="inputAjouterContent">
                                <input type="text" className="form-control inputGeneraliteAjouter" name="inputGeneraliteChirugieOperation1" placeholder="Chirurgie/Opération #1"/>
                                <input type="date" className="form-control dateGeneraliteAjouter" name="inputGeneraliteChirugieOperationDate1" placeholder="Date #1"/>
                            </div>
                            <button type="button" className="btnGeneraliteAjouter" data-current="1">Ajouter</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Generalite;
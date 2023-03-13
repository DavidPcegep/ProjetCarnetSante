import * as React from "react";
import "./generalite.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Inputmask from "inputmask";
import Navigation from "../../../extensions/navigation/navigation.jsx";

$(document).ready(function(){
    var inputGeneralitePharmacieTelephone = $("#inputGeneralitePharmacieTelephone");
    var im = new Inputmask("999-999-9999");
    im.mask(inputGeneralitePharmacieTelephone);

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

    $("body").delegate(".btnGeneraliteChirurgieAjouter", "click", function(){
        var current = $(this).attr("data-current");
        if ($(this).text() == "Ajouter" && $(".inputAjouterChirugieContent > .inputGeneraliteChirurgieAjouter").val().length != 0) {
            var next = parseInt(current) + 1;
            $("#GeneraliteChirurgieAjouterContent").append('<div class="inputGroupGeneraliteAjouter inputGroupGeneraliteChirurgieAjouter d-flex flex-row mt-4" data-current="'+next+'">\n' +
                '                            <div class="inputAjouterContent inputAjouterChirugieContent w-100">\n' +
                '                                <input type="text" class="form-control inputGeneraliteAjouter inputGeneraliteChirurgieAjouter" name="inputGeneraliteChirugieOperation1" placeholder="Chirurgie/Opération #'+next+'"/>\n' +
                '                                <input type="date" class="form-control dateGeneraliteAjouter" name="inputGeneraliteChirugieOperationDate1" placeholder="Date #'+next+'"/>\n' +
                '                            </div>\n' +
                '                            <button type="button" class="btnGeneraliteAjouter btnGeneraliteChirurgieAjouter" data-current="'+next+'">Ajouter</button>\n' +
                '                        </div>');
            $(this).text("Enlever");
        }
        else if ($(this).text() == "Enlever") {
            $(this).parent().remove();
            var next = parseInt(current) + 1;
            $.each($(".inputGroupGeneraliteChirurgieAjouter"), function (index, value) {
                var current = $(this).attr("data-current");
                var newCurrent = parseInt(current) - 1;
                if (current >= next){
                    $(this).attr("data-current", newCurrent);
                    $(".btnGeneraliteChirurgieAjouter[data-current='" + current + "']").attr("data-current", newCurrent);
                    $(".inputGroupGeneraliteChirurgieAjouter[data-current='" + newCurrent + "'] > .inputAjouterChirugieContent > .inputGeneraliteChirurgieAjouter").attr("placeholder", "Chirurgie/Opération #" + newCurrent);
                }
            });
        }
        var count = $(".inputAjouterChirugieContent").length;
        $("#labelGeneraliteChirurgieAjouter").text("Chirurgies ou Opérations (" + count + ")");
    })

    $("body").delegate(".btnGeneraliteAllergieAjouter", "click", function(){
        var current = $(this).attr("data-current");
        if ($(this).text() == "Ajouter" && $(".inputAjouterAllergieContent > .inputGeneraliteAllergieAjouter").val().length != 0) {
            var next = parseInt(current) + 1;
            $("#GeneraliteAllergieAjouterContent").append('<div class="inputGroupGeneraliteAjouter inputGroupGeneraliteAllergieAjouter d-flex flex-row mt-4" data-current="'+next+'">\n' +
                '                            <div class="inputAjouterContent inputAjouterAllergieContent w-100">\n' +
                '                                <input type="text" class="form-control inputGeneraliteAjouter inputGeneraliteAllergieAjouter" name="inputGeneraliteAllergie1" placeholder="Allergie #'+next+'"/>\n' +
                '                            </div>\n' +
                '                            <button type="button" class="btnGeneraliteAjouter btnGeneraliteAllergieAjouter" data-current="'+next+'">Ajouter</button>\n' +
                '                        </div>');
            $(this).text("Enlever");
        }
        else if ($(this).text() == "Enlever") {
            $(this).parent().remove();
            var next = parseInt(current) + 1;
            $.each($(".inputGroupGeneraliteAllergieAjouter"), function (index, value) {
                var current = $(this).attr("data-current");
                var newCurrent = parseInt(current) - 1;
                if (current >= next){
                    $(this).attr("data-current", newCurrent);
                    $(".btnGeneraliteAllergieAjouter[data-current='" + current + "']").attr("data-current", newCurrent);
                    $(".inputGroupGeneraliteAllergieAjouter[data-current='" + newCurrent + "'] > .inputAjouterAllergieContent > .inputGeneraliteAllergieAjouter").attr("placeholder", "Allergie #" + newCurrent);
                }
            });
        }
        var count = $(".inputAjouterAllergieContent").length;
        $("#labelGeneraliteAllergieAjouter").text("Allergies aux médicaments (" + count + ")");


    });

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
                    <label form="inputGeneraliteChirurgie" id="labelGeneraliteChirurgieAjouter">Chirurgies ou Opérations (1)</label>
                    <div id="GeneraliteChirurgieAjouterContent">
                        <div className="inputGroupGeneraliteAjouter inputGroupGeneraliteChirurgieAjouter d-flex flex-row" data-current="1">
                                <div className="inputAjouterContent inputAjouterChirugieContent w-100">
                                    <input type="text" className="form-control inputGeneraliteAjouter inputGeneraliteChirurgieAjouter" name="inputGeneraliteChirugieOperation1" placeholder="Chirurgie/Opération #1"/>
                                    <input type="date" className="form-control dateGeneraliteAjouter" name="inputGeneraliteChirugieOperationDate1" placeholder="Date #1"/>
                                </div>
                            <button type="button" className="btnGeneraliteAjouter btnGeneraliteChirurgieAjouter" data-current="1">Ajouter</button>
                        </div>
                    </div>
                    <br></br>
                    <label form="inputGeneralitePharmacie" id="labelGeneralitePharmacieAjouter">Pharmacie</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputGeneralitePharmacie" name="inputGeneralitePharmacie" placeholder="Pharmacies"/>
                    <label form="inputGeneraliteTelephonePharmacie" id="labelGeneraliteTelephonePharmacieAjouter">Téléphone de la pharmacie</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputGeneralitePharmacieTelephone" name="inputGeneralitePharmacieTelephone" placeholder="Téléphone"/>
                    <label form="inputGeneraliteAdressePhamarcie" id="labelGeneraliteAdressePhamarcieAjouter">Adresse de la pharmacie</label>
                    <input type="text" className="form-control form-control-lg border-2" id="inputGeneraliteAdressePhamarcie" name="inputGeneraliteAdressePhamarcie" placeholder="Adresse de la pharmacie"/>

                    <label form="inputGeneraliteAllergie" id="labelGeneraliteAjouter">Allergies aux médicaments (1)</label>
                    <div id="GeneraliteAllergieAjouterContent">
                        <div className="inputGroupGeneraliteAjouter inputGroupGeneraliteAllergieAjouter d-flex flex-row" data-current="1">
                                <div className="inputAjouterContent inputAjouterAllergieContent w-100">
                                    <input type="text" className="form-control inputGeneraliteAjouter inputGeneraliteAllergieAjouter" name="inputGeneraliteAllergie1" placeholder="Allergie #1"/>
                                </div>
                            <button type="button" className="btnGeneraliteAjouter btnGeneraliteAllergieAjouter" data-current="1">Ajouter</button>
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
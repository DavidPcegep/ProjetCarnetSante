import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./infrastructure.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Navigation from "../../extensions/navigation/navigation.jsx";


function ModifierInfrastructure() {
    const [scrollTop, setScrollTop] = useState(0);
      const handleScroll = (event) => {
          setScrollTop(event.currentTarget.scrollTop);
          console.log(scrollTop);
  
          // hide navbar on scroll down
          if (scrollTop > 200) {
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
          
            <a href="/ressource/infrastructure" className="position-absolute start-0 me-2 p-3 fs-1">
              <i className="btn-exit bi bi-box-arrow-left"></i>
            </a>
            <div className="logoContent">
              <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
            </div>
            <hr></hr>
            <h3> Modification</h3><br/>
            <div className="form-control border-0">
                    <label form="modifierInfraNom" >Nom</label>
                    <input type="text" className="form-control form-control-lg border-2" name="modifierInfraNom" placeholder="Hospital" />
                    <label form="modifierInfraAdresse" >Adresse</label>
                    <input type="text" className="form-control form-control-lg border-2" name="modifierInfraAdresse" placeholder="80 Rue Frontenac" />
                    <label form="modifierInfraTelephone" >Téléphone</label>
                    <input type="text" className="form-control form-control-lg border-2" id="modifierInfraTelephone" name="modifierInfraTelephone" placeholder="Téléphone" />
            </div>
          </div>
        </div>
    );
  }
  
  export default ModifierInfrastructure;
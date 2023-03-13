import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./accompagnant.css"
import { useState } from 'react';
import $ from "jquery";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Navigation from "../../extensions/navigation/navigation.jsx";

function CardAccompagnant(props){
  return (
    <Card className="mb-2 cardInfrastructure" border="primary">
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>
          <b> {props.type} </b>
        </Card.Text>
        <Card.Text>
          <b>Telephone :</b> {props.telephone} 
        </Card.Text>
        <div class="position-absolute bottom-0 end-0 modifierIcon">
          <a href="/ressource/accompagnant/modifier">
            <Button variant="outline-danger" style={{border: '5px'}}>
              <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};
function Accompagnant() {
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
          <a href="/ressource" className="position-absolute start-0 me-2 p-3 fs-1">
              <i className="btn-exit bi bi-box-arrow-left"></i>
          </a>
          <div className="logoContent">
              <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
          </div>
          <hr></hr>
          <h3> Accompagnant</h3><br/>
          <CardAccompagnant name="Jeanne Oscour" type="Suivie Dossier" telephone="145-451-8958"/>
          <CardAccompagnant name="Mark Steven" type="Accompagnant Rendez-vous" telephone="145-451-8958"/>
          <CardAccompagnant name="Enzo Richard" type="Programmer FrontEnd" telephone="145-451-8958"/>
          <CardAccompagnant name="David Chalon" type="Qui?" telephone="145-451-8958"/>
          <Button className="cardInfrastructure bg-primary">
            <Icon.Plus style={{fontSize:'30px', color:'white'}}></Icon.Plus>
          </Button>
        </div>
    </div>
  );
}

export default Accompagnant;
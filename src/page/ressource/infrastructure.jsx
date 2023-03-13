import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./infrastructure.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Navigation from "../../extensions/navigation/navigation.jsx";

function CardInfrastructure(props){
  return (
    <Card className="mb-2 cardInfrastructure" border="primary">
      <Card.Header className="bg-primary"><b>{props.header}</b></Card.Header>
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>
          <b> {props.adresse} </b>
        </Card.Text>
        <Card.Text>
          <b>Telephone :</b> {props.telephone} 
        </Card.Text>
        <div class="position-absolute bottom-0 end-0 modifierIcon">
          <a href="/ressource/infrastructure/modifier">
            <Button variant="outline-danger" style={{border: '5px'}}>
              <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};
function Infrastructure() {
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
          <CardInfrastructure name="Hopital de Rivière-du-Loup" adresse="80 Rue Frontenac" telephone="145-451-8958" header="Mon Hopital"/>
          <CardInfrastructure name="CLSC de Rivière-du-Loup" adresse="80 Rue Frontenac" telephone="145-451-8958" header="Mon CLSC"/>
          <CardInfrastructure name="Clinique de Rivière-du-Loup" adresse="80 Rue Frontenac" telephone="145-451-8958" header="Ma Clinique"/>
        </div>
      </div>
  );
}

export default Infrastructure;
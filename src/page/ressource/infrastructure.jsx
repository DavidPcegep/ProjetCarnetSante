import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./infrastructure.css"
import { useState } from 'react';
import $ from "jquery";
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Card from 'react-bootstrap/Card';
import Navigation from "../../extensions/navigation/navigation.jsx";


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
          <Card className="mb-2 cardInfrastructure" border="primary">
            <Card.Header className="bg-primary"><b>Mon Hopital</b></Card.Header>
            <Card.Body>
              <Card.Title> Hopital de Rivière-du-Loup </Card.Title>
              <Card.Text>
                <b>Adresse :</b>  80 Rue Frontenac
              </Card.Text>
              <Card.Text>
                <b>Telephone :</b>  145-451-8958
              </Card.Text>
              <div class="position-absolute bottom-0 end-0 modifierIcon">
                <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-2 cardInfrastructure" border="primary">
            <Card.Header className="bg-primary"><b>Mon CLSC</b></Card.Header>
            <Card.Body>
              <Card.Title> CLSC de Rivière-du-Loup </Card.Title>
              <Card.Text>
                <b>Adresse :</b>  80 Rue Frontenac
              </Card.Text>
              <Card.Text>
                <b>Telephone :</b>  145-451-8958
              </Card.Text>
              <div class="position-absolute bottom-0 end-0 modifierIcon">
                <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-2 cardInfrastructure" border="primary">
            <Card.Header className="bg-primary"><b>Ma Clinique</b></Card.Header>
            <Card.Body>
              <Card.Title> Clinique de Rivière-du-Loup </Card.Title>
              <Card.Text>
                <b>Adresse :</b>  80 Rue Frontenac
              </Card.Text>
              <Card.Text>
                <b>Telephone :</b>  145-451-8958
              </Card.Text>
              <div class="position-absolute bottom-0 end-0 modifierIcon">
                <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
}

export default Infrastructure;
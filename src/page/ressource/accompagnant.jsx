import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./accompagnant.css"
import { useState } from 'react';
import $ from "jquery";
import Card from 'react-bootstrap/Card';
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Navigation from "../../extensions/navigation/navigation.jsx";


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
          <Card className="mb-2 cardInfrastructure" border="primary">
            <Card.Body>
              <Card.Title> Jeanne Oscour </Card.Title>
              <Card.Text>
                <b>Suivie Dossier</b>
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
            <Card.Body>
              <Card.Title> Mark Steven </Card.Title>
              <Card.Text>
                <b>Accompagnant Rendez-vous</b>
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
            <Card.Body>
              <Card.Title> Enzo Richard </Card.Title>
              <Card.Text>
                <b>Programmer FrontEnd</b>
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
            <Card.Body>
              <Card.Title> David Chalon </Card.Title>
              <Card.Text>
                <b>Qui?</b>
              </Card.Text>
              <Card.Text>
                <b>Telephone :</b>  145-451-8958
              </Card.Text>
              <div class="position-absolute bottom-0 end-0 modifierIcon">
                <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-2 cardInfrastructure bg-primary" border="primary" background="primary">
          <Card.Body>
          <div style={{display: 'flex', justifyContent: 'center'}}>
                <Icon.Plus style={{fontSize:'30px', color:'white'}}></Icon.Plus>
          </div>
            </Card.Body>
          </Card>
          </div>
    </div>
  );
}

export default Accompagnant;
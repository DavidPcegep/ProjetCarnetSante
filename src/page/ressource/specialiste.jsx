import * as React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./specialiste.css"
import $ from "jquery";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import Navigation from "../../extensions/navigation/navigation.jsx";

function CardSpecialiste(props){
  return (
    <Card className="mb-2 cardInfrastructure" border="primary">
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>
          <b> {props.specialite} </b>
        </Card.Text>
        <Card.Text>
          <b>Telephone :</b> {props.telephone} 
        </Card.Text>
        <div class="position-absolute bottom-0 end-0 modifierIcon">
          <Button variant="outline-danger" style={{border: '5px'}}>
            <Icon.PencilFill style={{fontSize:'25px', color:'red'}}></Icon.PencilFill>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
function Specialiste() {
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
          <h3> Specialiste</h3><br/>
          <CardSpecialiste name="Jeanne Oscour" specialite="Medecin Generaliste" telephone="145-451-8958"/>
          <CardSpecialiste name="Mark Steven" specialite="Infirmier" telephone="145-451-8958"/>
          <CardSpecialiste name="Enzo Richard" specialite="Genecologe" telephone="145-451-8958"/>
          <CardSpecialiste name="David Pigeon" specialite="B I G" telephone="145-451-8958"/>
          <Button className="cardInfrastructure bg-primary">
            <Icon.Plus style={{fontSize:'30px', color:'white'}}></Icon.Plus>
          </Button>
          </div>
    </div>
  );
}

export default Specialiste;
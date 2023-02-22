import * as React from "react";
import "./ressource.css"
import jauge from "../../extensions/jauge/jauge.jsx";
import jauge2 from "../../extensions/jauge/jauge2.jsx";
import calendrier from "../../extensions/calendrier/calendrier.jsx";
import sentiment from "../../extensions/sentiment/sentiment.jsx";
import $ from "jquery";
import Card from 'react-bootstrap/Card';
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";

function Ressource() {
  return (
    <div>
      <div className="Content">
        <a href="/login" className="position-absolute start-0 me-2 p-3 fs-1">
            <i className="btn-exit bi bi-box-arrow-left"></i>
        </a>
        <div className="logoContent">
            <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
        </div>
        <hr></hr><br/><br/>
                <Card className="cardRessource">
                <Card.Body>
                    <Card.Title> Specialiste </Card.Title>
                </Card.Body>
                </Card><br/>

                <Card className="cardRessource">
                <Card.Body>
                    <Card.Title> Accompagnant </Card.Title>
                </Card.Body>
                </Card><br/>

                <Card className="cardRessource">
                <Card.Body>
                    <Card.Title> Batiment </Card.Title>
                </Card.Body>
                </Card>
      </div>
    </div>
  );
}

export default Ressource;
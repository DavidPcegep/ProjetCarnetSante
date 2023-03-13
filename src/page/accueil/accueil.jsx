import * as React from "react";
import "./accueil.css"
import logoMonCarnetSante from "../../assets/img/Logo/MonCarnetDeSanteTitre.png";
import logoGeneralites from "../../assets/img/Grandes Sections et pochettes/Generalites.png";
import logoRendezVous from "../../assets/img/Grandes Sections et pochettes/Rendez-vous.png";
import logoAutoEvaluation from "../../assets/img/Grandes Sections et pochettes/Auto-evaluation.png";
import logoGPS from "../../assets/img/Grandes Sections et pochettes/GPS.png";

//
// ########## SALUT ENZO ###########
// 
function Accueil() {
  return (
    // Créer une page d'accueil avec des buttons pour naviguer vers les différentes pages en HTML/CSS
    <div>
        <div className="Content">
          <a href="/login" className="position-absolute start-0 me-2 p-3 fs-1">
            <i className="btn-exit bi bi-box-arrow-left"></i>
          </a>
          <div className="logoContent">
              <img src={logoMonCarnetSante} alt="LogoMonCarnetSante" />
          </div>
          <hr></hr>
          <div className="logoSection1">
            <a href="/generalite"><button className="btn"><img src={logoGeneralites} alt="logoGeneralites" className="logoGeneralites"/><br></br>Généralités</button></a>
          </div>
          <div className="logoSection2">
            <a href="/loginCode"><button className="btn"><i><img src={logoRendezVous} alt="logoRendezVous" className="logoRendezVous" /></i><br></br>Rendez Vous</button></a>
          </div>
          <div className="logoSection1">
            <a href="/template"><button className="btn"><i><img src={logoAutoEvaluation} alt="logoAutoEvaluation" className="logoAutoEvaluation" /><br></br></i>Auto Évaluation</button></a>
          </div>
          <div className="logoSection2">
            <a href="src/page/accueil/accueil.jsx"><button className="btn"><img src={logoGPS} alt="logoGPS" className="logoRessource" /><br></br>Ressources</button></a>
          </div>
        </div>
      </div>
  );
}


export default Accueil;

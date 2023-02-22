/*

 Pour correctement importer le module, il faut que l'event "handleScroll" soit inclue dans l'élement principal de la page.

 Exemple:
       <div className="generaliteContent" onScroll={handleScroll} >
                                                     ^^^^^^^^^^^^
----------------------------------------------------------------------------------------
 Ajouter aussi dans la fonction :

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
----------------------------------------------------------------------------------------
 Inclure aussi :
    import { useState } from 'react';
    import $ from "jquery";
    import logoMonCarnetSante from "../../assets/images/logoMonCarnetSante.png";


* */

import * as React from "react";

function Navigation() {

    return (
    <div>
        <nav className="navBarBrand navbar fixed-bottom p-3">
            <div className="container-fluid row">
                <div className="col-3">
                    <a href="/accueil" className="nav-link">
                        <i className="iconNav bi bi-house"></i>
                    </a>
                </div>
                <div className="col-3">
                    <a href="/generalite" className="nav-link">
                        <i className="iconNav bi bi-person-badge"></i>
                    </a>
                </div>
                <div className="col-3">
                    <a href="/generalite" className="nav-link">
                        <i className="iconNav bi bi-calendar-date"></i>
                    </a>
                </div>
                <div className="col-3">
                    <a href="/antecedents" className="nav-link">
                        <i className="iconNav bi bi-search"></i>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navigation;
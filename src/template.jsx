import * as React from "react";
import "./template.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MDBFooter, MDBContainer, MDBCol, MDBRow, MDBBtn} from 'mdb-react-ui-kit';

function Template() {
    return (
    <div>
        <Navbar expand="lg" fixed="top" style={{backgroundColor: "#72d9d7"}}>
            <Container fluid>
            <Navbar.Brand href="#"><img src="/logo-cs.png" width="150"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1"><b>Accueil</b></Nav.Link>
                <Nav.Link href="#action2"><b>Mes Informations</b></Nav.Link>
                <Nav.Link href="#action2"><b>Rendez-vous</b></Nav.Link>
                </Nav>
                <Button variant="outline-dark">Connexion</Button>
                <Button variant="outline-dark">Inscription</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
        <h1>BIG DAVE</h1>
        <MDBFooter  className='text-center text-white fixed-bottom' style={{ backgroundColor: '#002d45'}}>
        <MDBContainer className='p-4 pb-0'>
        <section className=''>
            <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>En partenariat avec les Alliances pour la solidarité et le ministère
du Travail, de l’Emploi et de la Solidarité sociale</span>
            </p>
        </section>
        <section className=''>
            <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Avec la participation de:</span>
            <img src="/logo-qc.svg" width="150" height="50"/>
            </p>
        </section>
        </MDBContainer>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://localhost.com/'>
            MonCarnetDeSante.com
        </a>
        
        </div>
        </MDBFooter>
    </div>
    );
  }
  
  
  export default Template;
  
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

const Navbars = () => {
    const links = [
      {
        id: 1,
        text: 'Home Page',
        path: '/',
      },
      {
        id: 2,
        text: 'Cities',
        path: '/city',
      },
      {
        id: 3,
        text: 'Pollution Data',
        path: '/pollutiondata',
      },
    ];
  
    const listOfLinks = links.map((link) => (
      <li key={link.id} className="nav-link">
        <NavLink className="nav-link" to={link.path}>{link.text}</NavLink>
      </li>
    ));
  
    return (
  
      <header>
        <Nav className="navbar navbar-expand-lg">
          <Container className="container-fluid">
            <a className="navbar-brand" href="/">Countries</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav">
                {listOfLinks}
              </ul>
            </div>
          </Container>
        </Nav>
      </header>
    );
  };
  
  export default Navbars;
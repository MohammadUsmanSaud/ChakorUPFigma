import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../svg/Logo';
import './navbar123.css';
import DropdownCustom from '../../components/common/DropdownCustom';


const Navbar123 = () => {
  return (
    <Navbar className="navHeight" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex navLogo" href="#home">
          <Logo/>
        </Navbar.Brand>
        <div className="Line"><svg width="1" height="102" viewBox="0 0 1 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line opacity="0.3" x1="0.5" y1="102" x2="0.499996" y2="2.18557e-08" stroke="url(#paint0_radial_765_1364)"/>
          <defs>
            <radialGradient id="paint0_radial_765_1364" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.49999 51) rotate(90) scale(36 1632)">
              <stop stop-color="#979797"/>
              <stop offset="1" stop-color="#979797" stop-opacity="0"/>
              </radialGradient>
              </defs>
            </svg>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
          <Nav className="me-auto navLinkGap">
          <Nav.Link className="navText" href="#features">Properties</Nav.Link>
            <Nav.Link className="navText" href="#features">My Portfolio</Nav.Link>
            <Nav.Link className="navText" href="#pricing">Help</Nav.Link>
            <Nav.Link className="navTextReferral" href="#pricing">Referral</Nav.Link>
          </Nav>
          <Nav className="dropdownGap">
            <DropdownCustom dropdownTag='USA'/>
            <DropdownCustom dropdownTag='Roberson'/>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}
export default Navbar123

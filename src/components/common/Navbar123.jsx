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
            <DropdownCustom dropdownTag='USA' imageSvg= <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.4121" cy="16" r="16" fill="#7065F0"/>
            <path d="M12.775 22.9995V11.0795H17.207C18.0177 11.0795 18.7324 11.2288 19.351 11.5275C19.9804 11.8155 20.471 12.2422 20.823 12.8075C21.175 13.3622 21.351 14.0395 21.351 14.8395C21.351 15.6608 21.1537 16.3595 20.759 16.9355C20.375 17.5115 19.8524 17.9382 19.191 18.2155L21.927 22.9995H19.463L16.535 17.7675L17.943 18.5995H14.951V22.9995H12.775ZM14.951 16.6795H17.239C17.6337 16.6795 17.975 16.6048 18.263 16.4555C18.551 16.2955 18.775 16.0768 18.935 15.7995C19.095 15.5222 19.175 15.2022 19.175 14.8395C19.175 14.4662 19.095 14.1462 18.935 13.8795C18.775 13.6022 18.551 13.3888 18.263 13.2395C17.975 13.0795 17.6337 12.9995 17.239 12.9995H14.951V16.6795Z" fill="white"/>
            </svg>/>
            <DropdownCustom dropdownTag='Roberson' imageSvg= <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.4121" cy="16" r="16" fill="#7065F0"/>
            <path d="M12.775 22.9995V11.0795H17.207C18.0177 11.0795 18.7324 11.2288 19.351 11.5275C19.9804 11.8155 20.471 12.2422 20.823 12.8075C21.175 13.3622 21.351 14.0395 21.351 14.8395C21.351 15.6608 21.1537 16.3595 20.759 16.9355C20.375 17.5115 19.8524 17.9382 19.191 18.2155L21.927 22.9995H19.463L16.535 17.7675L17.943 18.5995H14.951V22.9995H12.775ZM14.951 16.6795H17.239C17.6337 16.6795 17.975 16.6048 18.263 16.4555C18.551 16.2955 18.775 16.0768 18.935 15.7995C19.095 15.5222 19.175 15.2022 19.175 14.8395C19.175 14.4662 19.095 14.1462 18.935 13.8795C18.775 13.6022 18.551 13.3888 18.263 13.2395C17.975 13.0795 17.6337 12.9995 17.239 12.9995H14.951V16.6795Z" fill="white"/>
            </svg>/>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}
export default Navbar123

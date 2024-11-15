import React from "react";
import "./header.css";
// import "./index.css"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <header id="Header">
        <Container>
          <div className="right">
            <a href="#">My Account</a>
            <a href="#">Gift Certificates</a>
            <a href="#">Wish List</a>
            <a href="#">
              phone Need Help? <span> 800-917-7137</span>
            </a>
          </div>
        </Container>
      </header>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <div className="img">
              <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Gun" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Rifles</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shotguns</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Black powder Guns
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">
              <NavDropdown title="Ammo" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Best Selling Ammo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Rifle Ammo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Rimfire Ammo</NavDropdown.Item>
              </NavDropdown>
              </Nav.Link>
              <Nav.Link href="#link">Parts</Nav.Link>
              <Nav.Link href="#link">Accessories</Nav.Link>
              <Nav.Link href="#link">Hot Deals</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

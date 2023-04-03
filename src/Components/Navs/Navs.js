import React from "react";
import { Nav, Navbar , Container } from "react-bootstrap";
import logo from "./../../assets/logo.png";
import "./Navs.css";

const Navs =()=> {
    return(
<Navbar bg="light" expand="lg" className="container">
    <Navbar.Brand href="#home">
      <img src={logo} title="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Explore Foods</Nav.Link>
      <Nav.Link href="#link">Reviews</Nav.Link>
      <Nav.Link href="#link">FAQ</Nav.Link>

    </Nav>
    <Nav>
      <Nav.Link id="last">0237034266</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navs;
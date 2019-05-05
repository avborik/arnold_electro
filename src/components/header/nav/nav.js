import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Menu</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/cars">Cars</Nav.Link>
      <Nav.Link href="/forlifts">ForLift</Nav.Link>
      <NavDropdown title="Industrial Electronics" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/industrial">Indusstrial Electronics</NavDropdown.Item>
        <NavDropdown.Item href="/heavy">Heavy Electronics</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#">...</Nav.Link>
      <Nav.Link href="/truck">Trucks</Nav.Link>
      <Nav.Link href="/about">About us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
      
    )
}
export default Navigation;
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Sistema Automotivo</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/veiculos">Veículos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

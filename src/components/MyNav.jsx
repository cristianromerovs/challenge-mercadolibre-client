import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MyNav = () => {
  return (
    <Navbar className="navbar__custom" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src="/mercadolibre-logo.png"
            width="134"
            height="34"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/profile" className="nav-link">
              Mi cuenta
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MyNav = () => {
  return (
    <Navbar className="navbar__custom navbar-expand-lg" expand="lg">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-toggle='collapse' data-target='#basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) => "nav-link " + (isActive && "active")}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => "nav-link " + (isActive && "active")}
            >
              Mi cuenta
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

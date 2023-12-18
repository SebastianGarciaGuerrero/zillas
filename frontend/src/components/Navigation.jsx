import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";

const Navigation = () => {
  const { totalPrecio } = useContext(Contexto);

  const setActiveClass = ({ isActive }) => {
    const aux = "text-decoration-none me-3";
    return isActive ? `text-white ${aux}` : `text-secondary ${aux}`;
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-white text-decoration-none">
          Z I L L A S
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={setActiveClass}>
              Home
            </NavLink>
          <NavLink to="/register" className={setActiveClass}>
            Registro
            </NavLink>
          <NavLink to="/login" className={setActiveClass}>
            Login
            </NavLink>
            <NavLink to="/carrito" className={setActiveClass}>
              🛒 {totalPrecio}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

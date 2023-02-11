import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Barra() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Tienda del Pacífico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Todo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Aros">Aros</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Anillos">Anillos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Collares">Collares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Relojes">Relojes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav.Link as={Link} to='/cart'>
      <CartWidget />
      </Nav.Link>
    </Navbar>
  );
}

export default Barra;

import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Barra() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Joyas del Pacífico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Relojes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Anillos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Collares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Aros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default Barra;

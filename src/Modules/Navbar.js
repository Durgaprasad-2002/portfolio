import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
function NAV() {
  return (
    <div style={{ position: "sticky" }}>
      <Navbar id="nav" expand="md">
        <Container>
          <Navbar.Brand id="brand">
            <div id="d1"></div>
            <div id="d2"></div>
          </Navbar.Brand>
          <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/portfolio">
                About
                <br />
                <div id="div"></div>
              </Nav.Link>

              <Nav.Link href="#pro">
                Projects
                <br />
                <div id="div"></div>
              </Nav.Link>

              <Nav.Link href="#code">
                coding profiles
                <br />
                <div id="div"></div>
              </Nav.Link>

              <Nav.Link href="#cont">
                Contact
                <br />
                <div id="div"></div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NAV;

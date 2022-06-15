import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;

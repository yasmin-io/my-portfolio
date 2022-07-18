import {useState, useEffect} from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../images/IMG_1961.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // If the user Scrolls... 
    const onScroll = () => {
      if (window.scrollY > 50) {
        // Set Scrolled to true.
        setScrolled(true);
      } else { // If not...
        // Set scrolled to false.
        setScrolled(false);
      }
    }

    
    // Adding an eventlistener to the window to detect when the user scrolls
    window.addEventListener("scroll", onScroll());

    // We have the event listener on mount, so we have to remove it when the component gets removed fromthe DOM.
    return () => window.removeEventListener("scroll", onScroll());
  }, []);

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{ maxHeight: "200px" }}
              className="logo"
              src={Logo}
              alt="yasmi logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="navba-text">
              <div className="social-icon">
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
              </div>
              <button className="cv-button" onClick={() => console.log('download cv')}>CV Download</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

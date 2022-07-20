import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../images/IMG_1961.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // If the user Scrolls...
    const onScroll = () => {
      if (window.scrollY > 50) {
        // Set Scrolled to true.
        setScrolled(true);
      } else {
        // If not...
        // Set scrolled to false.
        setScrolled(false);
      }
    };

    // Adding an eventlistener to the window to detect when the user scrolls
    window.addEventListener("scroll", onScroll());

    // We have the event listener on mount, so we have to remove it when the component gets removed fromthe DOM.
    return () => window.removeEventListener("scroll", onScroll());
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
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
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active-navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about-me"
                className={
                  activeLink === "about-me"
                    ? "active-navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about-me")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active-navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navba-text">
              <button
                className="cv-button"
                onClick={() => console.log("download cv")}
              >
                CV Download
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

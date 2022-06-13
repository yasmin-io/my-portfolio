import React from "react";
import Logo from "../images/IMG_1961.png";
import Navbar from "./navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <img
        style={{ maxHeight: "200px" }}
        className="logo"
        src={Logo}
        alt="yasmin"
      />
    </header>
  );
}

export default Header;

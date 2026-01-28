import React, { useState } from "react";
import ContactButton from "../../ui-components/ContactButton";
import "./navbar.css";
type Props = {};

export default function ({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="imagen-contenedor">
            <img src="/img/perfil.jpg" alt="" />
          </div>
          <div className="texto-contenedor">
            <p>
              Alejandro Diaz <br />
              Desarrollador <span style={{ color: "#007bff" }}>web</span>
            </p>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Titles
              </a>
            </li>
          </ul>
          <div className="contact-button">
            <ContactButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

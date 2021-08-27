import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 620) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : " navbar"}>
        <div className="navbar-container">
            <span>PORTFOLIO</span>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
        <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                className={navbar ? "nav-links" : "nav-links-active"}
                onClick={closeMobileMenu}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#productos"
                className={navbar ? "nav-links" : "nav-links-active"}
                onClick={closeMobileMenu}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#clientes"
                className={navbar ? "nav-links" : "nav-links-active"}
                onClick={closeMobileMenu}
              >
                WORK
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contactos"
                className={navbar ? "nav-links" : "nav-links-active"}
                onClick={closeMobileMenu}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

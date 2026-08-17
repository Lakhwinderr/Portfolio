import React, { useState } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import HomeLink from "../HomeLink";
import { routes, workSection } from "../../config/paths";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const mobileNavItems = (
    <>
      <li>
        <HomeLink className="navItem" onClick={closeMenu}>
          Home
        </HomeLink>
      </li>
      <li>
        <HashLink
          smooth
          to={workSection}
          className="navItem"
          onClick={closeMenu}
        >
          Work
        </HashLink>
      </li>
      <li>
        <Link to={routes.education} className="navItem" onClick={closeMenu}>
          Education
        </Link>
      </li>
      <li>
        <Link to={routes.about} className="navItem" onClick={closeMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to={routes.contact} className="navItem" onClick={closeMenu}>
          Contact
        </Link>
      </li>
    </>
  );

  const desktopNavItems = (
    <>
      <li>
        <HomeLink className="navItem">
          Home
        </HomeLink>
      </li>
      <li>
        <HashLink smooth to={workSection} className="navItem">
          Work
        </HashLink>
      </li>
      <li>
        <Link to={routes.education} className="navItem">
          Education
        </Link>
      </li>
      <li>
        <Link to={routes.about} className="navItem">
          About
        </Link>
      </li>
      <li>
        <Link to={routes.contact} className="navItem">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <div className="mobile">
          <div className="mobileBar">
            <button
              type="button"
              className="burgerMenu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="slice" />
              <span className="slice" />
              <span className="slice" />
            </button>
            <ThemeToggle />
          </div>
          <nav
            id="mobile-nav"
            className={menuOpen ? "mobileNav isOpen" : "mobileNav"}
            aria-label="Main"
          >
            <ul>{mobileNavItems}</ul>
          </nav>
        </div>
        <div className="desktop">
          <nav className="desktopNav" aria-label="Main">
            <ul>{desktopNavItems}</ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

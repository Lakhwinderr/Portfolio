import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = () => {
      setToggle((p) => !p);
    };
    const element = ref.current;
    element.addEventListener("click", handleClick);
    return () => {
      element.removeEventListener("click", handleClick);
    };
  });
  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
      <div className="mobile">
        <div className="mobileBar">
          <div
            className="burgerMenu"
            onClick={() => {
              setToggle((p) => !p);
            }}
          >
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
          <ThemeToggle />
        </div>
        <nav className={toggle ? "active" : null}>
          <ul ref={ref}>
            <li>
              <Link to="/Portfolio" className="navItem first" ref={ref}>
                Home
              </Link>
            </li>
            <li>
              <HashLink smooth to="/Portfolio/#work" className="navItem second">
                Work
              </HashLink>
            </li>
            <li>
              <Link to="/Portfolio/Education" className="navItem third">
                Education
              </Link>
            </li>
            <li>
              <Link to="/Portfolio/About" className="navItem fourth">
                About
              </Link>
            </li>
            <li>
              <Link to="/Portfolio/Contact" className="navItem fifth">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="desktop">
        <nav className="desktopNav" aria-label="Main">
          <ul>
            <li>
              <HashLink to="/Portfolio" className="navItem first">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/Portfolio/#work" className="navItem second">
                Work
              </HashLink>
            </li>
            <li>
              <HashLink to="/Portfolio/Education" className="navItem third">
                Education
              </HashLink>
            </li>
            <li>
              <HashLink to="/Portfolio/About" className="navItem fourth">
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="/Portfolio/Contact" className="navItem fifth">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
      </div>
    </header>
  );
}

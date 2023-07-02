import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
// import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

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
    <header>
      <div className="mobile">
        <div className="barTop"></div>
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
        <nav className={toggle ? "active" : null}>
          <ul ref={ref}>
            <li>
              <Link to="/" className="navItem first" ref={ref}>
                Home
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#work" className="navItem second">
                Work
              </HashLink>
            </li>
            <li>
              <Link to="/Education" className="navItem third">
                Education
              </Link>
            </li>
            <li>
              <Link to="/About" className="navItem fourth">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="navItem fifth">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="desktop">
        <div className="barTop"></div>

        <nav>
          <ul>
            <li>
              <HashLink to="/" className="navItem first">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#work" className="navItem second">
                Work
              </HashLink>
            </li>
            <li>
              <HashLink to="/Education" className="navItem third">
                Education
              </HashLink>
            </li>
            <li>
              <HashLink to="/About" className="navItem fourth">
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="/Contact" className="navItem fifth">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

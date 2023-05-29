import React from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  return (
    <header>
      <div className="barTop"></div>
      <nav>
        <ul>
          <li>
            <HashLink to="/" className="navItem first">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="/Education" className="navItem second">
              Work
            </HashLink>
          </li>
          <li>
            <HashLink to="/Education" className="navItem third">
              Education
            </HashLink>
          </li>
          <li>
            <HashLink to="/Education" className="navItem fourth">
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="/Education" className="navItem fifth">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

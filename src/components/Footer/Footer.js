import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
import linkedIn from "../../assets/1.svg";
import gitHub from "../../assets/2.svg";
import devPost from "../../assets/devpost.svg";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <nav className="siteFooterNav" aria-label="Footer">
          <ul>
            <li>
              <Link to="/Portfolio">Home</Link>
            </li>
            <li>
              <HashLink smooth to="/Portfolio/#work">
                Work
              </HashLink>
            </li>
            <li>
              <Link to="/Portfolio/Education">Education</Link>
            </li>
            <li>
              <Link to="/Portfolio/About">About</Link>
            </li>
            <li>
              <Link to="/Portfolio/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="siteFooterSocial" aria-label="Social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/lakhwinderr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="" />
                <span className="visuallyHidden">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lakhwinderr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="" />
                <span className="visuallyHidden">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://devpost.com/lakhwinderr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={devPost} alt="" />
                <span className="visuallyHidden">Devpost</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

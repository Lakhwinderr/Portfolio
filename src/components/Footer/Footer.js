import React from "react";
import "./Footer.css";
import linkedIn from "../../assets/1.svg";
import gitHub from "../../assets/2.svg";
import devPost from "../../assets/devpost.svg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              navigate("/Portfolio");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/Portfolio/About");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/Portfolio/Contact");
            }}
          >
            Contact
          </li>
          <li>
            <HashLink smooth to="/Portfolio/#work" className="backButton">
              Work
            </HashLink>
          </li>
        </ul>
        <div className="socialHandles">
          <a href="https://www.linkedin.com/in/lakhwinder-singh-648982198/"  target="_blank">
            <img src={linkedIn} alt="" />
          </a>
          <a href="https://github.com/Lakhwinderr"  target="_blank">
            <img src={gitHub} alt="" />
          </a>
          <a href="https://devpost.com/lakhwinder-sidhuu20?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"  target="_blank">
            <img src={devPost} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

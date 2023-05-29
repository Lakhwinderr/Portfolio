import React from "react";
import "./Card.css";
import project1 from "../../assets/project1.jpg";
export default function Card() {
  return (
    <div className="card">
      <div className="backGroundImg">
        <img src={project1} alt="" />
      </div>

      <div className="onHover">
        <h1>Project Name</h1>
        <p>Project Description</p>
      </div>
    </div>
  );
}

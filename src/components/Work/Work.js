import React from "react";
import "./Work.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
export default function () {
  return (
    <div className="work" id = "work">
      <div className="workText">
        Work
      </div>
      <ProjectContainer></ProjectContainer>
    </div>
  );
}

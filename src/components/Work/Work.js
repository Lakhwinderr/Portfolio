import React from "react";
import "./Work.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

export default function WorkSection() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="workInner">
        <div className="workIntro">
          <h2 id="work-heading" className="workHeading">
            Work
          </h2>
          <p className="workLead">
            A collection of projects from my journey across design and
            development. I learn by building, experimenting, and turning ideas
            into things that work.
          </p>
        </div>
        <ProjectContainer />
      </div>
    </section>
  );
}

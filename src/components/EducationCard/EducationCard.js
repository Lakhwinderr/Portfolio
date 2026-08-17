import React from "react";
import "./EducationCard.css";

export default function EducationCard({ data }) {
  const cards = data.map((education) => {
    return (
      <article className="educationCard" key={education.title}>
        <h2>{education.title}</h2>
        <p>{education.description}</p>
        <a className="educationCardLink" href={education.link}>
          View Certification
          <span className="visuallyHidden"> for {education.title}</span>
        </a>
      </article>
    );
  });

  return (
    <section className="education" aria-labelledby="education-heading">
      <div className="educationInner">
        <h1 id="education-heading" className="educationHeading">
          Education
        </h1>
        {cards}
      </div>
    </section>
  );
}

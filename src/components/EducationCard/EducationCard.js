import React from "react";
import "./EducationCard.css";

function EducationCardItem({ education, variant }) {
  return (
    <article className={`educationCard educationCard--${variant}`}>
      <h2>{education.title}</h2>
      <p>{education.description}</p>
      <a
        className="educationCardLink"
        href={education.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {education.linkText}
      </a>
    </article>
  );
}

export default function EducationCard({ formalEducation, certifications }) {
  return (
    <section className="education" aria-labelledby="education-heading">
      <div className="educationInner">
        <h1 id="education-heading" className="educationHeading">
          Education
        </h1>

        <div className="educationSection educationSection--formal">
          {formalEducation.map((item) => (
            <EducationCardItem
              key={item.title}
              education={item}
              variant="formal"
            />
          ))}
        </div>

        <div className="educationSection educationSection--certifications">
          <h2 className="educationSectionHeading">Certifications &amp; Courses</h2>
          {certifications.map((item) => (
            <EducationCardItem
              key={item.title}
              education={item}
              variant="certification"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

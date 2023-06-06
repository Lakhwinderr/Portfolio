import React from "react";
import "./EducationCard.css";
export default function EducationCard({data}) {
  const cards = data.map(education => {
   return <div className="educationCard">
        <h2>{education.title}</h2>
        <p>
          {education.description}
        </p>
        <a href="#">View Certification</a>
      </div>
  })
  return (
    <div className="educationCardContainer">
      
     {cards}
    </div>
  );
}

import React from "react";
import Header from "../Header/Header";
import EducationCard from "../EducationCard/EducationCard";
import Footer from "../Footer/Footer";

const formalEducation = [
  {
    title: "M.Tech in Geological Technology — IIT Roorkee",
    description:
      "Studied geology and earth sciences at IIT Roorkee and graduated with first-division results in 2022. During my final year, I developed a strong interest in programming and software development.",
    link: "https://docs.google.com/document/d/1a0fYuA3aMAwJXSaKfoIj1vpZF-IAc0PDlgmdjkdsaZ0/edit?usp=sharing",
    linkText: "View document",
  },
  {
    title: "High School Education — Akal Academy",
    description:
      "Completed high school with a 10 CGPA. I developed an early interest in science, creativity, and building things, participating in activities such as science fairs and drawing competitions.",
    link: "https://docs.google.com/document/d/1a0fYuA3aMAwJXSaKfoIj1vpZF-IAc0PDlgmdjkdsaZ0/edit?usp=sharing",
    linkText: "View document",
  },
];

const certifications = [
  {
    title: "Front-end Specialization by Meta",
    description:
      "Completed all nine courses with excellent performance. The program covered React and modern frontend development concepts, with a strong focus on understanding the fundamentals.",
    link: "https://www.credly.com/badges/3c642daa-361f-4ecf-95e2-c700fa5bd6da/public_url",
    linkText: "View Certification for Front-end Specialization by Meta",
  },
  {
    title: "Introduction to User Experience Design",
    description:
      "This was my first step toward design. It covered the fundamentals of UI/UX design and introduced concepts that I later applied while learning frontend development.",
    link: "https://www.coursera.org/account/accomplishments/verify/N334UXLRXX3C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
    linkText: "View Certification for Introduction to User Experience Design",
  },
  {
    title: "Introduction to Programming with MATLAB",
    description:
      "I have been interested in robotics since childhood, so I explored programming concepts through this course. The course was taught by staff from Vanderbilt University.",
    link: "https://coursera.org/share/e85c5d3b5c048df52c6ba51a4813c252",
    linkText: "View Certification for Introduction to Programming with MATLAB",
  },
  {
    title: "Python for Data Science — DataQuest.io",
    description:
      "I learned Python during college for analyzing geological data, along with libraries commonly used for data analysis. I also gained experience with Jupyter Notebook and Anaconda.",
    link: "https://app.dataquest.io/verify_cert/DJBKGH86ARXILSK3BE7M/",
    linkText: "View Certification for Python for Data Science — DataQuest.io",
  },
];

export default function Education() {
  return (
    <div>
      <Header />
      <EducationCard
        formalEducation={formalEducation}
        certifications={certifications}
      />
      <Footer />
    </div>
  );
}

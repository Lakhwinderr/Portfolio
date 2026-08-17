import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="aboutInner">
        <h1 id="about-heading" className="aboutHeading">
          About
        </h1>
        <div className="aboutCard">
          <h2>Introduction</h2>
            <p>
              I’m Lakhwinder — a developer, designer, and hands-on builder.
            </p>
            <p>
              My journey into technology started with UI/UX design and
              gradually expanded into frontend development and programming.
            </p>
            <p>
              I’ve worked with a broad range of technologies across software
              development, design, automation, AI, and data-driven projects.
              My experience varies by technology, but I enjoy learning new
              tools by building with them and returning to them when a
              project requires it.
            </p>
            <p>
              My projects reflect that journey across design, frontend
              development, software, and practical experiments.
            </p>
        </div>
        <div className="aboutCard">
          <h2>Skills</h2>
          <div className="aboutSkillGroups">
            <div>
              <h3>Development</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Git & GitHub</li>
                <li>REST APIs</li>
                <li>Testing fundamentals</li>
              </ul>
            </div>
            <div>
              <h3>UI / UX & Design</h3>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Canva</li>
                <li>Bootstrap</li>
                <li>Chakra UI</li>
                <li>Formik</li>
              </ul>
            </div>
          </div>
          <div className="aboutSkillNote">
            <h3>AI, Data & Automation</h3>
            <p>
              Hands-on project work with AI APIs, computer vision, OCR, data
              visualization, and lightweight databases. Depth varies by tool;
              I have experimented with these rather than specializing in all
              of them, and I pick them up again when a project needs them.
            </p>
          </div>
        </div>
        <div className="aboutCard">
          <h2>Achievements</h2>
          <h3>
            Winner — IMPACT Category, Code with Harnoor Hackathon
          </h3>
          <ul>
            <li>
              Designed the complete application concept and UI in Figma.
            </li>
            <li>
              Contributed ideas focused on helping people during medical
              emergencies.
            </li>
            <li>Served as the design lead for the participating team.</li>
            <li>Won the IMPACT category among 336 participants.</li>
          </ul>
          <h3>Hacktoberfest 2022</h3>
          <p>
            Participated in Hacktoberfest 2022 and contributed to open-source
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}

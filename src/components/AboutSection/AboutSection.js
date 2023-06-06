import React from "react";
import "./AboutSection.css";
export default function AboutSection() {
  return (
    <div className="aboutCardContainer">
      <div className="aboutCard">
        <h2>Introduction 🙋‍♂️</h2>
        <p>
          Hi 👋, I am Lakhwinder, software developer and designer. I have vast
          knowledge of UI-UX design and loves to build and innovate new things
          with a meaningful purpose in someone’s life. I am highly skilled in
          React development. Not only React, but everything that brings out my
          creativity to real life. You can see my other skills below under
          skills section.
        </p>
      </div>
      <div className="aboutCard">
        <h2>Skills  🤹‍️</h2>
        <h3>Development</h3>
        <p><ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Version Control</li>
            <li>Jest Testing</li>
          </ul></p>
          <h3>Design</h3>
          <p>
            <ul>
              <li>Figma</li>
              <li>Adobe Photoshop, Illustrator, XD</li>
              <li>Canva</li>
            </ul>
          </p>
          <h3>Other Programming Languages</h3>
          <p>
            <ul>
              <li>MATLAB</li>
              <li>C++</li>
              <li>C</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
              <p>I can code almost in any language, just need to brush up the syntax before development.</p>
          </p>
          <h3>Other Frontend Libraries</h3>
          <p>
            <ul>
              <li>Formik</li>
              <li>Chakra UI</li>
              <li>Bootstrap</li>
            </ul>
            <p>Always ready to learn new frameworks and libraries available on npm.js. I love to explore new node packages as they make the development quick and hassle free.</p>
          </p>
      </div>
      <div className="aboutCard">
        <h2>Achievements 🥇</h2>
        <p>
          <h3>Winner in IMPACT Category - Hackathon (code with Harnoor) organised on devpost.</h3>
          <ul>
            <li>designed the whole app idea using Figma.</li>
            <li>formulated new ways to help out people in a medical emergency.</li>
            <li>was the design lead in the participating team.</li>
            <li>app won the award in the IMPACT category out of 336 participants.</li>
          </ul>
          <h3>Participated in Hacktoberfest 2022 and contributed to opensource projects.</h3>
        </p>
      </div>
      
    </div>
  );
}

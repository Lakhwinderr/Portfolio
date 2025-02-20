import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import Card from "../Card/Card";
import "./Work.css";
import SlideShow from "../SlideShow/SlideShow";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
// const Bar = () => {
//   return (
//     <div className="bar">
//       Work
//       <div className="secondBar">
//         <div>Work</div>
//         <div>Work</div>
//         <div>Work</div>
//         <div>Work</div>
//         <div>Work</div>
//         <div>Work</div>
//         <div>Work</div>
//       </div>
//     </div>
//   );
// };
export default function () {
  return (
    <div className="work" id = "work">
      {/* <Bar /> */}
      <div className="workText">
        Work
      </div>
      {/* <h3>Creating the image gallery.</h3> */}
      {/* <Card></Card> */}
      <ProjectContainer></ProjectContainer>
    </div>
  );
}

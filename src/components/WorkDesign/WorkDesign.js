import React, { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";



export default function WorkDesign({updateProject}) {
  const [project, setProject] = useState([]);
  const updateProject = (project) => {
    setProject(project);
  }
  return (
    <div>
      <SlideShow project={project} />
    </div>
  );
}

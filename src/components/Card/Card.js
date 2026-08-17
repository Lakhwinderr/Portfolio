import React, { useState } from "react";
import "./Card.css";
import { useNavigate} from "react-router-dom";

import { createContext, useContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState({});
  return (
    <ProjectContext.Provider
      value={{ project,  setProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};


export default function Card({ item }) {
  const navigate =  useNavigate()
  const project = useContext(ProjectContext);
  const clickHandler = () => {
    project.setProject(item);
    navigate("/Portfolio/Work")
    
  };
  return (
    <div className="card">
      <div className="backGroundImg">
        <img src={item.img} alt="image" />
      </div>

      <div className="onHover" onClick={() => clickHandler()}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

import React, {useContext, useState} from "react";
import "./Card.css";


const updateProject = () => {
  console.log("clicking the project")
}
export default function Card({item}) {
  const clickHandler = () => {
    console.log("clicking the card")
    updateProject(item)
  }
  return (
    <div className="card" >
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

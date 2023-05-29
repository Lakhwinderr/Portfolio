import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import Card from "../Card/Card";
import "./Work.css";

const Bar = () => {
  return (
    <div className="bar">
      Work
      <div className="secondBar">
        <div>Work</div>
        <div>Work</div>
        <div>Work</div>
        <div>Work</div>
        <div>Work</div>
        <div>Work</div>
        <div>Work</div>
      </div>
    </div>
  );
};
export default function () {
  return (
    <div className="work">
      <Bar />
      <h3>Creating the card.</h3>
      <Card></Card>
    </div>
  );
}

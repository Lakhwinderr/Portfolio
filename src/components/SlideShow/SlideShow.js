import React, { useEffect, useState } from "react";
import img1 from "../../assets/Design/Homepage.jpg";
import img2 from "../../assets/Design/Blog Page.jpg";
import img3 from "../../assets/Design/Post Page.jpg";
import "./SlideShow.css";
export default function SlideShow() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);
  const [dot1Class, setdot1Class] = useState("dot")
  const [dot2Class, setdot2Class] = useState("dot")
  const [dot3Class, setdot3Class] = useState("dot")
  useEffect(() => {
    switch (current){
        case 0:
            setdot1Class("dot active");
            setdot2Class("dot")
            setdot3Class("dot")
            return;
        case 1:
            setdot1Class("dot")
            setdot2Class("dot active")
            setdot3Class("dot")
            return;
        case 2:
            setdot1Class("dot")
            setdot2Class("dot")
            setdot3Class("dot active")
            return
    }
  },[current])
  const previous = () => {
    if(current > 0){
        setCurrent(p => p - 1)
    }
    else{
        setCurrent(2);
    }
  }
  const next = () => {
    if(current < 2){
        setCurrent(p => p + 1)
    }
    else{
        setCurrent(0);
    }
  }
  
  return (
    <div className="holder">
      <div className="arrows">
        <div className="prev" onClick={() => {previous()}}>&#10094;</div>
        <div className="next" onClick={() => {next()}}>&#10095;</div>
      </div>
      <div className="dotAndImage">
        <div className="dots">
          <div className={dot1Class}></div>
          <div className={dot2Class}></div>
          <div className={dot3Class}></div>
        </div>
        <img src={images[current]} alt="project image" />
      </div>
    </div>
  );
}

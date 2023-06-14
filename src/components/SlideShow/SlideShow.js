import React, { useEffect, useState } from "react";
import img1 from "../../assets/Design/Homepage.jpg";
import img2 from "../../assets/Design/Blog Page.jpg";
import img3 from "../../assets/Design/Post Page.jpg";
import "./SlideShow.css";
export default function SlideShow({project}) {
  const images = project;
  const max = images.length - 1;

  const dotArrayClass = [];
  dotArrayClass.push("dot active");
  for (let i = 0; i <= max ; i++) {
    if (i > 0) {
        dotArrayClass.push("dot");
    }
 
  }
  const [current, setCurrent] = useState(0);
  const [dots, setDots] = useState([dotArrayClass.map(classes => {
    return <div className= {classes}></div>
  })])
  
  useEffect(() => {
    dotArrayClass.map((classes, i) => {
      if (classes === "dot active") {
        dotArrayClass[i] = "dot";
        return;
      }
    });
    dotArrayClass.map((classes, i) => {
      if (i === current) {
        dotArrayClass[i] = "dot active";
        return;
      }
    });
    setDots([dotArrayClass.map(classes => {
        return <div className= {classes}></div>
      })])
    console.log(dotArrayClass)
    console.log(dots)
  }, [current]);

 
  const previous = () => {
    if (current > 0) {
      setCurrent((p) => p - 1);
    } else {
      setCurrent(max);
    }
  };
  const next = () => {
    if (current < max) {
      setCurrent((p) => p + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className="holder">
      <div className="arrows">
        <div
          className="prev"
          onClick={() => {
            previous();
          }}
        >
          &#10094;
        </div>
        <div
          className="next"
          onClick={() => {
            next();
          }}
        >
          &#10095;
        </div>
      </div>
      <div className="dotAndImage">
      
        <div className="dots">
            {dots}
        </div>
        <img src={images[current]} alt="project image" />
      </div>
    </div>
  );
}

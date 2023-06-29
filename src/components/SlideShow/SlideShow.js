import React, { useEffect, useState } from "react";
import "./SlideShow.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function SlideShow({ item }) {
  const images = item.array;
  const max = images.length - 1;

  const dotArrayClass = [];
  dotArrayClass.push("dot active");
  for (let i = 0; i <= max; i++) {
    if (i > 0) {
      dotArrayClass.push("dot");
    }
  }
  const [current, setCurrent] = useState(0);
  const [dots, setDots] = useState([
    dotArrayClass.map((classes) => {
      return <div className={classes}></div>;
    }),
  ]);

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
    setDots([
      dotArrayClass.map((classes) => {
        return <div className={classes}></div>;
      }),
    ]);
    console.log(dotArrayClass);
    console.log(dots);
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

  const navigate = useNavigate();
  return (
    <div className="holder">
      <div className="linksAndButton">
        <HashLink smooth to="/#work" className="backButton">
          Go Back
        </HashLink>
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
        {item.link ? <a href={item.link} target="_blank">View Live</a>:null}
      </div>

      <div className="dotAndImage">
        <div className="dots">{dots}</div>
        <img src={images[current]} alt="project image" />
      </div>
    </div>
  );
}

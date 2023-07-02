import React from "react";
import './Hero.css'
import vector from "../../assets/Vector 1.png";
import me from "../../assets/Untitled design 1.png";
import me2 from "../../assets/mobile.png";
import banner from "../../assets/mobile2.png";
const Image = () =>{
    return <div className="imageHolder">
    {/* <img id = "img1" src={vector} alt="" />
    <img id = "img2" src={me} alt="" /> */}
    <img id = "img3" src={banner} alt="" />
    <img id = "img4" src={me2} alt="" />
  </div>
}
const Text = () =>{
    return <div className="textHolder">
    <h1>Lakhwinder Singh</h1>
    <div>
      
    </div>
    <h2>Designer and Developer</h2>
    <p>Highly skilled in React development,
and front-end Development.</p>
    <div></div>
  </div>
}
export default function Hero() {
  return (
    <div className="hero">
        <Image/>
        <div className="empty"></div>    
        <Text/>
    </div>
  );
}

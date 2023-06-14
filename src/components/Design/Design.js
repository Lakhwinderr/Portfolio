import React from 'react'
import img1 from "../../assets/Design/Homepage.jpg";
import img2 from "../../assets/Design/Blog Page.jpg";
import img3 from "../../assets/Design/Post Page.jpg";
import img4 from "../../assets/Design/Your Design.jpg"
import img5 from "../../assets/Design/images/Extreme Crop.jpg"
import img6 from "../../assets/Design/images/Soft Crop - Color.jpg"
import img7 from "../../assets/Design/images/Soft Crop - White-1.jpg"
import img8 from "../../assets/Design/images/Your Design.jpg"
import SlideShow from '../SlideShow/SlideShow';
export default function Design() {
    const project1 = [img1, img2, img3];
    const project2 = [img4];
    const project3 = [img5,img6,img7,img8];
  return <>
    {/* <SlideShow project = {project1}></SlideShow> */}
    {/* <SlideShow project = {project2}></SlideShow> */}
    <SlideShow project = {project3}></SlideShow>
  </>
}

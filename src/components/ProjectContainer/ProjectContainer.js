import React, { useEffect, useState } from "react";
import "./ProjectContainer.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import dproject1 from "../../assets/dproject1.jpg";
import dproject2 from "../../assets/dproject2.jpg";
import dproject3 from "../../assets/dproject3.jpg";
import dproject4 from "../../assets/Design/bookCover.JPG"
import img1 from "../../assets/Design/Homepage.jpg";
import img2 from "../../assets/Design/Blog Page.jpg";
import img3 from "../../assets/Design/Post Page.jpg";
import img4 from "../../assets/Design/Your Design.jpg";
import img5 from "../../assets/Design/images/Extreme Crop.jpg";
import img6 from "../../assets/Design/images/Soft Crop - Color.jpg";
import img7 from "../../assets/Design/images/Soft Crop - White-1.jpg";
import img8 from "../../assets/Design/images/Your Design.jpg";
import Card from "../Card/Card";
import ll1 from "../../assets/Dev/1.jpeg"
import ll2 from "../../assets/Dev/2.jpeg"
import ll3 from "../../assets/Dev/3.jpeg"
import ll4 from "../../assets/Dev/4.jpeg"
import ll5 from "../../assets/Dev/5.jpeg"
import ls1 from "../../assets/Dev/11.jpeg"
import sg1 from "../../assets/Dev/12.jpeg"
import wp1 from "../../assets/Dev/21.jpeg"
import wp2 from "../../assets/Dev/22.jpeg"
import wp3 from "../../assets/Dev/23.jpeg"
import wp4 from "../../assets/Dev/24.jpeg"


export default function ProjectContainer() {
  const dprojecta1 = [img1, img2, img3];
  const dprojecta2 = [img4];
  const dprojecta3 = [img5, img6, img7, img8];
  const dprojecta4 = [dproject4];

  const devProject1 = [ll1, ll2,ll3, ll4, ll5];
  const devProject2 = [ls1]
  const devProject3 = [sg1]
  const devProject4 = [wp1, wp2, wp3, wp4]

  const Development = [
    {
      img: project1,
      title: "Little Lemon",
      description:
        "Little Lemon Restaurant website built with React. Fully responsive web app, modern front end application that allows users to reserve a table for the Little Lemon restaurant.",
      array: devProject1,
      link: "https://lakhwinderr.github.io/little-lemon/"
      },
      {
        img: project3,
        title: "Snake Game",
        description:
          "Snake Game build using HTML, CSS and JavaScript.",
        array: devProject3,
        link:"https://lakhwinderr.github.io/SnakeGame2/"
        },
        {
          img: dproject1,
          title: "Team Website",
          description: "Team App built using webflow.",
          array: dprojecta1,
          link: "https://team-eac75d.webflow.io/"
        },
        {
          img: dproject2,
          title: "Chat APP Website",
          description: "Chat App Landing Page built with webflow.",
          array: dprojecta2,
          link: "https://first-webpage-fac860.webflow.io/"
        },
        {
          img: project4,
          title: "Daily Inspirational Blog",
          description: "Daily Inspirational Blog built with Wordpress",
          array: devProject4,
          link: "https://yourdailyinspirationdose.wordpress.com/"
        },
    {
      img: project2,
      title: "Lucky Shrubs",
      description:
        "Basic website build using HTML, CSS and JavaScript. Lucky Shrub is a medium-sized garden design firm.",
      array: devProject2,
      link:"https://lakhwinderr.github.io/Lucky-Shrubs-Portfolio-Project/"
      }
    
  ];

  const Design = [
    {
      img: dproject1,
      title: "Team Website",
      description: "Web Design for Team App.",
      array: dprojecta1,
    },
    {
      img: dproject2,
      title: "Chat APP Website",
      description: "Web Design for Chat App.",
      array: dprojecta2,
    },
    {
      img: dproject3,
      title: "Image Cropping",
      description: "Image Cropping and Toning",
      array: dprojecta3,
    },
    {
      img: dproject4,
      title: "Paper Friends Book Cover",
      description: "Origami Book Cover designed in Adobe Photoshop",
      array: dprojecta4
    }
  ];
  const DevelopmentCards = Development.map(project => <Card item = {project}/>)
  const DesignCards = Design.map(project => <Card item = {project}/>)
  
  const [tab, setTab] = useState(1);

  // useEffect(() => {
  //   console.log(DevelopmentCards)
  // }, [])
  const projectContainer = () => {
    switch (tab) {
      case 1:
        return <div className="projectContainer fade">
          {DevelopmentCards}
        </div>;
      case 2:
        return <div className="projectContainer secondContainer fade">
            {DesignCards}
        </div>;
    }
  };
  return (
    <div className="topContainer">
      <ToggleButton tab={tab} setTab={setTab}></ToggleButton>
      {projectContainer()}
    </div>
  );
}

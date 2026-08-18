import React, { useState } from "react";
import "./ProjectContainer.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import project1 from "../../assets/project1.jpg";
import project4 from "../../assets/project4.jpg";
import dproject1 from "../../assets/dproject1.jpg";
import dproject2 from "../../assets/dproject2.jpg";
import dproject4 from "../../assets/Design/bookCover.JPG";
import img1 from "../../assets/Design/Homepage.jpg";
import img2 from "../../assets/Design/Blog Page.jpg";
import img3 from "../../assets/Design/Post Page.jpg";
import img4 from "../../assets/Design/Your Design.jpg";
import bookCoverCard from "../../assets/cards/bookCover.jpg";
import homepageCard from "../../assets/cards/homepage.jpg";
import blogPageCard from "../../assets/cards/blog-page.jpg";
import postPageCard from "../../assets/cards/post-page.jpg";
import yourDesignCard from "../../assets/cards/your-design.jpg";
import dev1Card from "../../assets/cards/dev-1.jpg";
import dev2Card from "../../assets/cards/dev-2.jpg";
import dev3Card from "../../assets/cards/dev-3.jpg";
import dev4Card from "../../assets/cards/dev-4.jpg";
import dev5Card from "../../assets/cards/dev-5.jpg";
import dev11Card from "../../assets/cards/dev-11.jpg";
import dev21Card from "../../assets/cards/dev-21.jpg";
import dev22Card from "../../assets/cards/dev-22.jpg";
import dev23Card from "../../assets/cards/dev-23.jpg";
import dev24Card from "../../assets/cards/dev-24.jpg";
import project2Card from "../../assets/cards/project2.jpg";
import Card from "../Card/Card";
import SlideShow from "../SlideShow/SlideShow";
import ll1 from "../../assets/Dev/1.jpeg";
import ll2 from "../../assets/Dev/2.jpeg";
import ll3 from "../../assets/Dev/3.jpeg";
import ll4 from "../../assets/Dev/4.jpeg";
import ll5 from "../../assets/Dev/5.jpeg";
import ls1 from "../../assets/Dev/11.jpeg";
import wp1 from "../../assets/Dev/21.jpeg";
import wp2 from "../../assets/Dev/22.jpeg";
import wp3 from "../../assets/Dev/23.jpeg";
import wp4 from "../../assets/Dev/24.jpeg";

export default function ProjectContainer() {
  const dprojecta1 = [img1, img2, img3];
  const dprojecta1Cards = [homepageCard, blogPageCard, postPageCard];
  const dprojecta2 = [img4];
  const dprojecta2Cards = [yourDesignCard];
  const dprojecta4 = [dproject4];
  const dprojecta4Cards = [bookCoverCard];

  const devProject1 = [ll1, ll2, ll3, ll4, ll5];
  const devProject1Cards = [dev1Card, dev2Card, dev3Card, dev4Card, dev5Card];
  const devProject2 = [ls1];
  const devProject2Cards = [dev11Card];
  const devProject4 = [wp1, wp2, wp3, wp4];
  const devProject4Cards = [dev21Card, dev22Card, dev23Card, dev24Card];

  const Development = [
    {
      img: project1,
      title: "Little Lemon",
      category: "Web app",
      description:
        "Little Lemon Restaurant website built with React. Fully responsive web app, modern front end application that allows users to reserve a table for the Little Lemon restaurant.",
      array: devProject1,
      cardArray: devProject1Cards,
      link: "https://lakhwinderr.github.io/little-lemon/",
    },
    {
      img: dproject1,
      title: "Team Website",
      category: "Webflow",
      description: "Team App built using webflow.",
      array: dprojecta1,
      cardArray: dprojecta1Cards,
      link: "https://team-eac75d.webflow.io/",
    },
    {
      img: dproject2,
      title: "Chat APP Website",
      category: "Webflow",
      description: "Chat App Landing Page built with webflow.",
      array: dprojecta2,
      cardArray: dprojecta2Cards,
      link: "https://first-webpage-fac860.webflow.io/",
    },
    {
      img: project4,
      title: "Daily Inspirational Blog",
      category: "Wordpress",
      description: "Daily Inspirational Blog built with Wordpress",
      array: devProject4,
      cardArray: devProject4Cards,
      link: "https://yourdailyinspirationdose.wordpress.com/",
    },
    {
      img: project2Card,
      title: "Lucky Shrubs",
      category: "Website",
      description:
        "Basic website build using HTML, CSS and JavaScript. Lucky Shrub is a medium-sized garden design firm.",
      array: devProject2,
      cardArray: devProject2Cards,
      link: "https://lakhwinderr.github.io/Lucky-Shrubs-Portfolio-Project/",
    },
  ];

  const Design = [
    {
      img: dproject1,
      title: "Team Website",
      category: "Web design",
      description: "Web Design for Team App.",
      array: dprojecta1,
      cardArray: dprojecta1Cards,
    },
    {
      img: dproject2,
      title: "Chat APP Website",
      category: "Web design",
      description: "Web Design for Chat App.",
      array: dprojecta2,
      cardArray: dprojecta2Cards,
    },
    {
      img: dproject4,
      title: "Paper Friends Book Cover",
      category: "Book cover",
      description: "Origami Book Cover designed in Adobe Photoshop",
      array: dprojecta4,
      cardArray: dprojecta4Cards,
    },
  ];

  const [tab, setTab] = useState(1);
  const [viewerItem, setViewerItem] = useState(null);
  const projects = tab === 1 ? Development : Design;
  const panelId = tab === 1 ? "work-panel-development" : "work-panel-design";
  const tabId = tab === 1 ? "work-tab-development" : "work-tab-design";

  return (
    <div className="topContainer">
      <ToggleButton tab={tab} setTab={setTab} />
      <div
        className="projectContainer"
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            item={project}
            onViewProject={setViewerItem}
          />
        ))}
      </div>
      {viewerItem ? (
        <SlideShow item={viewerItem} onClose={() => setViewerItem(null)} />
      ) : null}
    </div>
  );
}

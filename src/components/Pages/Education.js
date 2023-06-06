import React from 'react'
import Header from "../Header/Header";
import EducationCard from '../EducationCard/EducationCard';
import Footer from "../Footer/Footer";

export default function Education() {
  const educationData = [
    {title : "Front-end Specialization by META",
description: "Completed all the nine courses with excellent performance. META build the react itself. All the concepts were crystal clear while learning from top staff working at META.",
link: ""},
{
  title: "Introduction to UI-UX Design by GOOGLE",
  description: "This was first step towards design. It covered the basics of UI-UX design. I studied important concepts later covered in Frontend Specialization by META.",
  link: ""
},
{
  title : "Introduction to Programming with MATLAB",
  description: "I am also interested in robotics a little bit from childhood. So covered the programming concepts here in this course. Course was taught by Vanderbilt University staff.",
  link: ""
},
{
  title: "Python for Data Science -DataQuest.io",
  description : "Learnt python during college time for analyzing the geological data.Not only python, but other libraries as well. Got to know about Jupyter Notebook and Anaconda libraries.",
  link: ""
},
{
  title: "MTech in Geological Technology - IIT Roorkee",
  description: "Studied geology and earth sciences in college. Graduated in first-division in year 2022. Developed interest in programming and development in last year of college.",
  link: ""
},
{
  title: "High School Education - Akal Academy",
  description: "Cleared high school education with exceptional performance(10 CGPA). Creative and intelligent in high school and showed great interest in innovative stuff whether it was science fair or drawing competition.",
  link: ""
}
]
  return (
    <div >
      <Header></Header>
     
      
      <EducationCard data = {educationData}></EducationCard>
      <Footer></Footer>
    </div>
  )
}

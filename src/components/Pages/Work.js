import SlideShow from "../SlideShow/SlideShow";
import { useContext, useEffect } from 'react'
import React from 'react'
import { ProjectContext } from '../Card/Card'

export default function Work() {

    const project = useContext(ProjectContext);
    
    useEffect(()=>{
    //    console.log(project.project.array)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [project.project])

  return (
    <div>
        {/* <h1>Inside Work</h1> */}
      <SlideShow item = {project.project}></SlideShow>
    </div>
  )
}

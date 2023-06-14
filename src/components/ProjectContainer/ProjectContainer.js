import React, { useState } from 'react'
import './ProjectContainer.css'
import ToggleButton from '../ToggleButton/ToggleButton'
export default function ProjectContainer() {
  const [tab, setTab] = useState(1);
  const projectContainer = () => {
    switch(tab){
      case 1:
        return <div className="projectContainer fade">
          
        </div>
      case 2:
        return <div className="projectContainer secondContainer fade">
          
        </div>
    }
  }
  return (
    <div className='topContainer'>
        <ToggleButton tab = {tab} setTab = {setTab}></ToggleButton>
      {projectContainer()}
    </div>
  )
}

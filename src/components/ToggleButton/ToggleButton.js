import React, { useState } from 'react'
import './ToggleButton.css'
export default function ToggleButton() {
  const [tab, setTab] = useState(1);
  const clickHandler  = () => {
    if(tab == 1){
      return setTab(2);
    }
    else{
      return setTab(1);
    }
  }

  const myStyle = {
    gridColumnStart : `${tab}`
  }
  return (
    <div className="toggle" onClick={clickHandler}>
        <div className="text">Development</div>
        <div className="text">Design</div>
        <div className="holder" style={myStyle}>
            <div className="bar"></div>
        </div>
    </div>
  )
}

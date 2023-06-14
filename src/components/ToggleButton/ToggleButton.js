import React, { useState } from 'react'
import './ToggleButton.css'
export default function ToggleButton({tab, setTab}) {
  // const [tab, setTab] = useState(1);
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
        <div className="toggletext">Development</div>
        <div className="toggletext">Design</div>
        <div className="holder" style={myStyle}>
            <div className="togglebar"></div>
        </div>
    </div>
  )
}

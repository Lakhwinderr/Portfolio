import React from 'react'
import './BackGround.css'
export default function BackGround() {
    const colors = ["#D61355", "#F94A29", "#FCE22A", "#30E3DF"]
    const leftGrids = () => {
        const divs = [];
        for (let i = 1; i < 6; i++) {
            for(let j =1; j< 5; j++){
                const divStyle = {
                    gridRowStart : `${i * j}`,
                    backgroundColor: `${colors[(j - 1)]}`
                }
                console.log(divStyle)
                divs.push(<div style = {divStyle}></div>)
            }
        }
        return divs.map(div =>  div)
    }
  return (
    <div className='backGround'>
      {leftGrids()}
    </div>
  )
}

import React from 'react'
import './BackGround.css'
export default function BackGround({headerDiv, heroDiv}) {
    const colors = ["#D61355", "#F94A29", "#FCE22A", "#30E3DF"]
    const leftGrids = () => {
        const divs = [];
        let k = 1;
        for (let i = 1; i < 6; i++) {
            for(let j =0; j< 4; j++){
                const divStyle = {
                    gridRowStart : `${k}`,
                    backgroundColor: `${colors[(j)]}`
                }
                
                console.log(divStyle)
                let myClass = null;
                if(k%2 === 0){
                    myClass = "two"
                }else if(k%3 === 0){
                    myClass = "three"
                }else if(k%5 === 0){
                    myClass = "five"
                }else{
                    myClass = 'default'
                }
           
                
                divs.push(<div style = {divStyle} className= {`box ${myClass}`} key={k}></div>)
                k++;
            }
        }
        return divs.map(div =>  div)
    }
    const rightGrids = () => {
        const divs = [];
        let k = 1;
        for (let i = 1; i < 6; i++) {
            for(let j =0; j< 4; j++){
                const divStyle = {
                    gridRowStart : `${k}`,
                    gridColumnStart : "-2",
                    backgroundColor: `${colors[(j)]}`
                }
                
                console.log(divStyle)
                let myClass = null;
                if(k%2 === 0){
                    myClass = "twoR"
                }else if(k%3 === 0){
                    myClass = "threeR"
                }else if(k%5 === 0){
                    myClass = "fiveR"
                }else{
                    myClass = 'defaultR'
                }
           
                
                divs.push(<div style = {divStyle} className= {`box ${myClass}`} key={k}></div>)
                k++;
            }
        }
        return divs.map(div =>  div)
    }
  return (
    <div className='backGround'>
      {leftGrids()}
      {rightGrids()}
      {headerDiv}
      {heroDiv}
    </div>
  ) 
}

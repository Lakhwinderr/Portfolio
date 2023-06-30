import React from "react";
import "./BackGround.css";
export default function BackGround({ children }) {
  // const colors = ["#D61355", "#F94A29", "#FCE22A", "#30E3DF"]
  // const leftGrids = () => {
  //     const divs = [];
  //     let k = 1;
  //     for (let i = 1; i < 6; i++) {
  //         for(let j =0; j< 4; j++){
  //             const divStyle = {
  //                 gridRowStart : `${k}`,
  //                 backgroundColor: `${colors[(j)]}`
  //             }

  //             let myClass = null;
  //             if(k%2 === 0){
  //                 myClass = "two"
  //             }else if(k%3 === 0){
  //                 myClass = "three"
  //             }else if(k%5 === 0){
  //                 myClass = "five"
  //             }else{
  //                 myClass = 'default'
  //             }

  //             divs.push(<div style = {divStyle} className= {`box ${myClass}`} key={k}></div>)
  //             k++;
  //         }
  //     }
  //     return divs.map(div =>  div)
  // }
  // const rightGrids = () => {
  //     const divs = [];
  //     let k = 1;
  //     for (let i = 1; i < 6; i++) {
  //         for(let j =0; j< 4; j++){
  //             const divStyle = {
  //                 gridRowStart : `${k}`,
  //                 gridColumnStart : "-2",
  //                 backgroundColor: `${colors[(j)]}`
  //             }

  //             let myClass = null;
  //             if(k%2 === 0){
  //                 myClass = "twoR"
  //             }else if(k%3 === 0){
  //                 myClass = "threeR"
  //             }else if(k%5 === 0){
  //                 myClass = "fiveR"
  //             }else{
  //                 myClass = 'defaultR'
  //             }

  //             divs.push(<div style = {divStyle} className= {`box ${myClass}`} key={k}></div>)
  //             k++;
  //         }
  //     }
  //     return divs.map(div =>  div)
  // }

  //Let us make another backgroung using other CSS elements .

  //windmill
  const Windmill = () => {
    return (
      <div class="window">
        <div class="windmill">
          <div class="pillar"></div>
          <div class="dome">
            <div class="dome-window"></div>
          </div>
          <div class="windmill-window"></div>
          <div class="blades">
            <div class="blade blade-1"></div>
            <div class="blade blade-2"></div>
            <div class="blade blade-3"></div>
            <div class="blade blade-4"></div>
          </div>
          <div class="ramp">
            <div class="grill"></div>
            <div class="hook hook-1"></div>
            <div class="hook hook-2"></div>
            <div class="hook hook-3"></div>
            <div class="hook hook-4"></div>
          </div>
        </div>
        <div class="sun"></div>
        <div class="land"></div>
        <div class="grass grass-1"></div>
        <div class="grass grass-2"></div>
      </div>
    );
  };
  return (
    <div className="backGround">
      {/* {leftGrids()}
      {rightGrids()} */}
      {/* <Windmill></Windmill> */}
      {children}
    </div>
  );
}

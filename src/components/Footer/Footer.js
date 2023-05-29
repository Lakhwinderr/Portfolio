import React from 'react'
import './Footer.css'
import linkedIn from '../../assets/1.svg'
import gitHub from '../../assets/2.svg'
import devPost from '../../assets/devpost.svg'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Work</li>
        </ul>
        <div className="socialHandles">
                <img src={linkedIn} alt="" />
                <img src={gitHub} alt="" />
                <img src={devPost} alt="" />
        </div>
      </div>
    </div>
  )
}

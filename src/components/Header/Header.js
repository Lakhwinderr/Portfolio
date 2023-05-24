import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><div className="navItem">Home</div></li>
                <li><div className="navItem">Work</div></li>
                <li><div className="navItem">Education</div></li>
                <li><div className="navItem">About</div></li>
                <li><div className="navItem">Contact</div></li>
            </ul>
        </nav>
    </header>
  )
}

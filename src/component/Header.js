import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div>
        <div className='header sticky'>
            <h1>-SR-</h1>
            <div className='nav-bar'>
                <ul>
                    <li>
                        <a href='#home'>HOME</a>
                    </li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#skills'>SKILLS</a></li>
                    <li><a href='#projects'>PROJECTS</a></li>
                    <li><a href='#contact'>CONTACT</a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Header
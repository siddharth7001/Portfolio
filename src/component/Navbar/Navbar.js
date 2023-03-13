import './Navbar.css'
import React from 'react'
import Toggle from '../../component/Toggle/Toggle.js'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-wrapper' id='Navbar'>
      <div className='n-left'>
        <div className='n-name'>SR</div>
        <Toggle/>
      </div>
      <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyleType: 'none'}}>
              <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>
              </Link>
              <Link spy={true} to='Services' smooth={true} >
              <li>Services</li>
              </Link>
              <Link spy={true} to='Expirence' smooth={true} >
              <li>Expirence</li>
              </Link>
              <Link spy={true} to='Portfolio' smooth={true}>
              <li>Portfolio</li>
              </Link>
              <Link spy={true} to='Testimonials' smooth={true}>
              <li>Testimonials</li>
              </Link>
            </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
        <button className='button n-button'>
            Contact
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Heartemoji from '../../img/heartemoji.png'
import Card from '../../component/Card/Card.js'
import SIDDHARTH from './SIDDHARTH.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from 'framer-motion'


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration :2, type :'spring'}
  
  return (
    <div className='services' id='Services'
    style = {{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : '',
    }}>
        {/* leftSide */}
        <div className='awesome'>
          <span>My Awesome</span>
          <span>services</span>
          <span>Lorem Ipsum is simply dummy text of the printing and 
typesetting industry.
          </span>
          <a href={SIDDHARTH} download>
          <button className='button s-button'>Download CV</button>
          </a>
          <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right Side */}
        <div className='cards' >
          <motion.div 
          initial={{left:'25rem'}}
          whileInView={{left: '14rem'}}
          transition={transition}
          
          style={{left:'14rem'}}>
            <Card 
            emoji={Heartemoji}
            heading={'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
            </motion.div>
          <motion.div
          initial={{top:'12rem', left: '0rem'}}
          whileInView={{left: '-4rem'}}
          transition={transition}
          
          style={{top:'12rem',left:'-4rem'}}>
            <Card 
            emoji={Glasses}
            heading={'Developer'}
            detail = {"Html, Css, JavaScript, React, Java"}
            />
          </motion.div>
          <motion.div 
           initial={{top:'19rem',left:'15rem'}}
           whileInView={{left: '20rem'}}
           transition={transition}

          style={{top:'19rem',left:'20rem'}}>
            <Card 
            emoji={Humble}
            heading={'UI/UX'}
            detail = {"Lorem Ipsum is simply dummy text of the printing"}
            />
          </motion.div>
          <div className='blur s-blur2' style={{background:"var(--purple)"}}>

          </div>
        </div>
    </div>

  )
}

export default Services
import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png"
import  Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Facebook from "../../img/Facebook.png"
import Shopify from "../../img/Shopify.png"

import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'


const Works = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'
    style = {{
      background : darkMode ? 'black' : '',
     color : darkMode ? 'white' : '',
   }}>
       <div className='awesome'>
          <span>Works for All these</span>
          <span>Brand</span>
          <span>Lorem Ipsum is simply dummy text of the printing and 
type setting industry.
<br/>Lorem Ipsum is simply dummy text of the printing<br/>
type setting industry.<br/>Lorem Ipsum is simply dummy text of the printing and 
type setting industry.
          </span>
          <button className='button s-button'>Hire me</button>

          <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
      <div className='w-right'>
        <motion.div className='w-mainCircle'
         initial={{rotate: 45 }}
         whileInView={{rotate: 0 }}
         viewport={{ margin : '-40px'}}
         transition={{duration: 3.5, type: 'spring'}}
         
        >
          <div className='w-secCircle'>
            <img src={Upwork} alt=""/>
          </div>
          <div className='w-secCircle'>
            <img src={Fiverr} alt=""/>
          </div>
          <div className='w-secCircle'>
            <img src={Amazon} alt=""/>
          </div>
          <div className='w-secCircle'>
            <img src={Facebook} alt=""/>
          </div>
          <div className='w-secCircle'>
            <img src={Shopify} alt=""/>
          </div>
        </motion.div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  )
}

export default Works
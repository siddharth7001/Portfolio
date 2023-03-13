import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Employe from "../../img/Employe.png"
import Expense from "../../img/Expense.png"
import Music from "../../img/Music (1).png"
import StrangerThings from "../../img/StrangerThings.png"
import Parallax from "../../img/Parallax.png"
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className='portfolio'
    id='Portfolio'
    style = {{
        background : darkMode ? 'black' : '',
       color : darkMode ? 'white' : '',
     }}
     >
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper spaceBetween={30} 
                slidesPerView={3}  
                grabCursor={true}
                className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={StrangerThings} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Employe} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Expense} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Music} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Parallax} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
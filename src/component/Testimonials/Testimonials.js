import './Testimonials.css'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Profile1 from '../../img/professional1.jpg'
import Profile2 from '../../img/images2.jpg'
import Profile3 from '../../img/download2.jpg'
import Profile4 from '../../img/pro4.jpg'
import Profile5 from '../../img/images5.jpg'
import Profile6 from '../../img/pro6.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
  const clients = [
    {
      img : Profile1,
      rewiew : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget cursus urna, in dignissim nunc. Suspendisse in arcu hendrerit, pellentesque neque nec, maximus metus. Morbi eleifend turpis nunc, eget hendrerit sapien sagittis vitae. "
    },
    {
      img : Profile2,
      rewiew : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget cursus urna, in dignissim nunc. Suspendisse in arcu hendrerit, pellentesque neque nec, maximus metus. Morbi eleifend turpis nunc, eget hendrerit sapien sagittis vitae. "
    },
    {
      img : Profile3,
      rewiew : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget cursus urna, in dignissim nunc. Suspendisse in arcu hendrerit, pellentesque neque nec, maximus metus. Morbi eleifend turpis nunc, eget hendrerit sapien sagittis vitae. "
    },
    {
      img : Profile4,
      rewiew : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget cursus urna, in dignissim nunc. Suspendisse in arcu hendrerit, pellentesque neque nec, maximus metus. Morbi eleifend turpis nunc, eget hendrerit sapien sagittis vitae. "
    },
    {
      img : Profile5,
      rewiew : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget cursus urna, in dignissim nunc. Suspendisse in arcu hendrerit, pellentesque neque nec, maximus metus. Morbi eleifend turpis nunc, eget hendrerit sapien sagittis vitae. "
    },
    {
      img : Profile6,
      rewiew : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget cursus urna, in dignissim nunc. Suspendisse in arcu hendrerit, pellentesque neque nec, maximus metus. Morbi eleifend turpis nunc, eget hendrerit sapien sagittis vitae. "
    },

  ]
  return (
    <div className='t-wrapper' id='Testimonials'> 
        <div className='t-headding'>
            <span>Clients always get </span>
            <span>Exceptional work </span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{ background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{ background: "var(--skyblue)"}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        
        >
          {clients.map((client, index)=>{
            return (
              <SwiperSlide key={index}>
                <div className='testimonials'>
                <img src={client.img} alt="" />
                <span>{client.rewiew}</span>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        
    </div>
  )
}

export default Testimonials
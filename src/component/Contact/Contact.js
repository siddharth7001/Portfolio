import './Contact.css'
import React, { useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';

import { themeContext } from '../../Context';
import { useContext } from 'react';


const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9uhyjdv', 'template_9icnau7', form.current, 'FhNMjjFrPyvgPPhxD')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };

      
  return (
    <div className='contact-form' id='Contact'
    style = {{
        background : darkMode ? 'black' : '',
       color : darkMode ? 'white' : '',
     }}
     >
        <div className='w-left'>
            <div className='awesome'>
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background : "ABF1FF94"}}>
                </div>
            </div>
        </div>
        <div className='c-right' >
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Massage'/>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thankyou for contacting me!"}</span>
                <div className='blur c-blur1' style={{background : "var(--purple)"}}>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Contact
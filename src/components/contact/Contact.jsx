import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehb3f6x', 'template_cwsjoyy', form.current, 'mTJ6MJ5Bf7qP4AaJ9')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>srivastavaaditya714@gmail.com</h5>
            <a href="mailto:srivastavaaditya714@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Portfolio</h5>
            <a href="https://m.me/laxmi.srivastva.10" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7571065556</h5>
            <a href="https://web.whatsapp.com/" target='_blank'>Send a Message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

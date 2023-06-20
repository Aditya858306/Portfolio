import React from 'react'
import './about.css'
import  ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>


            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>


            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ratione incidunt quisquam nisi tenetur quos ipsam natus aliquid autem, labore eius saepe. Deserunt laborum assumenda minus tempora quos quibusdam ipsa ipsam quia.</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk </a>       
        </div>

      </div>
    </section>
  )
}

export default About

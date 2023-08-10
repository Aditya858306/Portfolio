import React from "react";
import "./about.css";
import Web from "../../assets/Web.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Web} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Studying</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>

          <p>
            Hi there! I'm Aditya Srivastava, a Budding Mern-Stack Developer with
            a passion for creating and developing websites that can help people
            solve their real and ground issues. With 2 years of experience in
            development, I've had the privilege to develop websites for the
            problems that I found real and crucial. My journey started around 2
            years back when I was trying to explore my field of interest in
            tech. Since then, I've been slowly and patiently doing my bit on
            this respective field in a mission to become a full stack developer.
            I thrive on hard work, dedication and determination. Let's connect
            and explore how We can Collaborate/Work Together. Feel free to
            contact at 7571065566. Looking forward to Something Positive.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

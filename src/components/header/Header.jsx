import React from 'react'
import './header.css'
import CTA from './CTA'
import myself from '../../assets/myself.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
  <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aditya Srivastava</h1>
        <div className="text-light" >MernStack Developer</div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={myself} alt="My Image" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
  </header>
  )
}

export default Header

import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aditya-srivastava-522a7a203/" target='_blank'> <BsLinkedin /> </a>
        <a href="https://github.com/Aditya858306" target='_blank'> <FaGithub /> </a>
      
    </div>
  )
}

export default HeaderSocials

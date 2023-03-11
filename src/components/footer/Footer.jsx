import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#"className='footer_logo'>SAI SRUJAN PENTA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/saisrujanpenta"><AiOutlineLinkedin /></a>
        <a href="https://www.instagram.com/saisrujan_penta/"><AiOutlineInstagram /></a>
        <a href="https://dribble.com"><AiOutlineDribbble /></a>
      </div>
      
      <div className="footer_copyright">
        <small>&copy; SaiSrujanPenta. All rights reserved - 2023</small>
      </div>
    </footer>
  )
}

export default Footer
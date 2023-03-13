import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container" data-aos="zoom-in">
        <h5>Hello I'm</h5>
        <h1>Sai Srujan Penta</h1>
        <h5 className='text-light'>Front-End Developer and User Experience Designer</h5>
        <CTA />
        <HeaderSocials />

      
        <div className="me" data-aos="zoom-in" data-aos-delay="400">
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
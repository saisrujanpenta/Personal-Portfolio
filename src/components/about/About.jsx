import React from 'react'
import './About.css'
import me from '../../assets/me.jpeg'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import react from '../../assets/science.png'
import JavaScript from '../../assets/js.png'
import node from '../../assets/nodejs.png'
import mongo from '../../assets/MongoDB.png'
import bootstrap from '../../assets/bootstrap.png'
import figma from '../../assets/figma.png'

import {FaAward} from 'react-icons/fa'
import {FaLanguage} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <br></br><br></br>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-duration="550">
        <div>
          <div className="about_me">
            {/* <div className="about_me-image">
              <img src={me} alt='about image' />
            </div> */}
          </div>

          <div className="skills_icons" data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="1350">
            <article className='skill_icon'><img className='icon_images' src={html} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={css} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={react} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={JavaScript} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={node} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={mongo} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={bootstrap} alt='about image' /></article>
            <article className='skill_icon'><img className='icon_images' src={figma} alt='about image' /></article>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards" data-aos="zoom-in-right" data-aos-delay="300" data-aos-easing="ease-in-sine" data-aos-duration="1050">
            <div data-aos="zoom-in-right" data-aos-delay="400">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article></div>

            <div data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="1350"><article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article></div>

            <div data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="1650"><article className='about_card'>
              <FaLanguage className='about_icon' />
              <h5>Languages</h5>
              <small>3 Different Languages</small>
            </article></div>

          </div>

          <p>
          There are three responses to a piece of design — yes, no, and WOW! Wow is the one to aim for.<br></br><br></br>

          I've always known that my dream job would be one that required creativity, which I possess. I completed 
          my undergraduate degree in mechanical engineering with the intention of becoming a design engineer. 
          Later I gravitated towards Information technology and started my career as a software engineer at 
          Capgemini India. But I kind of just felt I yearned to learn more, yearned to learn something different.

          And that's when it happened, the spark I was missing ignited the instant I clicked play on my first web 
          development course video on Udemy. Since then, I can't get enough. Front-end web development calls to all 
          my passions, it incorporates creativity and problem solving and I'm allowed to break it to improve the code. 
          I love applying responsive design principles and watching my web pages shrink into mobile screens and 
          still look amazing. It's oddly satisfying. I think in a way I'm kind of those web pages, I am moldable, 
          but I still keep my creative flare intact. 

          My specialities include quickly learning new skills and programming languages, problem solving, domain 
          driven design, responsive design principles, website optimization and website designs that include 
          animations. So far I have SQL, JavaScript, HTML, CSS, jQuery, Angular, Bootstrap, React, Node.JS, 
          MongoDB and Git under my belt. I've started learning Python. I'm still enthusiastically grabbing onto 
          any other programming languages, frameworks or principles I can integrate into the coding web in my head. 
          I am also into User Experience Design. I am experienced with tools like Moqups, Balsamiq and Figma and 
          designed beautiful web pages and mobile applications.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>

        </div>
      </div>
    </section>
  )
}

export default About
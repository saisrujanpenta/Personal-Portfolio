import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/DreamHome.png'
import IMG3 from '../../assets/GrowthSpur.png'
import IMG4 from '../../assets/FutureTalent.png'
import IMG5 from '../../assets/Walmart.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio - React',
    github: 'https://github.com/saisrujanpenta/Personal-Portfolio',
    demo: 'https://saisrujanpenta.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'DreamHome - MERN Stack Website',
    github: 'https://github.com/saisrujanpenta/DreamHome-MERN-Stack-Website',
    demo: 'https://.com'
  },
  
  {
    id: 3,
    image: IMG3,
    title: 'GrowthSpur - An Enterprise Domain Landing Page',
    github: 'https://github.com',
    demo: 'https://www.figma.com/proto/zbRKPyWXhKbEV4dDAppU9Z/Untitled?node-id=2%3A5&scaling=scale-down-width'
  },

  {
    id: 4,
    image: IMG4,
    title: 'FutureTalent - An Education Product Landing Page',
    github: 'https://github.com/saisrujanpenta/UX-Design/blob/main/Future%20Talent%20-%20Landing%20Page.zip',
    demo: 'https://www.figma.com/proto/zbRKPyWXhKbEV4dDAppU9Z/Untitled?node-id=17%3A3255&scaling=scale-down-width'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Walmart Clone - Balsamic',
    github: 'https://github.com/saisrujanpenta/UX-Design/blob/main/Walmart%20Clone.zip',
    demo: 'https://drive.google.com/file/d/1j54kOs82VDAx5v3LJ0qU3X7y8ndq4smn/view?usp=sharing'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <br></br><br></br>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container" data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="550">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel="nonreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="nonreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

        {/* <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://.com" className='btn btn-primary' target='_blank' rel="nonreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://.com" className='btn btn-primary' target='_blank' rel="nonreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://.com" className='btn btn-primary' target='_blank' rel="nonreferrer">Live Demo</a>
          </div>
        </article> */}


      </div>
    </section>
  )
}

export default Portfolio
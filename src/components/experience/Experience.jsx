import React from 'react'
import './Experience.css'
import {MdLocationOn} from 'react-icons/md'
import {BiCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <br></br><br></br>
      <h5>What have I done</h5>
      <h2>My Work Experience</h2>

      <div className="container experience_container">
        <div className="experience_sse" data-aos="zoom-out-right" data-aos-duration="750">
          <h3>Senior Software Engineer</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <MdLocationOn className='experience_details-icon' />
              <div>
              <h4>Capgemini</h4>
              <small className='text-light'>India</small><br></br>
              <small className='text-light'>April 2021 - December 2021 </small>
              </div>
            </article>

            <ul className='experience_details-content'>
              <li>
                <BiCheck className='experience_details-icon' />
                <p>Constructed reliable solutions using JavaScript and React.js design pattern to meet client demands for functionality, scalability and performance attained an average of 95% client satisfaction ratings</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Designed web-based software using CSS, HTML, JavaScript and Web API to improve user experience and accomplished a 20% reduction in development time through use of templates and table-driven methods</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Initiated and led training three peers in web technologies (HTML, CSS, JavaScript), ensuring responsive website creation for enhanced user satisfaction and leading to promotions</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Coordinated with IT, business, program management teams in deploying project specific solutions</p>
              </li>
            </ul>
          </div>
        </div>
{/* end of senior software engineer */}
        <div className="experience_se" data-aos="zoom-out-left" data-aos-duration="1550">
          <h3>Software Engineer</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <MdLocationOn className='experience_details-icon' />
              <div>
              <h4>Capgemini</h4>
              <small className='text-light'>India</small><br></br>
              <small className='text-light'>March 2020 - March 2021 </small>
              </div>
            </article>

            <ul className='experience_details-content'>
              <li><BiCheck className='experience_details-icon2' />
                <p>Executed HTML, CSS, SASS, and JavaScript to build and deliver responsive websites, demonstrating a seamless user experience and strict adherence to modern web development practices</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Achieved a track record of skillfully collaborating with diverse team members, clients and stakeholders, facilitating clear and concise information exchange for achieving favorable project outcomes</p>
              </li>
              {/* <li><BiCheck className='experience_details-icon2' />
                <p>Established and verified Remote Function Call connections between systems to facilitate communication and data exchange</p>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
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
                <p>Performed mandatory system configurations, managing and customizing system settings to optimize its performance</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Configured system monitoring tools to track and measure key performance indicators, resulting in increased system efficiency and troubleshooting capabilities</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Implemented Monitoring dashboards on Fiori Launchpad and helped identifying and troubleshooting issues quickly, making data-driven decisions, and monitoring performance of business processes</p>
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
                <p>Conducted regular system monitoring procedures, generated detailed reports, and provided to concerned teams to ensure optimal system performance</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Configured transport management system between landscapes and transported requests from development to quality and then to production</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Established and verified Remote Function Call connections between systems to facilitate communication and data exchange</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
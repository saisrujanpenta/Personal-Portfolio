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
                <p>Spearheaded initiatives to boost system performance by implementing cutting-edge monitoring dashboards and fine-tuning performance tracking tools, resulting in a remarkable 25% reduction in issue resolution time</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Pioneered implementation of streamlined processes for problem resolution and decision-making by introducing monitoring dashboards on Fiori Launchpad, leading to an impressive 50% reduction in issue identification</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Played a pivotal role in training and empowering a functional team on platform utilization, significantly enhancing team proficiency and overall productivity</p>
              </li>
              {/* <li><BiCheck className='experience_details-icon' />
                <p>Designed web-based software using CSS, HTML, JavaScript and Web API to improve user experience and accomplished a 20% reduction in development time through use of templates and table-driven methods</p>
              </li> */}
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
                <p>Proactively monitored and managed system performance, generating insightful reports for relevant teams, contributing to a substantial improvement in system uptime and a 15% reduction in critical incidents</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Led configuration of a transport management system between landscapes, ensuring seamless transport of requests from development to quality and production environments, streamlining development lifecycle</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Achieved a track record of skillfully collaborating with diverse team members, clients and stakeholders, facilitating clear and concise information exchange for achieving favorable project outcomes</p>
              </li>
              {/* <li><BiCheck className='experience_details-icon2' />
                <p>Developed and maintained multiple responsive web applications using React, incorporating Material-UI for interactive user interfaces, resulting in a 20% increase in user engagement</p>
              </li> */}
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
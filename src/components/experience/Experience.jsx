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
                <p>Optimized web application performance by deploying React.js for monitoring dashboards, achieving a 25% reduction in issue resolution time, streamlining user experience and system efficiency.</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Led the development and integration of performance tracking tools on Fiori Launchpad, achieving a 50% quicker issue identification, thereby enhancing decision-making processes and system responsiveness.</p>
              </li>
              <li><BiCheck className='experience_details-icon' />
                <p>Facilitated team development by conducting hands-on training sessions on UI/UX design principles and web technologies (including JavaScript, HTML, and CSS), boosting team proficiency and productivity in front-end development projects.</p>
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
                <p>Enhanced system uptime and achieved a 15% reduction in critical incidents by proactively monitoring and managing system performance, utilizing React.js and Node.js to generate actionable insights for continuous improvement.</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Streamlined the development lifecycle by leading the configuration of a transport management system, ensuring efficient transitions from development through production environments and fostering seamless project flows.</p>
              </li>
              <li><BiCheck className='experience_details-icon2' />
                <p>Fostered effective collaboration across teams, clients, and stakeholders, leveraging JavaScript, HTML, and CSS in conjunction with Agile methodologies to facilitate clear communication and achieve positive project outcomes.</p>
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
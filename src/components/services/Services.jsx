import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I can do</h5>
      <h2>Skills</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Design and Development</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Management Systems</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Maintenance and Support</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Social Media Integration</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Hosting and Domain Registration</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}

        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Research</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Information Architecture</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability and Accessibility Testing</p>
            </li>

          </ul>
        </article>

{/* end of Ui/Ux */}
        {/* <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Video Editing</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster Design</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services
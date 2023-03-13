import React from 'react'
import './Education.css'
import {FaUniversity} from 'react-icons/fa'
import {BsPatchCheckFill} from 'react-icons/bs'

const Education = () => {
  return (
    <section id='education'>
      <br></br><br></br>
      <h5>What did I study</h5>
      <h2>My Education</h2>

      <div className="container education_container">
        <div className="education_sse" data-aos="zoom-out-right" data-aos-duration="750">
          <h3>Northeastern University</h3>
          <div className="education_content">
            <article className='education_details'>
              <FaUniversity className='education_details-icon' />
              <div>
              <h4>Information Systems</h4>
              <small className='text-light'>Master of Science</small><br></br>
              <small className='text-light'>January 2022 - December 2023 (Expected)</small>
              </div>
            </article>

            <article className='education_skills'>
              <BsPatchCheckFill className='education_skills-icon' />
              <div>
              <h2>Web Development</h2>
              </div>
            </article>

            <article className='education_skills'>
              <BsPatchCheckFill className='education_skills-icon' />
              <div>
              <h2>User Experience Design</h2>
              </div>
            </article>

            <article className='education_skills'>
              <BsPatchCheckFill className='education_skills-icon' />
              <div>
              <h2>Data Management and Database Design</h2>
              </div>
            </article>
          </div>
        </div>
{/* end of senior software engineer */}
        <div className="education_se" data-aos="zoom-out-left" data-aos-duration="1550">
          <h3>Vellore Institute of Technology</h3>
          <div className="education_content">
            <article className='education_details'>
              <FaUniversity className='education_details-icon' />
              <div>
              <h4>Mechanical Engineering</h4>
              <small className='text-light'>Bachelor of Technology</small><br></br>
              <small className='text-light'>June 2015 - April 2019</small>
              </div>
            </article>

            <article className='education_skills'>
              <BsPatchCheckFill className='education_skills-icon' />
              <div>
              <h2>User Centered Design</h2>
              </div>
            </article>

            <article className='education_skills'>
              <BsPatchCheckFill className='education_skills-icon' />
              <div>
              <h2>3D-Modelling</h2>
              </div>
            </article>

            <article className='education_skills'>
              <BsPatchCheckFill className='education_skills-icon' />
              <div>
              <h2>Agile Methodoligies</h2>
              </div>
            </article>


          </div>
        </div>
      </div>

    </section>
  )
}

export default Education
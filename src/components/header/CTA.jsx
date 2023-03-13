import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta' data-aos="zoom-in" data-aos-delay="300">
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA
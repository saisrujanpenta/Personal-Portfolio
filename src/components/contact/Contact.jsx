import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbMessage} from 'react-icons/tb'
import {MdOutlineCall} from 'react-icons/md'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ehuifp', 'template_ygq6fwa', form.current, 'OQkU8VAooVQFNSmR8')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <br></br><br></br>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>penta.s@northeastern.edu</h5>
            <a href="mailto:penta.s@northeastern.edu" target='_blank' rel='noreferrer'>Send an Email</a>
          </article>

          <article className='contact_option'>
            <TbMessage className='contact_option-icon'/>
            <h4>Text</h4>
            {/* <h5>+1 </h5> */}
            <a href="sms:+16124503469" target='_blank' rel='noreferrer'>Send a Text Message</a>
          </article>

          <article className='contact_option'>
            <MdOutlineCall className='contact_option-icon'/>
            <h4>Call</h4>
            {/* <h5>penta.s@northeastern.edu</h5> */}
            <a href="tel:+16124503469" target='_blank' rel='noreferrer'>Call on Mobile</a>
          </article>
        </div>

        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
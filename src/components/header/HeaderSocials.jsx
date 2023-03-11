import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/saisrujanpenta' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/saisrujanpenta' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://www.instagram.com/saisrujan_penta/' target='_blank' rel='noreferrer'><AiFillInstagram /></a>

    </div>
  )
}

export default HeaderSocials
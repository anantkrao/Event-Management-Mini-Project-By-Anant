import React from 'react'
import './about.css';
import opening from '../assets/opening.mp4'

const AboutCompo = () => {
  return (
    <div id='about'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <video autoPlay muted loop id='video'>
      <source src={opening} type='video/mp4' />
    </video>
    <div className="overlay-text">
        <h1>Event Management Mini Project</h1>
        <h2>Presented By</h2>
        <blockquote>Shree <br/> Sandhya</blockquote>
      </div>
    
  </div>
  )
}

export default AboutCompo

import React from 'react'
import './about.css';
import about from './images/about.jpg';



const About = () => {
  return (
    <div className='about text-dark'>
      <section>
        <img src={about} alt="aboutbar" className='img-fluid'/>
        <div className="back">
        </div>
        <div className="about-content">
            <h1>About Bar 777</h1>
            <p>The Bar 777 is a whimsical cocktail bar and full-service restaurant. Its “You pick em, we pour ‘em” motto drives a non-judgmental drinks menu in a breezy space, adorned with cartoon palm trees, that evokes bygone California and Florida resorts.  Anchored by an award-winning burger, the elevated diner-style food offering also features sandwiches, chopped salads, and an array of sides- simple, yet highly satisfying, and classically American. A rock and soul soundtrack completes the mood.</p>
        </div>
      </section>
    </div>
  )
}

export default About
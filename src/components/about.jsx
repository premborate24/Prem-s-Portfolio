import React from "react";
import me from '../assets/images/me.jpg';
import './about.css';

function About() {
  return (
    <>
    <div className='parent'>
                <h2 className='headi'>ABOUT ME</h2>
                <h4 className="subt">Know More About Me</h4>
            </div> 
      <div className='about'>
        <div className="me">
          <img className="photo" src={me} alt="Prem's photo" />
        </div>
        <div className="info">
          <h2 className="name">Prem Borate</h2>
          <p className="bio">
            Hello! I’m <span className="highlight">Prem</span>, a passionate front-end developer and UI designer studying at JSPM Imperial College, Pune.  I have experience in React, Tailwind CSS, and Figma, allowing me to build responsive and user-friendly interfaces. With experience from several hackathons, I'm always eager to learn and improve my skills. Outside of coding, I enjoy playing sports as a state-level gymnastics player, riding my bike, travelling, and exploring photography. Let’s collaborate and bring ideas to life!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

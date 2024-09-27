import React from "react";
import './card.css';
import reacts from '../assets/images/react.png';
import jslogo from '../assets/images/javascript.png';
import tailwind from '../assets/images/tailwind.png'
import Figma from '../assets/images/figma.png'
import Bootstrap from '../assets/images/bootstrap.png'
import Python from '../assets/images/python.png'


function Stack (){
    return(
        <>
             <div className='parent'>
                <h2 className='headi'>TECH STACK</h2>
                <h4 className="subt">Front-End & UI/UX</h4>
            </div> 
            <div className="stack">
        <div className="card">
           <div> <img className="log" src={reacts} alt="logo" /></div>
           <h5 className="skill-name">React.js</h5>
           <p className="detail">React is a JavaScript library for building UI components efficiently using JSX and virtual DOM</p>
        </div>
        <div className="card">
           <div> <img className="log" src={jslogo} alt="logo" /></div>
           <h5 className="skill-name">Javascript</h5>
           <p className="detail">JavaScript is a programming language used to add interactive features and control web content dynamically.</p>
        </div>
        <div className="card">
           <div> <img className="log" src={tailwind} alt="logo" /></div>
           <h5 className="skill-name">Tailwind CSS</h5>
           <p className="detail">Utility-first CSS framework for rapid UI development. It enables custom designs without leaving your HTML.</p>
        </div>
        <div className="card">
           <div> <img className="log" src={Figma} alt="logo" /></div>
           <h5 className="skill-name">Figma</h5>
           <p className="detail">Collaborative interface design tool for creating user interfaces and prototypes. It allows real-time collaboration and easy sharing of designs.</p>
        </div>
        <div className="card">
           <div> <img className="log" src={Bootstrap} alt="logo" /></div>
           <h5 className="skill-name">Bootstrap</h5>
           <p className="detail">Front-end framework for rapid, responsive web development with pre-designed components.</p>
        </div>
        <div className="card">
           <div> <img className="log" src={Python} alt="logo" /></div>
           <h5 className="skill-name">Python</h5>
           <p className="detail">Versatile Object Oriented programming language known for its readability and wide range of applications.</p>
        </div>
        </div>
       
        </>
    )
}
export default Stack;
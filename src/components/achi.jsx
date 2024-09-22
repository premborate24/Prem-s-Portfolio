import React from 'react';
import './Achi.css';
import image from '../assets/images/team.jpg'; // Update with correct image path

function Achi() {
  return (
    <div className="achi-container">
      <div className="achi-text">
        <h2>
          SIH-2023 <span className="highlight">/ Smart India Hackathon-2023 Winner 🏆</span>
        </h2>
        <p className="subtext">
          <span className="badge">A National Level Hackathon organized by Indian Government</span>
        </p>
        <p className="description">
          As a front-end developer and UI designer for the <b>Water Footprint Calculator</b> project in SIH 2023, responsibilities included designing an intuitive and responsive interface that facilitated seamless user interaction. Utilizing <b>React</b>, the project featured smooth navigation and interactive elements aimed at enhancing user engagement. The design played a crucial role in making the tool accessible and informative, helping users better understand and manage their water consumption.
        </p>
      </div>
      <div className="achi-image">
        <img src={image} alt="Team holding the prize" />
      </div>
    </div>
  );
}

export default Achi;

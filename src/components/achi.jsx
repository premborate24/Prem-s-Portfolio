import './Achi.css';
import image from '../assets/images/team.jpg'; // Update with correct image path
import image1 from '../assets/images/noida.jpg'

function Achi() {
  return (
    <>
      <div>
        <div className='parent'>
        <h2 className='headi'>ACHIEVEMENTS</h2>
        <h4 className="subt">AWARDS & CERTIFICATES</h4>
        </div>
        <div className="achi-container">
          <div className="achi-text">
            <h2>
              SIH-2023 <span className="highlight">/ Smart India Hackathon-2023 Winner 🏆</span>
            </h2>
            <p className="subtext">
              <span>(A National Level Hackathon organized by Indian Government)</span>
            </p>
            <p className="description">
              As a front-end developer and UI designer for the <b>Water Footprint Calculator</b> project in SIH 2023, responsibilities included designing an intuitive and responsive interface that facilitated seamless user interaction. Utilizing <b>React</b>, the project featured smooth navigation and interactive elements aimed at enhancing user engagement. The design played a crucial role in making the tool accessible and informative, helping users better understand and manage their water consumption.
            </p>
          </div>
          <div className="achi-image">
            <img src={image} alt="Team holding the prize" />
          </div>
        </div>
        <div className="achi-container">
          <div className="achi-text1">
            <h2>
            IDE Bootcamp, Noida<span className="highlight"> / Best Presentation Award 🏆</span>
            </h2>
            <p className="subtext">
              <span>(An entrepreneur Bootcamp organized By Indian Ministry of Education)</span>
            </p>
            <p className="description">
              Received the Best Idea and Pitch Presentation Award at the IDE Bootcamp in Noida, an event organized by the Indian Government and the Ministry of Education. This recognition was awarded for presenting a groundbreaking idea and delivering a compelling pitch that combined innovative thinking with strategic execution. The accolade highlights a strong ability to articulate and showcase creative solutions, demonstrating exceptional problem-solving skills and effective communication in a highly competitive environment.
            </p>
          </div>
          <div className="achi-image">
            <img src={image1} alt="Team holding the prize" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Achi;

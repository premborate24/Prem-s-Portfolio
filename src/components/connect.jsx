import "./connect.css";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import x from "../assets/images/x.png";
import gmail from "../assets/images/gmail.png";
import phone from "../assets/images/phone.png";
function Connect() {
  return (
    <>
      <div className="parent">
        <h2 className="headi">CONNECT WITH ME</h2>
        <h4 className="subt">Social Media Links</h4>
      </div>
      <div className="links">
        <a
          href="https://github.com/premborate24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/prem-borate-688241248/?trk=opento_sprofile_details"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/mr.premz_24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
        <a
          href="https://x.com/PremBorate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} alt="X (Twitter)" />
        </a>
        
        </div>
        <div className="contact-container">
          <a href="mailto:premborate24@gmail.com" className="contact-link">
            <img src={gmail} alt="Email" />
            <span>premborate24@gmail.com</span>
          </a>
          <a href="tel:+917385659206" className="contact-link">
            <img src={phone} alt="Phone" />
            <span>+91 7385659206</span>
          </a>
       
          <div className="parent">
        <h2 className="headi">Thank  you  for  visiting!</h2>
        <h4 className="subt">have a nice day</h4>
      </div>
      </div>
    </>
  );
}
export default Connect;

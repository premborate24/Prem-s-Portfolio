// src/components/ProjectCarousel.jsx
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import evently from '../assets/images/Evently.jpg';
import todolist from '../assets/images/To-do-list.jpg';
import portfolio from '../assets/images/portfolio.jpg';
import jalank from '../assets/images/Jalank.jpg';
import eventlyUi from '../assets/images/ui/Evently.jpg';
import jalankUi from '../assets/images/ui/JalAnk.jpg';
import OnlineNegotiationEngine from '../assets/images/ui/Online Negotiation Engine.jpg';
import jalank2ui from '../assets/images/ui/JalAnk 2.0.jpg';
import portfolioUi from '../assets/images/ui/Portfolio.jpg';
import ToDoListUi from '../assets/images/ui/To Do List.jpg';
import './project.css'; // Import your custom CSS

const ProjectCarousel = () => {
   
  const projects = [
    {
      id: 1,
      name: 'Evently',
      image: evently,
      link: 'https://github.com/premborate24/Evently.git'
    },
    {
      id: 2,
      name: 'Jalank',
      image: jalank,
      link: 'https://github.com/premborate24/JalAnk-v2.git'
    },
    {
      id: 3,
      name: 'Portfolio',
      image: portfolio,
      link: 'https://github.com/premborate24/Prem-s-Portfolio.git'
    },
    {
      id: 4,
      name: 'To-Do List',
      image: todolist,
      link: 'https://github.com/premborate24/Tick-Mark.git'
    },
  ];

  const uiDesigns = [
    {
      id: 1,
      name: 'Evently',
      image: eventlyUi,
      link: 'https://www.figma.com/design/UcmU9e7hiGmnQOsVQMChNi/login?node-id=0-1&node-type=canvas&t=uxDFC4CY32hAdlQP-0'
    },
    {
      id: 2,
      name: 'Jalank',
      image: jalankUi,
      link: 'https://www.figma.com/design/lIpnq5jzuF2f4DutMu1cj3/JalAnk?node-id=0-1&t=DubOO8TkvwH2tklq-1'
    },
    {
      id: 3,
      name: 'Portfolio',
      image: portfolioUi,
      link: 'https://portfolio-ui.com'
    },
    {
      id: 4,
      name: 'To Do List',
      image: ToDoListUi,
      link: 'https://www.figma.com/design/ulbCU9zmPOxTshM2HUT5IR/To-Do-List?node-id=0-1&t=WK8nIH4EFdzcuYCx-1'
    },
    {
      id: 5,
      name: 'Online Negotiation Engine',
      image: OnlineNegotiationEngine,
      link: 'https://www.figma.com/design/d5Tg3WOUMVb8nzF8IVa00E/Online-Negotiation-Engine?node-id=0-1&t=64cVq4ZozvVKods8-1'
    },
    {
      id: 6,
      name: 'JalAnk 2.0',
      image: jalank2ui,
      link: 'https://www.figma.com/design/epYctPVFgzVUShz7izskd5/JalAnk-2.0?node-id=0-1&t=p0eKxssKTrOHp1QV-1'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show multiple slides at once
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        }
      }
    ]
  };

  return (
    <>
      <div className="parent">
        <h2 className="headi">Projects</h2>
        <h4 className="subt">React projects</h4>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="carousel-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} className="carousel-image" />
                <div className="project-name">{project.name}</div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <div className="parent">
        <h4 className="subt">UI Designs</h4>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {uiDesigns.map((design) => (
            <div key={design.id} className="carousel-item">
              <a href={design.link} target="_blank" rel="noopener noreferrer">
                <img src={design.image} alt={design.name} className="carousel-image" />
                <div className="project-name">{design.name}</div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProjectCarousel;

import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Achi from './components/achi';
import ProjectCarousel from '../src/components/projects';
import Stack from './components/tech-stack';
import About from './components/about';
import Connect from './components/connect'

function App() {
  return (
   < >
   
   <div className='background'>
    <section>  <Navbar/>
   <Profile/>
  </section>
  <section>
   <Achi/>
   </section>
   <section>
   <ProjectCarousel/>
   </section>
  <section>
   <Stack/>
   </section>
  <section>
   <About/>
   </section>
  <section>
   <Connect/>
   </section>
   </div>
   </>
  );
}

export default App;
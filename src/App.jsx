import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Achi from './components/achi';


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
   </div>
   </>
  );
}

export default App;
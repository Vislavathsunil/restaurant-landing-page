import React from 'react';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Dishes from './Components/Dishes';
import About from './Components/About';
import NewAbout from './Components/NewAbout';
import Mission from './Components/Mission';
import Expertise from './Components/Expertise';
import Review from './Components/Review';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className='relative h-full overflow-y-auto antialiased' >
      <Hero />
      <NavBar />
      <Dishes />
      <NewAbout />
      <Mission />
      <Expertise />
      <Review/>
      <ContactUs/>
    </div>
  )
}

export default App
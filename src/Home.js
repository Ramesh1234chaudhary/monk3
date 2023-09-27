import React from 'react';
import Hero from './Components/Hero';
import Services2 from './Components/Services2';
import "./Home.css"
import WhyMonk from './Components/WhyMonk';
import Footer from './Components/Footer';
import Slider from './Components/Slider';

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='services'>
      <Services2/>
      </div>
      <div className='monk'>
        <WhyMonk/>
        </div>
        <div className='slide'>
        <Slider/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    
    </div>
  )
}

export default Home;
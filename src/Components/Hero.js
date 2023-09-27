import React from 'react';
import "./Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='main-hero'>
      <div className='left' style={{backgroundColor:" #090909"}}>
        <div className='left-top'>
         <h4 style={{color:"#a7acb4", fontSize:"20px"}}>it,s Time to Design 
          <span style={{color:"#ff8a0a"}} > Your Businesses</span></h4>
        </div> 
        <div className='left-midddle'>
         <h1 data-text="Creative Web Design" style={{color:"#a7acb4", fontSize:"30px"}}>
          <span><i>Creative Web Design</i> </span> <br/> Agency...</h1>
        </div>
        <div className='left-animation'>
          <div className='line'><span style={{color:"orange"}}>50+</span> HAPPY CLIENTS</div>
          <div className='line'><span style={{color:"orange"}}>100% </span>Customer SATISFACTION</div>
           <div className='line'><span style={{color:"orange"}}>BEST</span> IN REVIEW</div>
        </div>
        <div className='left-bottom1'>
        <div className='arrow'>
  
        </div>
        <div className='arrow-content'>
           <h3 style={{fontWeight:"bold"}}>Powerfull Service for you business.</h3>
        </div>
        </div>
        <div className='left-bottom4'>
      <Link to="/website-designing" className="nav-link">
        <h4>Website Designing</h4>
      </Link>
      <Link to="/web-development" className="nav-link">
        <h4>Web Development</h4>
      </Link>
      <Link to="/digital-marketing" className="nav-link">
        <h4>Digital Marketing</h4>
      </Link>
    </div>

        <div className='left-last-bottom'>
        <button className='button'>Get Started</button>
        </div>
      </div>
      <div className='right'>
       
      </div>

    </div>
  )
}

export default Hero;
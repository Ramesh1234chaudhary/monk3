import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import Model from '../Model';

const data = ["Web Application Development", "E-commerce Website", "Digital Marketing",
    "Web App Development", "Domain && Hoisting Services", "Customized Software Development"]

const Navbar = () => {
    const [showmodel ,setShowmodel]=useState(false)

 

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='./logo.jpg' alt='image3' />
            </div>
            <div className='main-heading'>
                <div className='heading'>
                    <NavLink to="/" className="nav-link"><h4>Home </h4></NavLink>
                    <NavLink to="/About" className="nav-link"><h4>About Us</h4></NavLink>
                    <NavLink to="/services" className="nav-link"><h4>Services</h4></NavLink>
                    <NavLink to="/pricing" className="nav-link"><h4>Pricing</h4></NavLink>
                    <NavLink to="/portfolio" className="nav-link"><h4>Portfolio</h4></NavLink>
                    <NavLink to="/contact" className="nav-link"><h4>Contact Us</h4></NavLink>
                
                        <button className='button' onClick={()=>setShowmodel(true)}>Get a quote  <div className='loading-dots'>
                            <span></span>
                            <span></span>
                            <span></span> 
                        </div></button>
                        
                </div>
                { showmodel && <Model setShowmodel={setShowmodel}/> }
            </div>

          
        </div>
    );
}

export default Navbar;

import React from 'react'
import "./Services2.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Services2 = () => {
    return (
        <div className='services'>
            <h4 style={{fontWeight:"bold"}}><i>Our Services.</i></h4>
            <div className='main-services' style={{ color: 'white' }} >
                <div className='child'>
                    <img src='./web.png' alt='web' />
                    <h4>Digital Marketing</h4>
                    <p>The world is going online and so are brands so as to get their clients.
                        India houses the second highest web user base on the planet... </p>

                <NavLink to="/digital-marketing"><div className='arrow'><FaArrowRightLong /></div></NavLink> 
                </div>
                <div className='child'>
                    <img src='./web.png' alt='dd'/>
                    <h4>Web Development</h4>
                    <p>Web development broadly refers to the tasks associated with creating websites
                        for hosting through intranet or websites...</p>

                        <NavLink to="/web-development">  <div className='arrow'><FaArrowRightLong /></div></NavLink> 
                </div>

                <div className='child'>
                    <img src='./web.png'  alt='website'/>
                    <h4>Website Designing</h4>
                    <p>Website designing plays an important role for your business since it is your website
                        which act as the spokesperson for your... </p>

                        <NavLink to="/website-designing">  <div className='arrow'><FaArrowRightLong /></div></NavLink> 
                </div>
                <div className='child'>
                    <img src='./web.png' alt='imges13' />
                    <h4>Web Hosting</h4>
                    <p>The web hosting simply means hiring space on server which allows an individual or a
                        company to make their website visible on...</p>

                        <NavLink to="/WebHosting">  <div className='arrow'><FaArrowRightLong /></div></NavLink> 
                </div>

                <div className='child'>
                    <img src='./web.png' alt='images14' />
                    <h4>Domains Purchase</h4>
                    <p>We provide all types of domains for purchase as per client requirement and
                        integrate the same along with hosting...
                    </p>
                    <NavLink to="/Domain-Registration"> <div className='arrow'><FaArrowRightLong /></div></NavLink> 

                </div>

                <div className='child'>
                    <img src='./web.png'  alt='images15'/>
                    <h4>Graphic Design </h4>
                    <p>Weblooks IT Services offers complete graphic design services to promote your
                        company or brand. Believing in the adage...
                    </p>
                    <NavLink to="/Grapkic-Design"> <div className='arrow'><FaArrowRightLong /></div></NavLink> 

                </div>
                <div className='child'>
                    <img src='./web.png' alt='webbb'/>
                    <h4>Other Services</h4>
                    <p>We also provide additional services to our customers. Services like Website
                        Maintenance, google apps e-mai,...
                    </p>
                    <NavLink to="/OtherServices"> <div className='arrow'><FaArrowRightLong /></div></NavLink> 

                </div>
                <div className='child'>
                    <img src='./web.png' alt='webiii'/>
                    <h4>App Development</h4>
                    <p>We are the leading software development company that can provide cost effective
                        solution for the...
                    </p>
                    <NavLink to="/App-Devlopment">  <div className='arrow'><FaArrowRightLong /></div></NavLink> 

                </div>


            </div>

        </div>
    )
}

export default Services2;
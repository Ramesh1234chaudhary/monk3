import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footer-top'>
                <div className='talk-to-our-expert'>
                    <NavLink to="/Talk-To-Expert" >  <button style={{ color: "white", }} className='move-up-button'>
                        <img src='./call icon.png' alt='imgttt' style={{ width: "20px", paddingRight: "10px", paddingTop: "10px" }} />
                        Talk To Our Expert   <div className='loading-dots' style={{ marginTop: "-10px", marginRight: "20px" }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div></button> </NavLink>
                </div>
                <div className='footer-content'>
                    <div className='content1'>
                        <h6 style={{ color: "white" }}>usefull links</h6>


                        <NavLink to="/Domain-Registration" className="nav"><p>Domain Registration</p></NavLink>
                        <NavLink to="/Hosting-Registration" className="nav"><p>Hosting Registration</p></NavLink>
                        <NavLink to="Static-Website" className="nav"><p>Static Website</p></NavLink>
                        <NavLink to="Packages" className="nav"><p>Packages</p></NavLink>
                        <NavLink to="Carrer" className="nav"><p>Carrer</p></NavLink>


                    </div>
                    <div className='content2'>
                        
                      <NavLink to="Review" className="nav"><p>Write A Review</p></NavLink>
                      <NavLink to="Term-&&-Conditions" className="nav"><p>Term && Conditions</p></NavLink>
                      <NavLink to="Privacy-Policy" className="nav"><p>Privacy Policy</p></NavLink>
                      <NavLink to="Affiliate-Program" className="nav"><p>Affiliate Program</p></NavLink>
                      <NavLink to="Faq" className="nav"><p>FAQ</p></NavLink>

                    </div>

                    <div className='content3'>
                        <h6 style={{ color: "white" }}>Web services</h6>
                       <NavLink to="website-designing" className="nav"><p> Website Designing</p></NavLink>
                       <NavLink to="WebHosting" className="nav"><p>Web Hosting</p></NavLink>
                       <NavLink to="/Grapkic-Design" className="nav"><p> Graphic Design</p></NavLink>
                       <NavLink to="web-development" className="nav"><p> Web Development</p></NavLink>
                       <NavLink to="digital-marketing" className="nav"><p> Digital Marketing</p></NavLink>
                       <NavLink to="App-Devlopment" className="nav"><p> App Development</p></NavLink>
                       <NavLink to="OtherServices" className="nav"><p> Other Services </p></NavLink>

                    </div>

                    <div className='content4'>
                        <h6 style={{ color: "white" }}>connect with us</h6>
                        <p><span style={{ color: "white" }}> Visit Us </span></p>
                        <p> Office: B-002 Maooli Darshan,<br />
                            Dahisar (W) Mumbai,<br />
                            Maharashtra 40068.<br /> INDIA.
                        </p>
                        <p> <span style={{ color: "white" }}>Call Us </span> <br />
                            +91 836-986-64496 </p>

                        <p><span style={{ color: "white" }}> E-Mail Us</span> <br />
                            info@monkconsultantancy.com</p>


                    </div>

                    <div className='content5'>
                        <h6 style={{ color: "white" }}>Follow us on</h6>
                        <div className='social-icons'>
                            <a href='https://www.instagram.com/monk_consultancy/?igshid=MzRlODBiNWFlZA=='>
                                <FaInstagram className="icons" />
                            </a>

                            <a href='https://www.linkedin.com/company/monk-consultancy/'>
                                <FaLinkedin className="icons" />
                            </a>

                            <a href='https://www.facebook.com/profile.php?id=100089661706355'>
                                <FaFacebook className="icons" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-left'>
                    <img src='./leaf.png' className='leaf'  alt='leaf'/>
                    <img src='./women.png' className='women-image' alt='women'/>

                </div>
                <div className='footer-middle'>
                    <img src='./people.png'  alt='people'/>


                </div>
                <div className='footer-right'>
                    <img src='./man.png' className='man-image' alt='man' />
                    <img src='./leaf2.png' className='leaf2'  alt='leaf2'/>


                </div>
            </div>
        </div>
    )
}

export default Footer;
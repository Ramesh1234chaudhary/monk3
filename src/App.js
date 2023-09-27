import React from 'react';
import {  Routes, Route } from 'react-router-dom'; 
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';
import Home from './Home';
import WebsiteDesigning from './Components/WebsiteDesigning';
import WebDevlopment from './Components/WebDevlopment';
import DigitalMarketing from './Components/DigitalMarketing';
import Talk from './Components/Talk';
import Domain from './Components/Domain';
import Hosting from './Components/Hosting';
import StaticWebsite from './Components/StaticWebsite';
import Packages from './Components/Packages';
import Carrer from './Components/Carrer';
import Review from './Components/Review';
import Affiliate from './Components/Affiliate';
import Privacy from './Components/Privacy';
import Asked from './Components/Asked';
import TermAndConditions from './Components/TermAndConditions';
import WebHosting from './Components/WebHosting';
import OtherServices from './Components/OtherServices';
import GrapkicDesign from './Components/GrapkicDesign';
import AppDevlopment from './Components/AppDevlopment';
const App = () => {
  
  return (
    <div className='App'>       
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/service' element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-designing" element={<WebsiteDesigning />} />
          <Route path="/web-development" element={<WebDevlopment />} />
          <Route path="/digital-marketing" element={< DigitalMarketing/>} />
          <Route path="/Talk-To-Expert" element={<Talk/>} />
          <Route path="/Domain-Registration" element={<Domain/>} />
          <Route path="/Hosting-Registration" element={<Hosting/>} />
          <Route path="/Static-Website" element={<StaticWebsite/>} />
          <Route path="/Packages" element={<Packages/>} />
          <Route path="/Carrer" element={<Carrer/>} />
          <Route path="/Review" element={<Review/>} />
          <Route path="/Term-&&-Conditions" element={<TermAndConditions/>} />
          <Route path="/Affiliate-Program" element={<Affiliate/>} />
          <Route path="/Privacy-Policy" element={<Privacy/>} />
          <Route path="/Faq" element={<Asked/>} />
          <Route path="/App-Devlopment" element={<AppDevlopment/>} />
          <Route path="/Grapkic-Design" element={<GrapkicDesign/>} />
          <Route path="/WebHosting" element={<WebHosting />} />
          <Route path="/OtherServices" element={<OtherServices/>} />
        
          

          
        </Routes>
      
    </div>
  );
}

export default App;

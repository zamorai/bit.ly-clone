import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './navigation/Dropdown';
import { Bitly, Solutions, Features } from './navigation/DropdownItems';



export default function Header() {
  const[click, setClick] = useState(false);
  const[bitly, setBitly] = useState(false)
  const[solutions, setSolutions] = useState(false)
  const[features, setFeatures] = useState(false)
  const[resources, setResources] = useState(false)


  return (   
    <div className="header-container">
      <div>
        <Link to="/">
          <img className="header-logo" src="./images/bitly.png" alt="Main logo"/>
        </Link>
      </div> 
      <div className="header-nav"> 
        <div className='trigger' onMouseEnter={() => window.innerWidth < 960 ? setBitly(false) : setBitly(true)} onMouseLeave={() => setBitly(false)}> 
          <span className="header-nav-item">Why Bitly?</span>
          {bitly && <Dropdown item={Bitly} />}
        </div> 
        <div className='trigger' onMouseEnter={() => window.innerWidth < 960 ? setSolutions(false) : setSolutions(true)} onMouseLeave={() => setSolutions(false)}>
          <span className="header-nav-item">Solutions</span>
          {solutions && <Dropdown item={Solutions} />} 
        </div>
        <div className='trigger' onMouseEnter={() => window.innerWidth < 960 ? setFeatures(false) : setFeatures(true)} onMouseLeave={() => setFeatures(false)}>
          <span className="header-nav-item">Features</span>
          {features && <Dropdown item={Features} />}  
        </div> 
        <Link to="/pricing" className="link" ><span className="header-nav-item">Pricing</span></Link>
        <Link to="/resources" className="link" ><span className="header-nav-item">Resources</span></Link>
      </div>
      <div className="header-login">
        <Link to="/login" className="link" ><span>Log in</span></Link>
        <Link to ="/signin" className="link" ><span className="blue">Sign up</span></Link>
        <Link to="/quote" className="link"><span className="primary-btn">Get a Quote</span></Link>
      </div>
    </div>
  )
}

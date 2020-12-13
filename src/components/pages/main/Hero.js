import React from 'react';
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-subcontainer">
        <div className="hero-left-text">
          <p className="hero-title">Short links, big results</p>
          <p className="hero-sub">A URL shortener built with powerful toold to help you grow and protect your brand.</p>
          <div className="hero-action">
            <Link to="/quote" className="link"><span className="hero-button">Get Started for Free</span></Link>
            <Link to="/quote" className="link hero-action_sub"><span className="blue">Get a Quote</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
  
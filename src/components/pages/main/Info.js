import React from 'react'
import { Link } from 'react-router-dom'

export default function Info() {
  return (
    <div className="info-container">
      <div className="info-title">
        <h3 className="info-title_main">The link shortener that has your brand's back</h3>
        <p className="info-title_sub">Your brand wasn't build to be hidden. Help it stand out with branded links that drive 34% more clicks.</p>
      </div>
      <div className="info-card-container">
        <div className="info-card">
          <img className="info-card-image" src="./images/chat.png" alt="chat image" />
          <h4>Inspire trust</h4>
          <p>With more clicks comes increased brand recognition and consumer trust in your communications—which in turn inspires even more engagement with your links. (It’s a wonderful cycle.)</p>
        </div>
        <div className="info-card">
          <img className="info-card-image" src="./images/results.png" alt="results image" />
          <h4>Boost results</h4>
          <p>On top of better deliverability and click-through, rich link-level data gives you crucial insight into your link engagement so your team can make smarter decisions around its content and communications.</p>
        </div>
        <div className="info-card">
          <img className="info-card-image" src="./images/control.png" alt="control image" />
          <h4>Gain control</h4>
          <p>Take credit for your content and learn more about how it’s consumed by enabling auto-branding—a feature that ensures your brand remains in any link someone shortens pointing to your website.</p>
        </div>
      </div>
      <div className="info-buttons">
        <Link className="link" to="/"><button className="info-button_main">Get Started</button></Link>
        <Link className="link" to="/"><button className="blue info-button_sub">Learn More</button></Link> 
      </div>
    </div>
  )
}

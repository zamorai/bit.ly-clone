import React from 'react'
import { Link } from 'react-router-dom'

export default function Action() {
  return (
    <div className="action-container">
      <h3>More than a link shortener</h3>
      <Link className="link" to="/" ><span className="action-container-btn">Get started for free</span></Link>
    </div>
  )
}

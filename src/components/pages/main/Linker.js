import React, { useState } from 'react'

export default function Linker() {
  const[text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setText("") 
  }
console.log(text); 
  return (
    <div className="linker-container">
      <div className="linker-input">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Shorten your link" className="linker-text" onChange={(e) => setText(e.target.value)} value={text} />
          <button type="submit" className="linker-button">Shorten</button>
        </form>
      </div>
      <div className="linker-terms">
        <span>By clicking SHORTEN, you are agreeing to Bitly's <span style={{textDecoration: "underline"}}>Terms of Service</span> and <span style={{textDecoration: "underline"}}>Privacy Policy</span></span>
      </div>
    </div>
  ) 
}
  
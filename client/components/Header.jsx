import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-text"> Sweet As Smoothies </h1>
      <h1 className="tri-apple"> <span className="fa fa-apple-alt apple1"> </span> <span className="fas fa-apple-alt apple2"> </span> <span className="fas fa-apple-alt apple3"> </span>
      </h1>
      <p className="welcome">In life much like smoothies you get out what you put in.</p>
    </header>
  )
}
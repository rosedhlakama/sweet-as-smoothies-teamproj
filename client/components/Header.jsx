import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Link to={'/'}>
      <header className='header'>
        <h1 className='header-text'> Sweet As Smoothies </h1>
      <h1 className='tri-apple'>
        {' '}
        <span className='fa fa-apple-alt apple1'> </span>{' '}
        <span className='fas fa-apple-alt apple2'> </span>{' '}
        <span className='fas fa-apple-alt apple3'> </span>
      </h1>
      <p className='welcome'>
        In life much like smoothies you get out what you put in.
      </p>
      </header>
    </Link >
  );
}

export default connect()(Header)
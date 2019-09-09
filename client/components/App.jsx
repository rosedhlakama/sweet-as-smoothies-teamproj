import React, { Component } from 'react'
import Header from './Header'
import Listing from './Listing'
import Cart from './Cart'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Listing />
      </div>
    )
  }
}

export default App

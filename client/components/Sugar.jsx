import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'

class Sugar extends Component {
  

  render() {
    return (
      <div className='sugar'>
        <h2>Smoothie Sugar</h2>
        <p>Sugar content per 100mls of smoothie</p>
        <p>Sugar: </p>
      </div>
    )
  }
}

export default connect()(Sugar)
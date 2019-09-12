import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'

class Sugar extends Component {
  

  render() {
    return (
      <div className='sugar'>
        <p>output goes here</p>
      </div>
    )
  }
}

export default connect()(Sugar)
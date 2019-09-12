import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'

class Sugar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: props.cart
    }
  }

  render() {
    return (
      <div className='sugar'>
        output goes here
      </div>
    )
  }
}
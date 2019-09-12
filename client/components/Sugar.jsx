import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'

import { navigate } from '../actions'

class Sugar extends Component {

  navigateToListing = () => {
    this.props.dispatch(navigate('listing'))
  }

  render() {
    return (
      <div className='sugar'>
        <h2>Smoothie Sugar</h2>
        <p>Sugar content per 100mls of smoothie</p>
        <p>Sugar: </p>

        <p className="actions">
          <button onClick={this.navigateToListing}>Home</button>
        </p>.
      </div>
    )
  }
}

export default connect()(Sugar)
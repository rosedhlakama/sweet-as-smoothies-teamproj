import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'
import { navigate } from '../actions'

class Cart extends Component {
  navigateToListing = () => {
    this.props.dispatch(navigate('listing'))
  }

  render() {
    return (
      <div className='cart'>
        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

        <CartList cart={this.props.cart} />

        <p className="actions">
          <button onClick={this.navigateToListing}>Continue shopping</button>
          <button>Update</button>
          <button className="button-primary">Checkout</button>
        </p>
      </div>
    )
  }
}

function mapStateToProps({ cart }) {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Cart)
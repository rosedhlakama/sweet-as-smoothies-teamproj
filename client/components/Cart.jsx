import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'
import { navigate, updateQuantities } from '../actions'

class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: props.cart
    }
  }

  navigateToListing = () => {
    this.props.dispatch(navigate('listing'))
  }

  updateQuantity = (id, quantity) => {
    console.log('hey')
    this.state.cart.map(item => item.id === id ? item.quantity = quantity : item)
  }

  render() {
    return (
      <div className='cart'>
        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

        <CartList cart={this.props.cart} updateQuantity={updateQuantities} />

        <p className="actions">
          <button onClick={this.navigateToListing}>Continue shopping</button>
          <button onClick={() => this.props.dispatch(updateQuantities(this.this.state.cart))}>Update</button>
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
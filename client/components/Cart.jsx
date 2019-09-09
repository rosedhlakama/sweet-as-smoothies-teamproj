import React, { Component } from 'react'
import CartList from './CartList'

export default class Cart extends Component {
  state = {
    cart: []
  }

  render() {
    return (
      <div className='cart'>
        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

        <CartList cart={this.state.cart} />

        <p className="actions">
          <a href="/designs/listing.html">Continue shopping</a>
          <button>Update</button>
          <button className="button-primary">Checkout</button>
        </p>
      </div>
    )
  }
}
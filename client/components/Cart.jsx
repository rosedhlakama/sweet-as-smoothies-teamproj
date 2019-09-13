import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartList from './CartList'
import { updateQuantities } from '../actions'
class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: props.cart
    }
  }

  updateQuantity = (id, quantity, sugarContent) => {
    this.state.cart.map(item => item.id === id ? (item.quantity = quantity, item.sugarContent = sugarContent) : item)
  }

  render() {
    return (
      <div className='cart'>
        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching smoothie.</p>

        <CartList cart={this.props.cart} updateQuantity={updateQuantities} />

        <p className="actions">
          <Link to={'/'}><button>Add more fruit</button></Link>
          <button onClick={() => this.props.dispatch(updateQuantities(this.this.state.cart))}>Update</button>
          <Link to={'/checkout'}><button className="button-primary">Blend it up</button></Link>
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
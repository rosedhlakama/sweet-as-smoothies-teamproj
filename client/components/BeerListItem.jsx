import React from 'react'
import { connect } from 'react-redux'

import { navigate, addToCart } from '../actions'

function BeerListItem(props) {
  const { fruit } = props

  const handleAdd = (id, name) => {
    navigateToCart()
    props.dispatch(addToCart(id, name))
  }

  function navigateToCart() {
    props.dispatch(navigate('cart'))
  }

  return (
    <div className="beer">
      <p className="name">{fruit.name}</p>
      <p className="description">Genus: {fruit.genus}</p>
      <p>
        <span className="country">Family: {fruit.family}</span>
        <span className="abv">Sugar content: {fruit.nutritions.sugar}</span>
        <button className="cart-link" onClick={() => handleAdd(fruit.id, fruit.name)}>Add to cart</button>
      </p>
    </div >
  )
}

export default connect()(BeerListItem)
import React from 'react'
import { connect } from 'react-redux'

import { navigate, addToCart } from '../actions'

function BeerListItem(props) {
  const { name, genus, family, nutritions, id } = props.fruit

  const handleAdd = (id, name, sugarContent) => {
    navigateToCart()
    props.dispatch(addToCart(id, name, sugarContent))
  }

  function navigateToCart() {
    props.dispatch(navigate('cart'))
  }

  return (
    <div className="beer">
      <p className="name">{name}</p>
      <p className="description">Genus: {genus}</p>
      <p>
        <span className="country">Family: {family}</span>
        <span className="abv">Sugar content: {nutritions.sugar}</span>
        <button className="cart-link" onClick={() => handleAdd(id, name, nutritions.sugar)}>Add to cart</button>
      </p>
    </div >
  )
}

export default connect()(BeerListItem)
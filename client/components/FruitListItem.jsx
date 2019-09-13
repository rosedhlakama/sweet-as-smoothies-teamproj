import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { navigate, addToCart } from '../actions'

function FruitListItem(props) {
  const { name, genus, family, nutritions, id } = props.fruit

  const handleAdd = (id, name, sugarContent) => {
    // navigateToCart()
    props.dispatch(addToCart(id, name, sugarContent))
  }

  function navigateToCart() {
    props.dispatch(navigate('cart'))
  }

  return (
    <div className="fruit">
      <p className="name">{name}</p>
      <p className="genus">Genus: {genus}</p>
      <p>
        <span className="family">Family: {family}</span>
        <span className="sugar">Sugar content: {nutritions.sugar}</span>
        <Link to={'/cart'}><button className="cart-link" onClick={() => handleAdd(id, name, nutritions.sugar)}>Add to cart</button></Link>

        {/* <button className="cart-link" onClick={() => handleAdd(id, name,nutritions.sugar)}>Add to cart</button> */}
      </p>
    </div >
  )
}

export default connect()(FruitListItem)
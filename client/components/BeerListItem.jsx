import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

function BeerListItem(props) {

  const navigateToCart = () => {
    props.dispatch(navigate('cart'))
  }

  const { beer } = props
  return (
    <div className="beer">
      <p className="name">{beer.name}</p>
      <p className="description">A {beer.style} from {beer.brewery}</p>
      <p>
        <span className="country">{beer.country}</span>
        <span className="abv">{beer.abv} abv</span>
        <button className="cart-link" onClick={navigateToCart}>Add to cart</button>
      </p>
    </div >
  )
}

export default connect()(BeerListItem)
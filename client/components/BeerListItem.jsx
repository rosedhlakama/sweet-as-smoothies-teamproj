import React from 'react'

export default function BeerListItem({ beer }) {
  return (
    <div className="beer">
      <p className="name">{beer.name}</p>
      <p className="description">A {beer.style} from {beer.brewery}</p>
      <p>
        <span className="country">{beer.country}</span>
        <span className="abv">{beer.abv} abv</span>
        <a href="/designs/cart.html" className="cart-link">Add to cart</a>
      </p>
    </div >
  )
}
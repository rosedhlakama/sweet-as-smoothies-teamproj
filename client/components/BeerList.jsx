import React, { Fragment } from 'react'

export default function BeerList(props) {
  const { beers } = props
  return (
    <Fragment>
      {beers.map(beer => {
        return (
          <div className="beer" key={beer.id}>
            <p className="name">{beer.name}</p>
            <p className="description">A {beer.style} from {beer.brewery}y</p>
            <p>
              <span className="country">{beer.country}</span>
              <span className="abv">{beer.abv}</span>
              <a href="/designs/cart.html" className="cart-link">Add to cart</a>
            </p>
          </div >
        )
      })}

    </Fragment>
  )
}
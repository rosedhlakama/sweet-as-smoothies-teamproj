import React from 'react'
import BeerListItem from './BeerListItem'

export default function BeerList(props) {
  const { beers } = props
  return (
    <div>
      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

      <div>
        {beers.map(beer => <BeerListItem beer={beer} key={beer.id} />)}
      </div>
    </div>
  )
}
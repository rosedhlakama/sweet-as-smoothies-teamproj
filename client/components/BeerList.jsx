import React from 'react'
import BeerListItem from './BeerListItem'

export default function BeerList(props) {
  const { fruits } = props

  return (
    <div>
      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

      <div>
        {fruits.map(fruit => <BeerListItem fruit={fruit} key={fruit.id} />)}
      </div>
    </div>
  )
}
import React from 'react'
import FruitListItem from './FruitListItem'

export default function FruitList(props) {
  const { fruits } = props

  return (
    <div>
      <div>
        {fruits.map(fruit => <FruitListItem fruit={fruit} key={fruit.id} />)}
      </div>
    </div>
  )
}
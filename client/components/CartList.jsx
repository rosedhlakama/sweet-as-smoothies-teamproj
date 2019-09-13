import React from 'react'
import CartListItem from './CartListItem'

export default function CartList(props) {
  const { cart } = props
  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(item => <CartListItem key={item.id} fruit={item} updateQuantity={props.updateQuantity} />)}
      </tbody>
    </table>
  )
}
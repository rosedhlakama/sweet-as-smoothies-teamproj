import React from 'react'
import CartListItem from './CartListItem'

export default function CartList({ cart }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Beer</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(item => <CartListItem key={item.id} beer={item} />)}
      </tbody>
    </table>
  )
}
import React from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../actions'

function CartListItem(props) {
  const { beer } = props

  const handleRemove = (id) => {
    props.dispatch(removeFromCart(id))
  }

  return (
    <tr>
      <td>{beer.name}</td>
      <td>
        <input className="update-input" value={beer.quantity} onChange={(e) => props.updateQuantity(beer.id, e.target.value)} />
      </td>
      <td>
        <button onClick={() => handleRemove(beer.id)}><span className="fa fa-trash fa-2x"></span></button>
      </td>
    </tr>
  )
}

export default connect()(CartListItem)

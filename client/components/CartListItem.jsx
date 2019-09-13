import React from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../actions'

function CartListItem(props) {
  const { name, quantity, id } = props.fruit

  const handleRemove = (id) => {
    props.dispatch(removeFromCart(id))
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <input className="update-input" value={quantity} onChange={(e) => props.updateQuantity(id, parseInt(e.target.value))} />
      </td>
      <td>
        <button className="trash" onClick={() => handleRemove(id)}><span className="fa fa-trash fa-2x"></span></button>
      </td>
    </tr>
  )
}

export default connect()(CartListItem)

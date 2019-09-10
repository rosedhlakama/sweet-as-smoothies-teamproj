import React from 'react'

export default function CartListItem({ beer }) {
  return (
    <tr>
      <td>{beer.name}</td>
      <td><input className="update-input" value={beer.quantity} /></td>
      <td><button><span className="fa fa-trash fa-2x"></span></button></td>
    </tr>
  )
}
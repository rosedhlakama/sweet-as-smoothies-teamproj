import React from 'react'

export default function CartListItem({ beer }) {
  return (
    <tr>
      <td>{beer.name}</td>
      <td><input class="update-input" value="3" /></td>
      <td><button><span class="fa fa-trash fa-2x"></span></button></td>
    </tr>
  )
}
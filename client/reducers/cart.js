
export default function cartReducer(oldState = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...oldState, { id: action.id, name: action.name, quantity: 1 }]
      break

    default:
      return oldState
  }
}
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITIES } from '../actions'

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(item => item.id === action.id)

      if (index === -1) {
        const { id, name, sugarContent } = action
        return [...state, { id, name, sugarContent, quantity: 1 }]
      } else {
        return state.map((item, i) => index === i ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

    case REMOVE_FROM_CART:
      return state.filter(item => item.id != action.id)

    case UPDATE_QUANTITIES:
      return action.cart

    default:
      return state
  }
}
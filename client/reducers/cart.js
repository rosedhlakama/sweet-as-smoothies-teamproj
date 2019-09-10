export default function cartReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const index = state.findIndex(item => item.id === action.id)

      if (index === -1) {
        const { id, name } = action
        return [...state, { id, name, quantity: 1 }]
      } else {
        return state.map((item, i) => index === i ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      // if (state.indexOf(id) !== -1) {
      //   return [...state, { id, name, quantity: 1 }]
      // }
      // return state.map(item => console.log(item.id))
      //  else {
      //   return [...state, { id: action.id, name: action.name, quantity: 1 }]
      // }
      break

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id != action.id)
      break

    default:
      return state
  }
}
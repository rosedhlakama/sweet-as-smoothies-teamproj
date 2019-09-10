export const navigate = (navigation) => {
  return {
    type: 'NAVIGATE',
    navigation
  }
}

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name
  }
}

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export const updateQuantities = (cart) => {
  return {
    type: 'UPDATE_QUANTITIES',
    cart
  }
}
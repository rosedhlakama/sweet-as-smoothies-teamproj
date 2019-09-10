export const navigate = navigation => {
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
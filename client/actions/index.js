import request from 'superagent'

export const navigate = (navigation) => {
  return {
    type: 'NAVIGATE',
    navigation
  }
}

export const addToCart = (id, name, sugarContent) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name,
    sugarContent
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

export const receiveFruits = (fruits) => {
  return {
    type: 'RECEIVE_FRUITS',
    fruits
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return request
      .get(`/api/v1/fruits`)
      .then(res => {
        dispatch(receiveFruits(JSON.parse(res.text)))
      })
  }
}
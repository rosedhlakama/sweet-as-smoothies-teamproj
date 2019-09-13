import request from 'superagent'

export const NAVIGATE = 'NAVIGATE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITIES = 'UPDATE_QUANTITIES'
export const RECEIVE_FRUITS = 'RECEIVE_FRUITS'

export const navigate = (navigation) => {
  return {
    type: NAVIGATE,
    navigation
  }
}

export const addToCart = (id, name, sugarContent) => {
  return {
    type: ADD_TO_CART,
    id,
    name,
    sugarContent
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const updateQuantities = (cart) => {
  return {
    type: UPDATE_QUANTITIES,
    cart
  }
}

const receiveFruits = (fruits) => {
  return {
    type: RECEIVE_FRUITS,
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
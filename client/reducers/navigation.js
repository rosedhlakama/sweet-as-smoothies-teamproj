export default function navigationReducer(oldState = 'listing', action) {
  switch (action.type) {
    case 'NAVIGATE':
      return action.navigation
      break

    default:
      return oldState
  }
}
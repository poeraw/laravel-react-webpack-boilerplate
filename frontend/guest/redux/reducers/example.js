export default function example(state = [], action){
  switch (action.type) {
    case 'SET_EXAMPLE':
      return Object.assign({}, state, {
          text : action.payload
      })
    case 'SET_EXAMPLE_SUCCESS':
      return Object.assign({}, state, {
          text : action.payload
      })
    default:
      return state
    }
}
export default function example(state = [], action){
  switch (action.type) {
    case 'SET_EXAMPLE':
      return Object.assign({}, state, {
          text : action.text
      })
    default:
      return state
    }
}
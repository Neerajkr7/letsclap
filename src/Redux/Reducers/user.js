const initalState = {
  users: [],
  loader: false,
  currentUser: {},
  isLogged: false
}


const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_EVENT_REQUEST':
      return { ...state, loader: true }
    case 'ADD_EVENT_REQUEST_SUCCESS':
      return { ...state, loader: false }
    case 'ADD_EVENT_REQUEST_FAILURE':
      return { ...state, loader: false }
    default:
      return state
  }
}

export default userReducer
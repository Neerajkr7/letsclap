const initalState = {
  users: [],
  loader: false,
  currentUser: {},
  isLogged: false
}


const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'USER_AUTH_REQUEST':
      return state
    default:
      return state
  }
}

export default userReducer
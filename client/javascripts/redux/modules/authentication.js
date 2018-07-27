const initialState = {
  isAuthenticated: currentUser ? true : false
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

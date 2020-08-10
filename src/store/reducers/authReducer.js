const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log(action.type);
      return state;

    case 'LOGIN_ERROR':
      console.log(action.type, action.err);
      return state;

    case 'LOGOUT_SUCCESS':
      console.log(action.type);
      return state;

    case 'LOGOUT_ERROR':
      console.log(action.type, action.err);
      return state;

    default:
      return state;
  }
};

export default authReducer;

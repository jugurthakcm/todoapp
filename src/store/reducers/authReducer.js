const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log(action.type);
      break;

    default:
      return state;
  }
};

export default authReducer;

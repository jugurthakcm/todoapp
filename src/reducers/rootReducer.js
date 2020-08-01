import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

export default rootReducer;

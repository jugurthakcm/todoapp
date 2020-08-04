import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';

export const rootReducer = combineReducers({
  todoReducer: todoReducer,
  authReducer: authReducer,
  firestore: firestoreReducer,
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/rootReducer';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

const store = createStore(rootReducer);

const fbConfig = {
  apiKey: 'AIzaSyBwuUgBt79V7bTBP6PvP6ao_T8cTShK4mg',
  authDomain: 'todoapp-6b174.firebaseapp.com',
  databaseURL: 'https://todoapp-6b174.firebaseio.com',
  projectId: 'todoapp-6b174',
  storageBucket: 'todoapp-6b174.appspot.com',
  messagingSenderId: '278596367263',
  appId: '1:278596367263:web:024f14d048e61a252a83aa',
  measurementId: 'G-GHQPGYLMFQ',
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

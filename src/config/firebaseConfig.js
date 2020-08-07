import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
export default firebase;

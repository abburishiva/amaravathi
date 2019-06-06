import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

var config = {
  apiKey: "AIzaSyBZX--JQvqwYU80c5mwBDu_NgzsyrO7cwo",
  authDomain: "reastaurantapplication.firebaseapp.com",
  databaseURL: "https://reastaurantapplication.firebaseio.com",
  projectId: "reastaurantapplication",
  storageBucket: "reastaurantapplication.appspot.com",
  messagingSenderId: "974660698203"
};
firebase.initializeApp(config);
export default firebase;

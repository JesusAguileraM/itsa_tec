import firebase from 'firebase';
import Constants from 'expo-constants';
const firebaseConfig = {
  apiKey: 'AIzaSyCi28WkpQ2LMEyOFy10Lk2Y8gDlA2XCNKc',
  authDomain: 'itsa-619c9.firebaseapp.com',
  databaseURL: 'https://itsa-619c9-default-rtdb.firebaseio.com/',
  projectId: 'itsa-619c9',
  storageBucket: 'itsa-619c9.appspot.com',
  messagingSenderId: '446133329619',
  appId: '1:446133329619:android:bed41553d9a9b29e86fe26',
};
let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;

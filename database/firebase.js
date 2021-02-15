import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyALxRMKuxOJjKCCa_RCt5ZZVxINK7_ivVg",
        authDomain: "itsa-firebase.firebaseapp.com",
        projectId: "itsa-firebase",
        storageBucket: "itsa-firebase.appspot.com",
        messagingSenderId: "618095622790",
        appId: "1:618095622790:web:e610781b6310faf9766f07"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); //es para no tener que estar ejecutando cada rato el mismo comando

    const db = firebase.firestore();

    export default {
        firebase,
        db,
    }
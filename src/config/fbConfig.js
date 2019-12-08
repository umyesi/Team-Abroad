import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCeuGwPHx_ugS1SkcSf5bdsy3GFaFAKRJM",
    authDomain: "teamabroad-p.firebaseapp.com",
    databaseURL: "https://teamabroad-p.firebaseio.com",
    projectId: "teamabroad-p",
    storageBucket: "teamabroad-p.appspot.com",
    messagingSenderId: "846098370728",
    appId: "1:846098370728:web:1b66b5d0630eb79bfc329d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase
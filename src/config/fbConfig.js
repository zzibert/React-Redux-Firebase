import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpzvGvuDlFcYaqJjzlPgJgCuDJFM3p4a8",
    authDomain: "zzibert-mario-plan.firebaseapp.com",
    databaseURL: "https://zzibert-mario-plan.firebaseio.com",
    projectId: "zzibert-mario-plan",
    storageBucket: "zzibert-mario-plan.appspot.com",
    messagingSenderId: "177060236240"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
 
 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAD2YoOXes8q0LY1hWbSfnr_9Qrv6zGMb0",
    authDomain: "redux-manage-project.firebaseapp.com",
    databaseURL: "https://redux-manage-project.firebaseio.com",
    projectId: "redux-manage-project",
    storageBucket: "redux-manage-project.appspot.com",
    messagingSenderId: "905726571965"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})
  export default firebase
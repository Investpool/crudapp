import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyC9tIZXmwl4Gixxl5LwHRrWx2YYM3ejzEI",
    authDomain: "gen17-app.firebaseapp.com",
    projectId: "gen17-app",
    storageBucket: "gen17-app.appspot.com",
    messagingSenderId: "540672191554",
    appId: "1:540672191554:web:3f0d4baed7f2dd797951db"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;
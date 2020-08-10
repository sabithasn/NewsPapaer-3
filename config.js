import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyDRpUcJYtdeNfH4DI4CfdJQXPTIZ7Y7YP0",
    authDomain: "newpaper-13a91.firebaseapp.com",
    databaseURL: "https://newpaper-13a91.firebaseio.com",
    projectId: "newpaper-13a91",
    storageBucket: "newpaper-13a91.appspot.com",
    messagingSenderId: "1071761523778",
    appId: "1:1071761523778:web:8bc4d3eb39d66cbeafd9db",
    measurementId: "G-0W7FM295WF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
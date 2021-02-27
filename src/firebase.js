import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyABGTdoh3YChl3Zs8wVqgma4UoGmhEKMfw",
    authDomain: "react-login-form-c8054.firebaseapp.com",
    databaseURL: "https://react-login-form-c8054-default-rtdb.firebaseio.com",
    projectId: "react-login-form-c8054",
    storageBucket: "react-login-form-c8054.appspot.com",
    messagingSenderId: "213553230463",
    appId: "1:213553230463:web:b0fca92fee80e0eedc054a"
  };
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);
//  const db = fireDb.database().ref();
 const firestore = firebase.firestore()
 const auth = firebase.auth()
 export {firestore,auth} ;
import "firebase/firestore";
import firebase from 'firebase'
require('firebase/auth')


const firebaseConfig = {
  apiKey: "AIzaSyDaK4S9vLqQGXoWTCF2iJGI-EHrHNCki8c",
  authDomain: "r-app-3767a.firebaseapp.com",
  projectId: "r-app-3767a",
  storageBucket: "r-app-3767a.appspot.com",
  messagingSenderId: "662161729717",
  appId: "1:662161729717:web:f470b53d8ed1ee7c6fb6fc"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore()
export const signInWithGoogle = async() => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
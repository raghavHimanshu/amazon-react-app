import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALJ2P5SWyxyvD8HGiXnvLCSqy8hwHOi4Y",
    authDomain: "clone-app-c30c1.firebaseapp.com",
    projectId: "clone-app-c30c1",
    storageBucket: "clone-app-c30c1.appspot.com",
    messagingSenderId: "923575398351",
    appId: "1:923575398351:web:3a35b0afd924458b926cba"
  };
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

export { auth, db };
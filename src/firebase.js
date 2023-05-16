import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHqMQJl1ARtlZYKWzyu2Fk6ctVrE9_9gM",
  authDomain: "e-commerce-9e17d.firebaseapp.com",
  projectId: "e-commerce-9e17d",
  storageBucket: "e-commerce-9e17d.appspot.com",
  messagingSenderId: "379206960866",
  appId: "1:379206960866:web:a6c09d995a449f3bbe80bb",
  measurementId: "G-K5F6LLRKZ9"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

export { auth, db };
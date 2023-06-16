// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore }  from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAveTdnYy8_oMCB64qOudSJAmF8XxhETJw",
  authDomain: "library-7e2cd.firebaseapp.com",
  projectId: "library-7e2cd",
  storageBucket: "library-7e2cd.appspot.com",
  messagingSenderId: "1051799634302",
  appId: "1:1051799634302:web:4a0e5cbe2a10c6e304f32f",
  measurementId: "G-BK52W9016D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }
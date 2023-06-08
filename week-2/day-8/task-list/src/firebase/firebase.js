// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH8oMyeJJgP6t2MRgx07xVQJ22YxdZjMk",
  authDomain: "task-list-ix-30771.firebaseapp.com",
  projectId: "task-list-ix-30771",
  storageBucket: "task-list-ix-30771.appspot.com",
  messagingSenderId: "20678591705",
  appId: "1:20678591705:web:c37ae6ce3cbc98c49e2ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
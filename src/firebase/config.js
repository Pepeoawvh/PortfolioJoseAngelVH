require('dotenv').config();
import firebase  from "firebase/compat/app"
import "firebase/compat/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "portafolio-65500.firebaseapp.com",
  projectId: "portafolio-65500",
  storageBucket: "portafolio-65500.appspot.com",
  messagingSenderId: "1089031386526",
  appId: "1:1089031386526:web:79dccfe616db73ef47128f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const firestoreDB = app.firestore()
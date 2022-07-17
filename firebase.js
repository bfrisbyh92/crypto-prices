// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crypto-prices-acf07.firebaseapp.com",
  projectId: "crypto-prices-acf07",
  storageBucket: "crypto-prices-acf07.appspot.com",
  messagingSenderId: "756575643981",
  appId: "1:756575643981:web:67a911be0a1cf44da8ef04",
  measurementId: "G-1450YJP7RQ"
};
// ^^ Change to .env

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export default { auth, db, analytics, app }


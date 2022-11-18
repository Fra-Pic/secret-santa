// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtfzzQAy8aZ4GSPACGw9EyaIdqFnwM288",
  authDomain: "ntt-secret-santa.firebaseapp.com",
  projectId: "ntt-secret-santa",
  storageBucket: "ntt-secret-santa.appspot.com",
  messagingSenderId: "290030867472",
  appId: "1:290030867472:web:e0e05337606dd517c52695",
  measurementId: "G-2N013ZMZ5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = app
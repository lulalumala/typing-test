// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn429URjYLKmBa6aFoCUgdlPBxpU8JEh4",
  authDomain: "typing-test-89f32.firebaseapp.com",
  projectId: "typing-test-89f32",
  storageBucket: "typing-test-89f32.appspot.com",
  messagingSenderId: "929310747400",
  appId: "1:929310747400:web:331622d25847011c7b9abd",
  measurementId: "G-W9P4TZSLFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db=getFirestore(app)
export const auth = getAuth(app)

 
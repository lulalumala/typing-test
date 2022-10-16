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
  apiKey: "AIzaSyCgL53N9uPRh3iodpV6bhl1Zgxq_d0YW9A",
  authDomain: "typing-test-82ac4.firebaseapp.com",
  projectId: "typing-test-82ac4",
  storageBucket: "typing-test-82ac4.appspot.com",
  messagingSenderId: "1050768076699",
  appId: "1:1050768076699:web:0520306a1e4d33b1693b3e",
  measurementId: "G-5DW7S63289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db=getFirestore(app)
//  export const auth = getAuth(app)


export default app


 
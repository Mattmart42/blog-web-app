// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTR85zI4IqINwOvQdfS9NqdKxRrkMbLKM",
  authDomain: "blog-web-app-85ee1.firebaseapp.com",
  projectId: "blog-web-app-85ee1",
  storageBucket: "blog-web-app-85ee1.appspot.com",
  messagingSenderId: "91715302262",
  appId: "1:91715302262:web:4ffe4402fb7faa34a18057",
  measurementId: "G-VTVTY5T9MM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
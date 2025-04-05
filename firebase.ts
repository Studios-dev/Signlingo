// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3wFVNF4olPI5hfeWzjwb30qS7WSyxC2k",
  authDomain: "signlingo-793a1.firebaseapp.com",
  projectId: "signlingo-793a1",
  storageBucket: "signlingo-793a1.firebasestorage.app",
  messagingSenderId: "728737982745",
  appId: "1:728737982745:web:324842fd0355cb35fbfd88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// I know that this isn't a good practice with hardcoding credentials into the code
// But we (I) don't care enough to configure an env because of the following:
// 1. Firebase credentials are not sensitive https://firebase.google.com/docs/projects/api-keys#general-info 
// 2. This is a hackathon, as long as these aren't admin creds it's *probably* fine
// 3. These are shipped to the client anyways, so not like it's a secret
// - Bloxs
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
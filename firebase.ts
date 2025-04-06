// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// I have been informed that I have been called out for copium (even though I disagree (I wonder why :trollface:))
// so I took the effort to move these to an env even though they're public
// Github and deno deploy, please add uploading .env files - Bloxs
const firebaseConfig = {
	apiKey: process.env.NODE_PUBLIC_apiKey,
	authDomain: process.env.NODE_PUBLIC_authDomain,
	projectId: process.env.NODE_PUBLIC_projectId,
	storageBucket: process.env.NODE_PUBLIC_storageBucket,
	messagingSenderId: process.env.NODE_PUBLIC_messagingSenderId,
	appId: process.env.NODE_PUBLIC_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
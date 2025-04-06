// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_apiKey,
	authDomain: process.env.NEXT_PUBLIC_authDomain,
	projectId: process.env.NEXT_PUBLIC_projectId,
	storageBucket: process.env.NEXT_PUBLIC_storageBucket,
	messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
	appId: process.env.NEXT_PUBLIC_appId,
	// !!111! Very secret !11!, do not de-base64 this. I repeat, do not de-base64 this. You will regret it !111!
	adminKey: "WVVoU01HTklUVFpNZVRrelpETmpkV1ZYT1RGa1NGWnBXbE0xYW1JeU1IWmtNa1l3V1RKbkwyUnFNWFpNVm14RFVrWlNlRmRHT1dGV1VUMDk="
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
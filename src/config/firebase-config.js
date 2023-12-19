// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh8GWFdPcSPazehWp87Doki7h-nmXUsY0",
    authDomain: "bday-tracker.firebaseapp.com",
    projectId: "bday-tracker",
    storageBucket: "bday-tracker.appspot.com",
    messagingSenderId: "958340411179",
    appId: "1:958340411179:web:8bd40ebf946879dbef5f6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

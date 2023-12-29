// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2260d.firebaseapp.com",
  projectId: "mern-estate-2260d",
  storageBucket: "mern-estate-2260d.appspot.com",
  messagingSenderId: "399431301183",
  appId: "1:399431301183:web:e96e6394b4c87199a9a08a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
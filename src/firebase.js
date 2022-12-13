// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnz5MzrzV2k7n95HvWXKJaFSPqC0uXJDE",
  authDomain: "wolt-auth.firebaseapp.com",
  projectId: "wolt-auth",
  storageBucket: "wolt-auth.appspot.com",
  messagingSenderId: "692259976495",
  appId: "1:692259976495:web:5a0339e5df802ec78addda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
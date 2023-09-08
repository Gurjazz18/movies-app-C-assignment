// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvuRo_f9a0VV9C7vao51qgdP-ZXNdjkV4",
  authDomain: "company-auth-27991.firebaseapp.com",
  projectId: "company-auth-27991",
  storageBucket: "company-auth-27991.appspot.com",
  messagingSenderId: "87628669825",
  appId: "1:87628669825:web:00d8689900784b5cf3fe80",
  measurementId: "G-TXHPDTJRPL"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth()

export {app,auth}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTVbP1LEPppYiLsaxkmZg5rX-cbPT6ZI",
  authDomain: "chatgpt-2025.firebaseapp.com",
  projectId: "chatgpt-2025",
  storageBucket: "chatgpt-2025.firebasestorage.app",
  messagingSenderId: "669963224888",
  appId: "1:669963224888:web:250218db4c279ebd5023cd",
  measurementId: "G-M8WY2BGHVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);
export { db };
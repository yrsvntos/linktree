// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5mFIVY4MbCHBteVJ9E4vkjhAs99S_EZM",
  authDomain: "projecto-linktree.firebaseapp.com",
  projectId: "projecto-linktree",
  storageBucket: "projecto-linktree.firebasestorage.app",
  messagingSenderId: "225383773808",
  appId: "1:225383773808:web:5c54cafcd9fa55e97be6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{db, auth}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtadDZIHugd4dG5e21dFaf83CCfjaZfyI",
  authDomain: "task-manager-3bbdd.firebaseapp.com",
  projectId: "task-manager-3bbdd",
  storageBucket: "task-manager-3bbdd.appspot.com",
  messagingSenderId: "76728674554",
  appId: "1:76728674554:web:b72d213a7d9250801e4143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
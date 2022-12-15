// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQU_FCA_JnumrLlBx9LjBcBeNPbRBMsgI",
  authDomain: "todo-21922.firebaseapp.com",
  projectId: "todo-21922",
  storageBucket: "todo-21922.appspot.com",
  messagingSenderId: "520268422582",
  appId: "1:520268422582:web:a94349f7ffb312339e3517",
  measurementId: "G-T8TD9KMMYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

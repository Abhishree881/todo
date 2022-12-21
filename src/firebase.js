import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQU_FCA_JnumrLlBx9LjBcBeNPbRBMsgI",
  authDomain: "todo-21922.firebaseapp.com",
  projectId: "todo-21922",
  storageBucket: "todo-21922.appspot.com",
  messagingSenderId: "520268422582",
  appId: "1:520268422582:web:a94349f7ffb312339e3517",
  measurementId: "G-T8TD9KMMYS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };

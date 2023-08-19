import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

//use .env file
const firebaseConfig = {
  apiKey: "AIzaSyDW1_kVSbdQZX3M2dMICi3FyZJppYO_gCs",
  authDomain: "astron-29621.firebaseapp.com",
  projectId: "astron-29621",
  storageBucket: "astron-29621.appspot.com",
  messagingSenderId: "1054431066141",
  appId: "1:1054431066141:web:04b46c89ca125fb9df2ef4",
  measurementId: "G-3F4SS5E4W0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

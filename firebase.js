
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyApMvM_xsoDNUOtPGKUOpf2KoSa69iiINI",
  authDomain: "booking-project-751e4.firebaseapp.com",
  projectId: "booking-project-751e4",
  storageBucket: "booking-project-751e4.appspot.com",
  messagingSenderId: "457745812736",
  appId: "1:457745812736:web:6214756ccebcbdf9d5f7e5",
  measurementId: "G-R3H6F9DDPG"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};
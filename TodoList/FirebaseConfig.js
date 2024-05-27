// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,getReactNativePersistence,initializeAuth} from "firebase/auth"
import  ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAx321Kt2AhaTKk6z9rjRfH3DJXrUoeCN8",
    authDomain: "todolist-661f6.firebaseapp.com",
    projectId: "todolist-661f6",
    storageBucket: "todolist-661f6.appspot.com",
    messagingSenderId: "38467005667",
    appId: "1:38467005667:web:fca20a8af5ddefa22d69d6",
    measurementId: "G-QMMQJ493L9"
  };
  export const FIREBASE_APP = initializeApp(firebaseConfig);
export const db = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
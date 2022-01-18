// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyqAy0GUYxrhQiF_7PCXDrCa03RbBC0MA",
    authDomain: "cu-date-64af0.firebaseapp.com",
    projectId: "cu-date-64af0",
    storageBucket: "cu-date-64af0.appspot.com",
    messagingSenderId: "677495908536",
    appId: "1:677495908536:web:d84e1acedce07f4534ac4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {auth,db}
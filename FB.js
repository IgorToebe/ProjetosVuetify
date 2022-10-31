// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";



import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC3JaA_eO14o1KCGy5VIrIzgxbSGW6Z4mE",

  authDomain: "primeiro-projeto-a2a57.firebaseapp.com",

  projectId: "primeiro-projeto-a2a57",

  storageBucket: "primeiro-projeto-a2a57.appspot.com",

  messagingSenderId: "740041372475",

  appId: "1:740041372475:web:e1d5ca0485404a0b253d1e",

  measurementId: "G-B7LL5D1SVN"

};


// Initialize Firebase

const db = initializeApp(firebaseConfig);




db.settings({ timestampsInSnapshots: true});

export default db;
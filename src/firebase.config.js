// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoHmpLL-ABH12faLnAVrlOs9AhZFtbDSo",
  authDomain: "reservation-keeper.firebaseapp.com",
  projectId: "reservation-keeper",
  storageBucket: "reservation-keeper.appspot.com",
  messagingSenderId: "383902349265",
  appId: "1:383902349265:web:0766f54b78fb03b836d2f0",
  measurementId: "G-6GBMQZXL2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
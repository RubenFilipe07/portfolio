// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXOCMv5Db1XYfuvbYU51_q2oGEcymuY0",
  authDomain: "ruben-filipe.firebaseapp.com",
  projectId: "ruben-filipe",
  storageBucket: "ruben-filipe.appspot.com",
  messagingSenderId: "371714794217",
  appId: "1:371714794217:web:edaa36482973138d358678",
  measurementId: "G-ZV6713G8S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
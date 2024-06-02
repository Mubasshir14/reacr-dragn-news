// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIr8lB4qs3U2S5rWG212M5B-MnDlvwnVA",
  authDomain: "react-dragon-news-e507f.firebaseapp.com",
  projectId: "react-dragon-news-e507f",
  storageBucket: "react-dragon-news-e507f.appspot.com",
  messagingSenderId: "44272486437",
  appId: "1:44272486437:web:caad1b867ab844ea15d7cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
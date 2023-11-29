// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyUTUPAZmkFoehzVe3cX_2p_8CHOtckQ",
  authDomain: "travel-reviewer-auth.firebaseapp.com",
  projectId: "travel-reviewer-auth",
  storageBucket: "travel-reviewer-auth.appspot.com",
  messagingSenderId: "1053133100650",
  appId: "1:1053133100650:web:0c290e3a4fabb846f61c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)
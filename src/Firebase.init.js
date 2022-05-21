// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEt9VU9e1N1uVqThHw9arczcRbq_M1AEQ",
  authDomain: "assignment-12-fe1d7.firebaseapp.com",
  projectId: "assignment-12-fe1d7",
  storageBucket: "assignment-12-fe1d7.appspot.com",
  messagingSenderId: "548023096829",
  appId: "1:548023096829:web:706203a129734ca625f594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
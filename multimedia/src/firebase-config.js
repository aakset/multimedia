// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1a_1J0ZmdbidyAR0C5-50FtCSgGVQmxw",
  authDomain: "studiorental-3e69f.firebaseapp.com",
  projectId: "studiorental-3e69f",
  storageBucket: "studiorental-3e69f.appspot.com",
  messagingSenderId: "82736133158",
  appId: "1:82736133158:web:72214730a084c9ceaca2e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
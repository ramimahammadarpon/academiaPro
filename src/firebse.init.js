// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDN5BFGIrFfA03gaBUV5dT0-QWyue8Ur0",
  authDomain: "course-management-system-e9f39.firebaseapp.com",
  projectId: "course-management-system-e9f39",
  storageBucket: "course-management-system-e9f39.firebasestorage.app",
  messagingSenderId: "592375984003",
  appId: "1:592375984003:web:908e5c11bb4d37fd6ed0b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
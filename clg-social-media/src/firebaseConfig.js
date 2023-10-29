// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB_CGG_bRXzQO-ncM8u5BXhhDSNEymBm4",
  authDomain: "clg-social-media.firebaseapp.com",
  projectId: "clg-social-media",
  storageBucket: "clg-social-media.appspot.com",
  messagingSenderId: "818757656521",
  appId: "1:818757656521:web:93cb22031260a16f5b9218" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };


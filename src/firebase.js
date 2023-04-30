// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABfUlOTDFRHSoLcE9E7apST_dhLimYRXI",
  authDomain: "chatroom-app-53762.firebaseapp.com",
  projectId: "chatroom-app-53762",
  storageBucket: "chatroom-app-53762.appspot.com",
  messagingSenderId: "888084175942",
  appId: "1:888084175942:web:d4d4f4fee9651e612afe47",
  measurementId: "G-ZJJQNDE2P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
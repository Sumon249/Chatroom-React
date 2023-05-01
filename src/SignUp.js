import React from 'react'
import { useState } from 'react'

import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignIn from "./btn_google_signin_light_normal_web.png"
import "./SignUp.css"
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {

  const [user] = useAuthState(auth)
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)

  };
  const handleSaveUserData = async (userData) => {
    try {
      await addDoc(collection(db, 'users'), {
        displayName: userData.displayName,
        email: userData.email,
        photoURL: userData.photoURL,
        role: 'user'
      });
      console.log('User data saved to Firestore');
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
  }
};

  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, save their data to Firestore
      handleSaveUserData(user);
    }
  });

  return (
    <div className="signup-wrapper">
      <div className="signup-page">
        <h1>Chatroom Application</h1>

          <button className="sign-in signup-btn">
            <img
              onClick={googleSignIn}
              src={GoogleSignIn}
              alt="sign in with google"
              type="button"
            />
          </button>
      </div>
    </div>
  );
}

export default SignUp;
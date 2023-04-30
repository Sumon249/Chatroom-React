import React from 'react'
import { useState } from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignIn from "./btn_google_signin_light_normal_web.png"
import "./SignUp.css"

const SignUp = () => {
  const [user] = useAuthState(auth)
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

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
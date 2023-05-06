import React from 'react'
import { useState, useEffect } from 'react'

import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import GoogleSignIn from "./btn_google_signin_dark_normal_web_2x-ew2kGNDJd-transformed.png"
import "./SignUp.css"
import { doc, addDoc, collection, query, setDoc, Timestamp, where } from 'firebase/firestore';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

const SignUp = () => {

  const [user] = useAuthState(auth);
  const [role, setRole] = useState("");

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);

  };

  useEffect(() => {


    const handleSaveUserData = async (userData) => {
      try {

        // const usersCollectionRef = collection(db, 'users');
        // const querySnapshot = await query(usersCollectionRef, where('email', '==', userData.email));
        // if (querySnapshot.empty) { 
        console.log(userData.uid);
        const docRef = doc(db, "users", userData.uid);
        await setDoc(docRef, {
          displayName: userData.displayName,
          email: userData.email,
          photoURL: userData.photoURL,
          role: role,

        });
        console.log('User data saved to Firestore');
      }
      catch (error) {
        console.error('Error saving user data to Firestore:', error);
      }
    };
  

  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, save their data to Firestore
      handleSaveUserData(user);
    }
  });
}, [user, role])


  const handleRoleChange = (event) => {
    setRole(event.target.value);
  }
  return (
    <div className="signup-wrapper">

      <div className="signup-page">
        <FormControl>
          <h2 className="role-select-header">Select a role</h2>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={role}
            name="radio-buttons-group"
            className='radio-group'
            onChange={handleRoleChange}
          >
            <FormControlLabel value="user" control={<Radio />} label="User" />
            <FormControlLabel value="moderator" control={<Radio />} label="Moderator" />
            <FormControlLabel value="admin" control={<Radio />} label="Administrator" />
          </RadioGroup>
        </FormControl>

        <button className="sign-in signup-btn">
          <img
            onClick={googleSignIn}
            src={GoogleSignIn}
            alt="sign in with google"
            className='signup-img'
            type="button"
          />
        </button>
      </div>
    </div>
  );
}

export default SignUp;
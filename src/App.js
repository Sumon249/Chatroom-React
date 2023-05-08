import React from 'react'
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatroomWindow from './MainWindow';
import SignUp from './SignUp';


function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user?<ChatroomWindow /> : <SignUp />}
    </>
  );
}

export default App;

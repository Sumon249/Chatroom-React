import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatroomWrapper from './components/Chatrooms/ChatroomWrapper';
import ChannelWrapper from './components/Channels/ChannelWrapper';
import ChatWrapper from './components/Chat/ChatWrapper';
import Settings from './components/Settings/Settings';
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

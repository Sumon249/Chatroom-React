import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatroomWrapper from './components/Chatrooms/ChatroomWrapper';
import ChannelWrapper from './components/Channels/ChannelWrapper';
import ChatWrapper from './components/Chat/ChatWrapper';
import Settings from './components/Settings/Settings';
import ChatroomWindow from './ChatroomWindow';
import SignUp from './SignUp';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {/* <SignUp></SignUp> */}
      {user?<ChatroomWindow /> : <SignUp />}
      {/* <div className='chatroom-window'>

         <Settings></Settings>
        <ChannelWrapper></ChannelWrapper>

        <ChatroomWrapper></ChatroomWrapper>
        <ChatWrapper></ChatWrapper> 

      </div> */}
    </>
  );
}

export default App;

import React from 'react'
import { useState } from 'react';
import ChatroomWrapper from './components/Chatrooms/ChatroomWrapper';
import ChannelWrapper from './components/Channels/ChannelWrapper';
import ChatWrapper from './components/Chat/ChatWrapper';
import Settings from './components/Settings/Settings';
const ChatroomWindow = (onChatroomChange) => {
  const [currChatroom, setCurrChatroom] = useState('');

  const handleChatroomChange = (chatroom) => {
    setCurrChatroom(chatroom);
    // console.log("CHATROOM WINDOW" + chatroom);
  };

  return (
    <div className='chatroom-window'>

         <Settings></Settings>
        <ChannelWrapper></ChannelWrapper>

        <ChatroomWrapper onChatroomChange={handleChatroomChange}></ChatroomWrapper>
        <ChatWrapper chatroom = {currChatroom}></ChatWrapper> 

      </div>
  )
}

export default ChatroomWindow
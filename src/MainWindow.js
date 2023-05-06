import React from 'react'
import { useState } from 'react';
import ChatroomWrapper from './components/Chatrooms/ChatroomWrapper';
import ChannelWrapper from './components/Channels/ChannelWrapper';
import ChatWrapper from './components/Chat/ChatWrapper';
import Settings from './components/Settings/Settings';
const ChatroomWindow = (onChatroomChange, onChannelChange) => {
  const [currChatroom, setCurrChatroom] = useState('');
  const [currChannel, setCurrChannel] = useState('');

  const handleChatroomChange = (chatroom) => {
    setCurrChatroom(chatroom);
  };

  const handleChannelChange = (channel) => {
    setCurrChannel(channel);
  }
  return (
    <div className='chatroom-window'>

        <Settings></Settings>
        <ChannelWrapper onChannelChange = {handleChannelChange}></ChannelWrapper>
        <ChatroomWrapper onChatroomChange={handleChatroomChange} channel = {currChannel}></ChatroomWrapper>
        <ChatWrapper chatroom = {currChatroom}></ChatWrapper> 

      </div>
  )
}

export default ChatroomWindow
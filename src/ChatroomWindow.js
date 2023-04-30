import React from 'react'
import ChatroomWrapper from './components/Chatrooms/ChatroomWrapper';
import ChannelWrapper from './components/Channels/ChannelWrapper';
import ChatWrapper from './components/Chat/ChatWrapper';
import Settings from './components/Settings/Settings';
const ChatroomWindow = () => {
  return (
    <div className='chatroom-window'>

         <Settings></Settings>
        <ChannelWrapper></ChannelWrapper>

        <ChatroomWrapper></ChatroomWrapper>
        <ChatWrapper></ChatWrapper> 

      </div>
  )
}

export default ChatroomWindow
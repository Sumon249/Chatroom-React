import React from 'react'
import { useRef } from 'react';
import ChatWindow from './ChatWindow';
import TypingWindow from './TypingWindow';
import "./Chat.css"

const ChatWrapper = ({chatroom}) => {
    const scroll = useRef();
    // console.log("CHAT WRAPPER" + chatroom);

    return ( 
        <div className='chat-pane'>
            <ChatWindow currChatroom = {chatroom}></ChatWindow>
        </div>
     );
}
 
export default ChatWrapper;
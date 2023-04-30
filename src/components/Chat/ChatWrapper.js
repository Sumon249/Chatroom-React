import React from 'react'
import { useRef } from 'react';
import ChatWindow from './ChatWindow';
import TypingWindow from './TypingWindow';
import "./Chat.css"

const ChatWrapper = () => {
    const scroll = useRef();

    return ( 
        <div className='chat-pane'>
            <ChatWindow></ChatWindow>
            <span ref={scroll}></span>
            <TypingWindow scroll = {scroll}></TypingWindow>
        </div>
     );
}
 
export default ChatWrapper;
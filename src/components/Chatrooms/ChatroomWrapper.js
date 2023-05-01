import React from 'react'
import { useState } from 'react';
import Chatroom from './Chatroom';
import chatrooms from './ChatroomData';
import './Chatroom.css'

const ChatroomWrapper = ({onChatroomChange}) => {
    const [currChatroom, setCurrChatroom] = useState("")

    const changeChatroom = (chatroom) =>{
        setCurrChatroom(chatroom);
        onChatroomChange(chatroom);
        // console.log("CHATROMM_WRAPPER" + chatroom);
    }
    return ( 
    <div className='chatroom-pane'>
        {chatrooms.map(chatroom => 
            <Chatroom name = {chatroom.name} imgURL={chatroom.imgUrl} onChatroomChange = {changeChatroom}></Chatroom>
            
        )}
    </div>
    );
}
 
export default ChatroomWrapper;
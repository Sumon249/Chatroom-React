import React from 'react'
import Chatroom from './Chatroom';
import chatrooms from './ChatroomData';
import './Chatroom.css'

const ChatroomWrapper = () => {
    return ( 
    <div className='chatroom-pane'>
        {chatrooms.map(chatroom => 
            <Chatroom name = {chatroom.name} imgURL={chatroom.imgUrl}></Chatroom>
        )}
    </div>
    );
}
 
export default ChatroomWrapper;
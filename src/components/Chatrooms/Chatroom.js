import React from 'react'
import { useState } from 'react';
const Chatroom = ({name, imgURL, onChatroomChange}) =>{
    const changeChatroomHandler = (e) => {
        onChatroomChange(name);
    }
    return(
        <button className='chatroom-container' onClick={changeChatroomHandler}>
            <img src={imgURL} className = "chatroom-img" alt="" />
            <p class = "chatroom-btn">Chatroom {name}</p>
        </button>
    )
};
export default Chatroom;
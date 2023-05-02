import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '@mui/base';

const Chatroom = ({chatroom, imgURL, onChatroomChange}) =>{

    const changeChatroomHandler = (e) => {
        onChatroomChange(chatroom.name)
    }
    return(
        <Button className='chatroom-container' onClick={changeChatroomHandler}>
            <img src={imgURL} className = "chatroom-img" alt="" />
            <p class = "chatroom-btn">{chatroom.name}</p>
        </Button>
    )
};
export default Chatroom;
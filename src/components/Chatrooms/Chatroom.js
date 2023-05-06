import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '@mui/base';

const Chatroom = ({name, imgURL, onChatroomChange}) =>{

    const changeChatroomHandler = (e) => {
        onChatroomChange(name)

    }
    return(
        <Button className='chatroom-container' onClick={changeChatroomHandler}>
            <img src={imgURL} className = "chatroom-img" alt="" />
            <p className = "chatroom-btn">{name}</p>
        </Button>
    )
};
export default Chatroom;
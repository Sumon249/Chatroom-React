import React from 'react'
const Chatroom = ({name, imgURL}) =>{
    return(
        <button className='chatroom-container'>
            <img src={imgURL} className = "chatroom-img" alt="" />
            <p class = "chatroom-btn">Chatroom {name}</p>
        </button>
    )
};

export default Chatroom;
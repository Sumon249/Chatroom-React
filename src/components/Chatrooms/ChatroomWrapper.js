import React from 'react'
import { useState, useEffect } from 'react';
import Chatroom from './Chatroom';
// import Chatroom from './ChatroomData';
import ChatroomData from './ChatroomData';
// import "./ChatroomData"

import './Chatroom.css'
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    where
} from "firebase/firestore";
import { Modal, Box, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { db } from "../../firebase";
import { getFirestore } from 'firebase/firestore'

const ChatroomWrapper = ({onChatroomChange, channel}) => {
    const [currChatroom, setCurrChatroom] = useState("")
    const [chatrooms, setChatrooms] = useState([]);
    const [currChannel, setCurrChannel] = useState("Sports");
    const [open, setOpen] = useState(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        textAlign: 'center',
        p: 4,
      };

    const changeChatroom = (chatroom) =>{
        setCurrChatroom(chatroom);
        onChatroomChange(chatroom);
        // console.log("CHATROMM_WRAPPER" + chatroom);
    }

    useEffect(() =>{
        const fetchMessages = async () =>{
            setCurrChannel(channel);
        }
        fetchMessages();
    },[channel])

    console.log(currChannel);

    useEffect(() => {
        const q = query(
            collection(db, "chatrooms"),
            // orderBy("fromChannel"),
            where("fromChannel", "==", currChannel),
            limit(50)

        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let chatrooms = [];
            QuerySnapshot.forEach((doc) => {
                chatrooms.push({ ...doc.data(), id: doc.id });
            });
            setChatrooms(chatrooms);
        });
        return () => unsubscribe;
    }, [currChannel]);

    const addChatroom = () =>{
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return ( 
    <div className='chatroom-pane'>
        <ChatroomData />
        <div className='chatroom-header'>
            <p className='chatroom-title'>Chatrooms</p>
            <button onClick={addChatroom}>
            <FontAwesomeIcon icon={faPlus} />

            </button>
            {/* <Modal open = {open} onClose = {handleClose}>
                <Box sx = {style}>
                    <h3 className='modal-header'>Enter Chatroom Details</h3>
                    <form action="">
                        <input type="text"placeholder='Chatroom Name' />
                        <input type="image" src="" alt="" />
                    </form>

                </Box>
            </Modal> */}
        </div>
        {chatrooms.map((chatroom) => 
            <Chatroom name = {chatroom.name} imgURL={chatroom.imgUrl} onChatroomChange = {changeChatroom}  selected = {chatroom.name === currChatroom? true: false}></Chatroom>
            
        )}
    </div>
    );
}
 
export default ChatroomWrapper;
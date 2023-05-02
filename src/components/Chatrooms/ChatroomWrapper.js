import React from 'react'
import { useState, useEffect } from 'react';
import Chatroom from './Chatroom';
// import chatrooms from './ChatroomData';
import './Chatroom.css'
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    where
} from "firebase/firestore";

import { db } from "../../firebase";
import { getFirestore } from 'firebase/firestore'

const ChatroomWrapper = ({onChatroomChange}) => {
    const [currChatroom, setCurrChatroom] = useState("")

    const changeChatroom = (chatroom) =>{
        setCurrChatroom(chatroom);
        onChatroomChange(chatroom);
        // console.log("CHATROMM_WRAPPER" + chatroom);
    }
    const [chatrooms, setChatrooms] = useState([]);
    const [channel, setChannel] = useState("sports");
    useEffect(() => {
        const q = query(
            collection(db, "chatroom"),
            orderBy("createdAt"),
            // where("fromChannel", "==", channel),
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
    },[]);
    console.log("YOO" + chatrooms);
    return ( 
    <div className='chatroom-pane'>
        <p className='chatroom-title'>Chatrooms</p>
        {chatrooms.map(chatroom => 
            <Chatroom currChatroom = {chatroom} imgURL={chatroom.imgUrl} onChatroomChange = {changeChatroom}></Chatroom>
            
        )}
    </div>
    );
}
 
export default ChatroomWrapper;
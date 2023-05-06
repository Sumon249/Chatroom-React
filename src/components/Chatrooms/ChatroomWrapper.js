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

import { db } from "../../firebase";
import { getFirestore } from 'firebase/firestore'

const ChatroomWrapper = ({onChatroomChange, channel}) => {
    const [currChatroom, setCurrChatroom] = useState("")
    const [chatrooms, setChatrooms] = useState([]);
    const [currChannel, setCurrChannel] = useState("Sports");

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
    return ( 
    <div className='chatroom-pane'>
        <ChatroomData />
        <p className='chatroom-title'>Chatrooms</p>
        {chatrooms.map((chatroom) => 
            <Chatroom name = {chatroom.name} imgURL={chatroom.imgUrl} onChatroomChange = {changeChatroom}></Chatroom>
            
        )}
    </div>
    );
}
 
export default ChatroomWrapper;
import React from 'react'
import Chat from './Chat';
import chats from './ChatData';
import TypingWindow from './TypingWindow';
import { useEffect, useRef, useState } from "react";
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

const ChatWindow = ({currChatroom}) => {
    const [messages, setMessages] = useState([]);
    const [chatroom, setChatroom] = useState("");

    useEffect(() =>{
        const fetchMessages = async () =>{
            setChatroom(currChatroom);
        }
        fetchMessages();
    },[currChatroom])
    
    // console.log("CHAT WINDOW" + chatroom);
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            where("fromChatroom", "==", chatroom),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);

        });
        return () => unsubscribe;
    }, [chatroom]);

    const scroll = useRef();

    return (
        <>
            <div className="chat-window">

                {messages.map(message =>
                    <Chat key={message.id} message={message} ></Chat>
                )}
            <span ref={scroll}></span>
            </div>
            <TypingWindow scroll={scroll} currChatroom = {currChatroom}></TypingWindow>
        </>
    );
}

export default ChatWindow;
import React from 'react'
import Chat from './Chat';
import chats from './ChatData';
import { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";

import { db } from "../../firebase";
import { getFirestore } from 'firebase/firestore'

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
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
    }, []);

    const scroll = useRef();

    return (
        <div className="chat-window">

            {messages.map(message =>
                <Chat key={message.id} message={message} ></Chat>
            )}
             <span ref={scroll}></span>
        </div>
    );
}

export default ChatWindow;
import React from 'react'
import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const TypingWindow = ({scroll, currChatroom}) => {
    const [message, setMessage] = useState("");
    const [chatroom, setChatroom] = useState(currChatroom);
    useEffect(() =>{
      const fetchMessages = async () =>{
          setChatroom(currChatroom);
      }
      fetchMessages();
  },[currChatroom])
    // setChatroom(currChatroom);
    console.log("IN TYPING --- " + chatroom);
    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
          alert("Enter valid message");
          return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: message,
          name: displayName,
          avatar: photoURL,
          createdAt: serverTimestamp(),
          fromChatroom: chatroom,
          uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
      };
    return ( 
        <form className='typing-window' onSubmit={(event) => sendMessage(event)}>
            <input id = "text-input" name = "text-input" type="text" onChange={(e) => setMessage(e.target.value)} value = {message}/>
            <button type = "submit">Send</button>
        </form>
     );
}
 
export default TypingWindow;
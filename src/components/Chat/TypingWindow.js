import React from 'react'
import { useState, useEffect } from "react";
import EmojiPicker from 'emoji-picker-react';
// import 'emoji-mart/css/emoji-mart.css'
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const TypingWindow = ({ scroll, currChatroom }) => {
  const [message, setMessage] = useState("");
  const [chatroom, setChatroom] = useState(currChatroom);

  useEffect(() => {
    const fetchMessages = async () => {
      setChatroom(currChatroom);
    }
    fetchMessages();
  }, [currChatroom])

  // setChatroom(currChatroom);

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
    <form className='typing-window' onSubmit={(event) => sendMessage(event)} autoComplete="off">
      <input placeholder="Message" id="text-input" name="text-input" type="text" onChange={(e) => setMessage(e.target.value)} autoFocus value={message} />

      <button type="submit" className='submit-btn'>
        <img src="images/send-white.png" alt="" className='send-img' />
      </button>
    </form>
  );
}

export default TypingWindow;
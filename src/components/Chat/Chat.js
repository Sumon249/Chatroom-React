import React from 'react'
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Chat = ({ message }) => {
    const [user] = useAuthState(auth);
    // console.log(user.uid);
    return (
        <div className={message.uid === user.uid ? "text text-send" : "text text-recieve"}>
            <img
                className="chat-bubble__left"
                src={message.avatar}
                alt="user avatar"
            />
            <div className="chat-bubble__right">
                <p className="user-name">{message.name}</p>
                <p className="user-message">{message.text}</p>
            </div>
        </div>
    );
}

export default Chat;
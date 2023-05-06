import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '@mui/base';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase"; // Import your Firebase app instance
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, query, doc, where, getDoc, getDocs, addDoc ,setDoc, onSnapshot} from "firebase/firestore";



const Chatroom = ({name, imgURL, onChatroomChange}) =>{
    const [user] = useAuthState(auth);
    const [role, setRole] = useState("user")
    const chatroomCollectionRef = collection(db, "users");

    useEffect(() => {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          getDoc(docRef).then((doc) => {
            if (doc.exists()) {
              setRole(doc.data().role);
            } else {
              console.log("No such document!");
            }
          });
        }
      }, [role, user]);
    
    
    const changeChatroomHandler = (e) => {
        onChatroomChange(name)
    }
    return(
        <>
        <Button className='chatroom-container' onClick={changeChatroomHandler}>
            <img src={imgURL} className = "chatroom-img" alt="" />
            <p className = "chatroom-btn">{name}</p>
        {role === "admin"?<button className = "delete-chatroom" type=""><FontAwesomeIcon className = "fa-trash" icon={faTrash} /></button>:<></>}

        </Button>
        </>

    )
};
export default Chatroom;
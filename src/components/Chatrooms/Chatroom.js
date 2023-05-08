import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '@mui/base';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase"; // Import your Firebase app instance
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection,deleteDoc, query, doc, where, getDoc, getDocs, addDoc ,setDoc, onSnapshot} from "firebase/firestore";



const Chatroom = ({name, imgURL, onChatroomChange, selected}) =>{
    const [user] = useAuthState(auth);
    const [role, setRole] = useState("user")
    const [selectedChatroom, setSelectedChatroom] = useState("")
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
        onChatroomChange(name);
        setSelectedChatroom(name);
    }

    const deleteChatroom = async () => {
        try {
            const usersRef = collection(db, "chatrooms");
            const q = query(usersRef, where("name", "==", name));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
              querySnapshot.forEach((doc) => {
                deleteDoc(doc.ref);
              });
              console.log(`Deleted Chatroom  with name '${name}'`);
            } else {
              console.log(`Chatroom with name '${name}' not found`);
            }
          } catch (error) {
            console.error("Error deleting Chatroom from Firestore:", error);
          }
    }

    return(
        <div className={selected? "selected-chatroom chatroom-box": "chatroom-box"} style = {{display: 'flex', marginInline: '15px'}}>
            <button className='chatroom-container'  onClick={changeChatroomHandler} >
                <img src={imgURL} className = "chatroom-img" alt="" />
                <p className = "chatroom-btn">{name}</p>
            </button>
            {role === "admin"?<button onClick = {deleteChatroom} className = "delete-chatroom" type=""><FontAwesomeIcon className = "fa-trash" icon={faTrash} /></button>:<></>}

        </div>

    )
};
export default Chatroom;
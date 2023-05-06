import { db } from "../../firebase"; // Import your Firebase app instance
import { collection, query, doc, where, getDocs, addDoc ,setDoc } from "firebase/firestore";

import { useEffect } from "react";
const ChatroomData = () => {


  
  useEffect(() => {
    // Define the chatrooms to add
   
    const chatrooms = [
      { name: "Cricket", imgUrl: "/images/chatroom/cricket.jpg", fromChannel: "Sports" },
      { name: "Football", imgUrl: "/images/chatroom/football.jpg", fromChannel: "Sports"  },
      { name: "Hockey", imgUrl: "/images/chatroom/cricket.jpg", fromChannel: "Sports"  },
      { name: "Tennis", imgUrl: "/images/chatroom/football.jpg", fromChannel: "Sports"  },
      { name: "Italian", imgUrl: "/images/chatroom/italian.jpg", fromChannel: "Food" },
      { name: "Indian", imgUrl: "/images/chatroom/indian.jpg", fromChannel: "Food"  },
      { name: "Mexican", imgUrl: "/images/chatroom/mexican.jpg", fromChannel: "Food"  },
      { name: "Chinese", imgUrl: "/images/chatroom/chinese.jpg", fromChannel: "Food"  },
    ];

    // Create a reference to the chatroom collection in Firestore
    const chatroomCollectionRef = collection(db, "chatrooms");

    // Loop through the chatrooms and add each one to Firestore
    chatrooms.forEach(async (chatroom) => {
      console.log(chatroom.name);
        const q = query(chatroomCollectionRef, where("name", "==", chatroom.name));
        const querySnapshot = await getDocs(q);
        const existingChatroomNames = new Set();
        querySnapshot.forEach((doc) => existingChatroomNames.add(doc.id));
      
        if(querySnapshot.empty){
            console.log("This is being executed once");
            addDoc(collection(db, "chatrooms"),{
              name: chatroom.name,
              fromChannel: chatroom.fromChannel,
              imgUrl: chatroom.imgUrl
            });
        }
     
    });
  }, []);

  // Render the chatroom component
  return null;
}

export default ChatroomData;
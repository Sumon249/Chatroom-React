import { db } from "../../firebase"; // Import your Firebase app instance
import { collection, query, doc, where, getDocs, addDoc ,setDoc } from "firebase/firestore";

import { useEffect } from "react";
const ChatroomData = () => {


  
  useEffect(() => {
    // Define the chatrooms to add
   
    const chatrooms = [
      { name: "Cricket", imgUrl: "/images/chatroom/cricket.jpg", fromChannel: "Sports" },
      { name: "Football", imgUrl: "/images/chatroom/football.jpg", fromChannel: "Sports"  },
      { name: "Hockey", imgUrl: "/images/chatroom/hockey.jpg", fromChannel: "Sports"  },
      { name: "Tennis", imgUrl: "/images/chatroom/tennis.jpg", fromChannel: "Sports"  },
      { name: "Italian", imgUrl: "/images/chatroom/italian.jpg", fromChannel: "Food" },
      { name: "Indian", imgUrl: "/images/chatroom/indian.jpg", fromChannel: "Food"  },
      { name: "Mexican", imgUrl: "/images/chatroom/mexican.jpg", fromChannel: "Food"  },
      { name: "Chinese", imgUrl: "/images/chatroom/chinese.jpg", fromChannel: "Food"  },
      { name: "Romance", imgUrl: "/images/chatroom/romance.jpg", fromChannel: "Books"  },
      { name: "Biography", imgUrl: "/images/chatroom/bio.jpg", fromChannel: "Books"  },
      { name: "Mystery", imgUrl: "/images/chatroom/mystery.jpg", fromChannel: "Books"  },
      { name: "Science Fiction", imgUrl: "/images/chatroom/scifi.jpg", fromChannel: "Books"  },
      { name: "Romance", imgUrl: "/images/chatroom/rom.jpg", fromChannel: "Movies"  },
      { name: "Horror", imgUrl: "/images/chatroom/horror.jpg", fromChannel: "Movies"  },
      { name: "Mystery", imgUrl: "/images/chatroom/mys.jpg", fromChannel: "Movies"  },
      { name: "Comedy", imgUrl: "/images/chatroom/comedy.jpg", fromChannel: "Movies"  },
      { name: "Art", imgUrl: "/images/chatroom/art.jpg", fromChannel: "Fine Arts"  },
      { name: "Music", imgUrl: "/images/chatroom/music.jpg", fromChannel: "Fine Arts"  },
      { name: "Dance", imgUrl: "/images/chatroom/dance.jpg", fromChannel: "Fine Arts"  },
      { name: "Theatre", imgUrl: "/images/chatroom/theatre.jpg", fromChannel: "Fine Arts"  },
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
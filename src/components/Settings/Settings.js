import React from 'react'
import "./Settings.css"
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Settings = () => {
    const [user] = useAuthState(auth);
    const SignOut = () =>{
        auth.signOut();
    }
    return ( 
        <div className='settings-pane'>
            <button class = "signout-btn" onClick={SignOut}>Logout</button>
            <button>2</button>
        </div>
     );
}
 
export default Settings;
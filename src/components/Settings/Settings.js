import React from 'react'
import "./Settings.css"
import { auth } from "../../firebase";
import { Container } from '@mui/system';
import { useAuthState } from "react-firebase-hooks/auth";
import Button from '@mui/material/Button';
const Settings = () => {
    const [user] = useAuthState(auth);
    const SignOut = () =>{
        auth.signOut();
    }
    return ( 
        <div className='settings-pane'>
            {/* <Button variant = "contained">Logout</Button> */}
            <Button color = "error" variant = "contained" onClick={SignOut} >Logout</Button>
            {/* <button>2</button> */}
        </div>
     );
}
 
export default Settings;
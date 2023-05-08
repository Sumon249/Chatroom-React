import React from 'react'
import { useState } from 'react';

const Channel = ({channelName, imgURL, onChannelChange, selected}) => {
    const channelChangeHandler = () => {
        onChannelChange(channelName)
    }
    return ( 
        <button className={selected? "channel-container selected-channel": "channel-container"} onClick = {channelChangeHandler}>
            <img src={imgURL} className = "channel-img" alt="" />
            <p className='channel-name'>{channelName}</p>
        </button>
     );
}
 
export default Channel;
import React from 'react'
import { useState } from 'react';

const Channel = ({channelName, imgURL, onChannelChange}) => {
    const channelChangeHandler = () => {
        onChannelChange(channelName)
    }
    return ( 
        <button className="channel-container" onClick = {channelChangeHandler}>
            <img src={imgURL} className = "channel-img" alt="" />
            <p className='channel-name'>{channelName}</p>
        </button>
     );
}
 
export default Channel;
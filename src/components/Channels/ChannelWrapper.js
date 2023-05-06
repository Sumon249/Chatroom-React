import React from 'react'
import { useState } from 'react';
import Channel from './Channel';
import channels from './ChannelData';
import "./Channel.css"

const ChannelWrapper = ({onChannelChange}) => {
    const [currentChannel, setCurrentChannel] = useState("")
    const changeChannel = (channel) =>{
        setCurrentChannel(channel);
        onChannelChange(channel);
    }
    return (
        <div className="channel-pane">
            {channels.map(channel => 
                <Channel channelName={channel.channelName} imgURL = {channel.imgURL} onChannelChange = {changeChannel}></Channel>
            )}
        </div>
    );
}
 
export default ChannelWrapper;
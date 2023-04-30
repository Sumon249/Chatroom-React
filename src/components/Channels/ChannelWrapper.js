import React from 'react'
import Channel from './Channel';
import channels from './ChannelData';
import "./Channel.css"

const ChannelWrapper = () => {
    return (
        <div className="channel-pane">
            {channels.map(channel => 
                <Channel channelName={channel.channelName} imgURL = {channel.imgURL}></Channel>
            )}
        </div>
    );
}
 
export default ChannelWrapper;
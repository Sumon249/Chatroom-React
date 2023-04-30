import React from 'react'

const Channel = ({channelName, imgURL}) => {
    return ( 
        <div className="channel-container">
            <img src={imgURL} className = "channel-img" alt="" />
            <p>{channelName}</p>
        </div>
     );
}
 
export default Channel;
import React from 'react'

const Channel = ({channelName, imgURL}) => {
    return ( 
        <button className="channel-container">
            <img src={imgURL} className = "channel-img" alt="" />
            <p className='channel-name'>{channelName}</p>
        </button>
     );
}
 
export default Channel;
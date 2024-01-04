import React from 'react';
import video from "../../video/production.mp4"

const Video3D = () => {
    return (
        <div>
            <div className='2xl:container 2xl:mx-auto'>

            <video id="productVideo" width="100%" height="auto" controls muted loop>
                <source src={video} type="video/mp4" />
            </video>
            </div>
        </div>
    );
};

export default Video3D;
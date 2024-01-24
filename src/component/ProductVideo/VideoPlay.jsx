import React from 'react';

const VideoPlay = () => {
    return (
        <div className="flex justify-center w-full h-full">
        <video className="object-cover" width="100%" height="auto" playsinline autoPlay muted loop>
            <source src='/video/The Kow Company_video.mp4' type="video/mp4" />
        </video>
    </div>
    );
};

export default VideoPlay;
import { Suspense, lazy, useState } from "react";
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
// import video from "./video/production.mp4";
// import video from './video/production.mp4';


// const VideoPlay = lazy(() => import('./VideoPlay.jsx'));
const VideoPlay = lazy(() => delayForDemo(import('./VideoPlay.jsx')));

export default function  ProductVideoLatest ({ video }) {

    const [playBool, setPlayBool] = useState(false);

    const playVideo = () => {
        setPlayBool(true);
        const video = document.getElementById("productVideo");
        video.play();
    }

    const tagList = ["Retouching", "Recoloring", "Editing", "3D Modeling", "Texture Creation"];

    return (
        <div id="videoElement" className="">
            <div className="">
                <div className="relative flex flex-col justify-center items-center h-auto md:h-screen">
                    <Suspense fallback={
                        <div className="flex justify-center w-full h-full">
                            <video className="object-cover" width="100%" height="auto" playsinline autoPlay muted loop>
                                <source src='/video/loadvideo.mp4' type="video/mp4" />
                            </video>
                        </div>
                    }>
                        {/* <div className="flex justify-center w-full h-full">
                            <video className="object-cover" width="100%" height="auto" playsinline autoPlay muted loop>
                                <source src='/video/The Kow Company_video.mp4' type="video/mp4" />
                            </video>
                        </div> */}
                        <VideoPlay/>
                    </Suspense>
                    {/* tag line */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full">
                        <Carousel uniqueId="id_1050" delay={3000}
                            item={1}
                            indicators={false}
                        >
                            {/* <div className="flex justify-center font-tag-font"><h1 className="text-6xl font-bold uppercase text-white ">furniture</h1></div> */}

                            {tagList.map((item, index) =>
                                <div className="flex justify-center font-tag-font opacity-60 "><h1 className="text-2xl md:text-7xl font-bold uppercase text-white ">{item}</h1></div>
                            )}
                        </Carousel>
                    </div>
                    {/* <h2 className="text-3xl font-bold uppercase text-kow-text-black pt-7">HERE IS YOUR TAGLINE</h2> */}
                </div>
            </div>
        </div>

    );
};


// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
  
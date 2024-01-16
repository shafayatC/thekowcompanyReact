
import { useState } from "react";
import play from "/img/play-2.png"
import video from "../../video/production.mp4"
// import video from "./video/production.mp4";
// import video from './video/production.mp4';

const ProductVideoLatest = () => {

    const [playBool, setPlayBool] = useState(false);

    const playVideo = () => {
        setPlayBool(true);
        const video = document.getElementById("productVideo");
        video.play();
    }

    return (
        <div className="">
            <div className="2xl:container mx-auto">
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="flex justify-center w-full h-full">
                        <video className="object-cover" width="100%" height="auto" playsinline autoPlay muted loop>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                    {/* <h2 className="text-3xl font-bold uppercase text-kow-text-black pt-7">HERE IS YOUR TAGLINE</h2> */}
                </div>
            </div>
        </div>

    );
};

export default ProductVideoLatest;



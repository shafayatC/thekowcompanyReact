import { useEffect, useState, useRef } from 'react'
import ReactCompareImage from 'react-compare-image'
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import video from "../../video/production.mp4"
import VideoWithThumb from './VideoWithThumb'

const VideoSlider = () => {


    const sliderList = [
        {
            "thumb": "/img/video_slider/video-slider-1.jpg",
            "video": "/video/video_2d/Audio_Editing_Service_1.mp4",
            "label": "AUDIO ADDITION"
        },
        {
            "thumb": "/img/video_slider/video-slider-2.jpg",
            "video": "/public/video/video_2d/Subtitile_Addition_Service_1.mp4",
            "label": "SUBTITLE ADDITION"
        },
        {
            "thumb": "/img/video_slider/video-slider-3.jpg",
            "video": "/public/video/video_2d/Title_Addition_Service_1.mp4",
            "label": "TITLE EDITING"
        },
        {
            "thumb": "/img/video_slider/video-slider-1.jpg",
            "video": "/public/video/video_2d/Video_Cropping_Service_1.mp4",
            "label": "VIDEO CROPPING"
        }
      
    ]


    return (
        <div className='py-20'>
            <div className='2xl:container 2xl:mx-auto '>
                <div className='relative w-full h-[400px]'>
                    <Carousel uniqueId="id_10115"
                        delay={5000}
                        indicators={false}
                        item={3}
                        responsive={[
                            {
                                breakPoint: 641,
                                item: 1
                            },
                            {
                                breakPoint: 1025,
                                item: 2,
                            }
                        ]}
                    >
                        {sliderList.map((item, index) => (
                            <VideoWithThumb index={index} video={item.video} thumb={item.thumb} label={item.label} />
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="pt-16">
                <div className="relative  border border-[#B1CC40]">
                    <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="bg-[#dee2e2] text-kow-text-black px-12 py-1 text-3xl md:text-4xl  font-bold text-center">
                            {`VIDEOS`}
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default VideoSlider;
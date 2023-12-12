import { useEffect } from 'react'
import ReactCompareImage from 'react-compare-image'
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

const VideoSlider = () => {
    const sliderList = [
        {
            "thumb": "/img/video_slider/video-slider-1.jpg",
            "video": "/img/sl.jpg",
            "label": "Photo recolor"
        },
        {
            "thumb": "/img/video_slider/video-slider-2.jpg",
            "video": "/img/sl-2.jpg",
            "label": "Background removal"
        },
        {
            "thumb": "/img/video_slider/video-slider-3.jpg",
            "video": "/img/sl-3.jpg",
            "label": "Background removal"
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
                            <div className='flex flex-col mx-1 gap-2'>
                                <div key={index} className='z-10 float-left relative h-full'>
                                    <img className='w-full h-full object-cover' src={item.thumb} alt="slider" />
                                    <div className='absolute bottom-2 left-0 w-full flex justify-center' style={{height:'auto'}}> 
                                        <div className='text-xl flex gap-3 text-white items-center'>
                                        <span>{item.label}</span>
                                       <img src='/img/video_slider/play-icon.svg' className='w-[20px] h-[20px]' alt="slider" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
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
        </div>
    )
}

export default VideoSlider;
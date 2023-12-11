import { useEffect } from 'react'
import ReactCompareImage from 'react-compare-image'
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

const ImageSlider = () => {
    const sliderList = [
        {
            "after": "/img/sl.png",
            "before": "/img/sl.jpg",
            "lebel": "Photo recolor"
        },
        {
            "after": "/img/sl-2.png",
            "before": "/img/sl-2.jpg",
            "lebel": "Background removal"
        },
        {
            "after": "/img/sl-3.png",
            "before": "/img/sl-3.jpg",
            "lebel": "Background removal"
        }, {
            "after": "/img/sl.png",
            "before": "/img/sl.jpg",
            "lebel": "Photo recolor"
        },
        {
            "after": "/img/sl-2.png",
            "before": "/img/sl-2.jpg",
            "lebel": "Background removal"
        },
        {
            "after": "/img/sl-3.png",
            "before": "/img/sl-3.jpg",
            "lebel": "Background removal"
        }
    ]


    return (
        <div className='py-20'>
            <div className='2xl:container 2xl:mx-auto '>
                <div className='relative w-full h-[400px]'>
                    <Carousel uniqueId="id_1011"
                        delay={5000}
                        indicators={false}
                        item={2}
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
                                    <ReactCompareImage
                                        leftImage={item.after}
                                        rightImage={item.before}
                                    />
                                </div>
                                <h4 className='text-2xl font-semibold text-kow-text-black uppercase text-center first-letter:text-3xl first-letter:font-bold'>{item.lebel}</h4>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="pt-10">
                    <div className="relative  border border-[#B1CC40]">
                        <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="bg-[#dee2e2] text-kow-text-black px-12 py-1 text-3xl md:text-4xl  font-bold text-center">
                                {`IMAGES`}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;
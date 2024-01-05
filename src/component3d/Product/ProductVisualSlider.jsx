import React from 'react';
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import Heading from '../Heading/Heading';

const ProductVisualSlider = () => {
    const sliderList = [
        {
            "image": "/img/3d/slider/IV.jpg",
            "label": "INTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/EV.jpg",
            "label": "EXTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/VR.jpg",
            "label": "VR RENDERING",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/IV.jpg",
            "label": "INTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/EV.jpg",
            "label": "EXTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/VR.jpg",
            "label": "VR RENDERING",
            "link": "#"
        }

    ]

    return (
        <div className=' py-6' >
            <div>

                <div className='2xl:container 2xl:mx-auto '>
                    <div className='relative w-full '>
                        <Carousel uniqueId="id_125" delay={5000}
                            item={2}
                            indicators={false}
                            responsive={[
                                {
                                    breakPoint: 641,
                                    item: 1
                                },
                                {
                                    breakPoint: 1025,
                                    item: 2,
                                }
                            ]
                            }
                        >
                            {sliderList.map((item, index) => (
                                // <div className='h-full px-2'><img src={item.image}/></div>
                                <div className='relative flex flex-col md:block mx-2 cursor-pointer'>
                                    <div>
                                        <img src={item.image} className="w-full object-cover" />
                                    </div>
                                    <div className='w-full flex gap-3 py-4 justify-center'>
                                        <h5 className='text-black font-medium'>{item.label}</h5>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            <Heading className="pt-12 pb-7" titleClassName="w-[1500px]" title="PRODUCT VISUALIZATION" />

        </div>
    );
};

export default ProductVisualSlider;
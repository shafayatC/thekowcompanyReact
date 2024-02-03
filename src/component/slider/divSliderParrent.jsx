import React, { useEffect, useState } from 'react';
import DivSlider from './divSlider';
import ReactCompareImage from 'react-compare-image';
import arrowImage from '../../images/arrow.png';

const DivSliderParrent = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const sliderList = [
        {
            "after": "/img/Image_Slider/Background Removal_raw.jpg",
            "before": "/img/Image_Slider/Background Removal_output.jpg",
            "lebel": "Background removal"
        },
        {
            "after": "/img/Image_Slider/Ghost Mannequin_raw.jpg",
            "before": "/img/Image_Slider/Ghost Mannequin_output.jpg",
            "lebel": "Ghost Mannequin"
        },
        {
            "after": "/img/Image_Slider/Manipulation_raw.jpg",
            "before": "/img/Image_Slider/Manipulation_output.jpg",
            "lebel": "Manipulation"
        }, {
            "after": "/img/Image_Slider/Photo Recolor_raw.jpg",
            "before": "/img/Image_Slider/Photo Recolor_output.jpg",
            "lebel": "Photo Recolor"
        },
        {
            "after": "/img/Image_Slider/Retouching_raw.jpg",
            "before": "/img/Image_Slider/Retouching_output.jpg",
            "lebel": "Retouching"
        }
    ]
    // Use slice to get the last two elements
    const lastOneItems = sliderList.slice(-1);
    // Use slice to get the last two elements
    const lastTwoItems = sliderList.slice(-2);
    const firstOneItems = sliderList.slice(0, 1);
    const firstTwoItems = sliderList.slice(0, 2);

    const divStyle = {
        width: 350,
        marginLeft: 10,
        marginRight: 10
    }

    const nextSlidFunc = () => {
        setCurrentPosition((pos) => pos + 1);
    }
    const prevSlidFunc = () => {
        setCurrentPosition((pos) => pos - 1);
    }
    useEffect(() => {
        var containers = document.querySelectorAll('[data-testid="container"]');

        // Apply the CSS styles to each selected element
        containers.length > 0 && setTimeout(() => {
            containers.forEach((container) => {
                container.style.height = '100%';
            });
        }, 100);
    }, [])
    return (
        <div id='images' className='pt-0 md:pt-5 pb-0 md:pb-7'>
             <div className='flex justify-center gap-7 my-10'>
                    <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                    <h1 className='text-[28px] md:text-[40px]  -mb-2 lg:-mb-4 font-bold'>IMAGES</h1>
                    <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                </div>
            <div className='relative 2xl:container 2xl:mx-auto 2xl:px-0 h-[400px] lg:h-[337px] xl:h-[423px] 2xl:h-[508px] '>
                <div className=''>
                    <button
                        disabled={currentPosition === 0}
                        className='bg-[#666] lg:bg-transparent py-2 lg:py-0 px-2 absolute top-1/2 left-0 z-40 -translate-y-1/2  disabled:opacity-10 cursor-pointer' onClick={prevSlidFunc}
                    //  disabled={currentPosition === -((sliderList.length - 1))}
                    >
                        <img src={arrowImage} width={25} height={25} alt="" />
                    </button>
                    <button
                        disabled={currentPosition === (sliderList.length - 1)}
                        className='bg-[#666] lg:bg-transparent py-2 lg:py-0 px-2 absolute top-1/2 right-0 z-40 -translate-y-1/2 disabled:opacity-10 cursor-pointer' onClick={nextSlidFunc}>
                        <img className='rotate-180' src={arrowImage} width={25} height={25} alt="" />
                    </button>
                </div>
                {/* <div className='2xl:container 2xl:mx-auto h-[350px] grid grid-cols-1 lg:grid-cols-[350px_auto_350px] gap-3'> */}
                <div className='2xl:container 2xl:mx-auto h-full grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <div className='hidden lg:block'>

                        <DivSlider startPos={1} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length + 3}>
                            <>

                                {lastOneItems.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            <img className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}
                                {sliderList.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            <img className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}
                                {firstTwoItems.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            <img className='w-auto h-full  object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}

                            </>
                        </DivSlider>
                    </div>
                    <div>
                        <DivSlider startPos={1} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length + 1}>
                            <>
                                {sliderList.map((item, index) => (
                                    <div key={index} className='z-10 float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='compareImageParrent w-full h-full relative'>
                                            <ReactCompareImage
                                                leftImage={item.after}
                                                rightImage={item.before}
                                            />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}
                                {firstOneItems.map((item, index) => (
                                    <div key={index} className='z-10 float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='compareImageParrent w-full h-full relative'>
                                            <ReactCompareImage
                                                leftImage={item.after}
                                                rightImage={item.before}
                                            />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}
                            </>
                        </DivSlider>
                    </div>
                    <div className='hidden lg:block'>
                        <DivSlider startPos={2} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length + 2}>
                            <>
                                {sliderList.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            <img className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}
                                {firstTwoItems.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            <img className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' />
                                        </div>
                                        <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h4>
                                    </div>
                                ))}
                            </>
                        </DivSlider>
                    </div>
                </div>

            </div>
            <div className='container mx-auto mt-10'>
               
                <p className='text-xs md:text-sm px-[54px] text-center'>{`The KOW Company's unparalleled post-production services serve as a dynamic catalyst for global retailers. Picture a visual journey where Image Retouching transcends the ordinary, transforming each product shot into a magnetic narrative that accentuates every exceptional detail.`}</p>
                <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`Experience a palette of color brilliance, where each hue harmonizes to craft the perfect ambiance for brands. We tailor the product visuals for any platform, making sure your products radiate brilliance, whether on a website, social media, or in print.`}</p>

                <div className='flex justify-center '>
                    <button className='text-xs md:text-sm font-semibold text-white px-6 py-1 bg-[#7C9C30] rounded-3xl'>Avail Image Retouching at Scale</button>
                </div>
            </div>
        </div>
    );
};

export default DivSliderParrent;
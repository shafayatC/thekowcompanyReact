import React from 'react';

const StartPage = () => {
    return (
        <div className='bg-[url("/img/3d/bg.jpg")] overflow-hidden bg-cover min-h-screen flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='flex justify-end'>
                    <div className='relative'>
                        <h3 className='text-[80px] font-bold leading-[80px]'>3D PRODUCT</h3>
                        <h3 className='text-[85px] leading-[85px] pb-4 text-[#8abc8b]'>MODELING</h3>
                        <div className='flex justify-center'>
                            <button className='bg-[url("/img/3d/button.png")] text-[25px] font-medium text-white justify-self-center py-8 px-[75px] bg-[length:100%_100%] bg-no-repeat'>GET QUOTE</button>
                        </div>
                        <img className='absolute -top-[50px] -right-[65px] w-[120px]' src='/img/3d/Green-Ball.png' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
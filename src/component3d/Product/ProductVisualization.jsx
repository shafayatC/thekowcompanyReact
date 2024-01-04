import React from 'react';
import Heading from '../Heading/Heading';

const ProductVisualization = () => {
    return (
        <div className='bg-[#f4f6f0] py-8'>
            <div className='2xl:container 2xl:mx-auto'>
                <div className='flex justify-center'>
                    <img className='w-[40%]' src='/img/3d/ppv.svg' />
                </div>
            </div>
            <Heading className="pt-12 pb-7" titleClassName="w-[1500px]" title="PRODUCT VISUALIZATION"/>
        </div>
    );
};

export default ProductVisualization;
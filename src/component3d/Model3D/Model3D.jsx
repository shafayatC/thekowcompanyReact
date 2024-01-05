import React from 'react';
import Heading from '../Heading/Heading';

const Model3D = () => {
    return (
        <div className=' py-8'>
            <div className='2xl:container 2xl:mx-auto'>
                <div className='flex justify-center'>
                    <img className='w-[350px]' src='/img/3d/chair.png' />
                </div>
            </div>
            <Heading className="pt-12 pb-7" titleClassName="w-[1500px]" title="3D MODEL"/>
        </div>
    );
};

export default Model3D;
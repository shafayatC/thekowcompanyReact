import React from 'react';

const ServiceList = ({ icon, title, description, divider = false }) => {
    return (
        <div className='flex items-end justify-center gap-32'>
           {divider && <div className='w-[2px] h-20 bg-gradient-to-t from-[#4f9e75]  to-[#cddcc8]'></div>} 
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={icon} alt='service icon' />
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <h4>{title}</h4>
                    <p className='w-[150px] text-center'>{description}</p>
                </div>
            </div>
            {divider && <div className='w-[2px] h-20 bg-gradient-to-t from-[#4f9e75]  to-[#cddcc8]'></div> }
        </div>
    );
};

export default ServiceList;
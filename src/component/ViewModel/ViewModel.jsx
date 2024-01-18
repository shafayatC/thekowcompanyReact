import React, { useRef } from 'react';
import { Suspense } from 'react';
import { useState } from 'react';
// import Image3DView from '../Image3DView/Image3DView';
import { lazy } from 'react';

const Image3DView = lazy(() => import('../../component/Image3DView/Image3DView'));


const ViewLoading = ({ imgSample }) => {
    return (
        <div className='w-full h-full relative flex flex-col justify-center'>
            <img className='mx-auto w-full h-full' src={imgSample} />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center z-50 text-center font-bold text-3xl'>
                <i class="fa-solid fa-circle-notch text-shade-color animate-spin"></i>
            </div>
        </div>
    )
}
const ViewModel = ({ imgSample, imageList = [] }) => {
    const [getViewSample, setViewSample] = useState(false);

   return (
        <>
            <div onMouseEnter={() => setViewSample(true)} className='h-full w-full relative cursor-pointer'>

                {
                    imageList.length == 0 ?
                        <Suspense fallback={<div className='w-full h-full bg-slate-400 animate-pulse'></div>}>
                            <img className='w-full h-full' src={imgSample} />
                        </Suspense> :
                        getViewSample == false &&
                        <Suspense fallback={<div className='w-full h-full bg-slate-900 animate-pulse'></div>}>
                            <img className='w-full h-full' src={imgSample} />
                        </Suspense>
                }

                {getViewSample && imageList.length > 0 &&
                    <Suspense fallback={<ViewLoading imgSample={imgSample} />}>
                        <Image3DView imageList={imageList} />
                    </Suspense>
                }
            </div>



        </>

    );
};

export default ViewModel;
import React, { useRef, useState } from 'react';

const Image3DViewDrag = ({ imageList = [] }) => {

    const viewSliderRef = useRef();
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseEnterPoint, setMouseEnterPoint] = useState(null);
    const [lastPersentise, setLastPersentise] = useState(null);
    const [takeLastPersentise, setTakeLastPersentise] = useState(null);

    const mouseEnterFunction = (e) => {
        setMouseEnterPoint(() => e.nativeEvent.offsetX);
        setIsMouseDown(true);
    }

    const mouseUpFunction = (e) => {

        // const slideWrap = viewSliderRef.current;
        // const sldChild = slideWrap.getElementsByClassName("sl3d");


        // const totalWidth = slideWrap.offsetWidth;
        // const mousePoint = e.nativeEvent.offsetX;
        // const mousePosResult = mouseEnterPoint - mousePoint;
        // const mousePercentage = (100 / totalWidth) * mousePosResult;
        // const imagePercentage = Math.floor(mousePercentage);
        // const imageIndexCall = imagePercentage > -1 ? imagePercentage : 100 + imagePercentage;


        setTakeLastPersentise(lastPersentise);


    }
    const scrollSlide = (e) => {
        if (isMouseDown) {
            console.log(mouseEnterPoint)

            const slideWrap = viewSliderRef.current;
            const sldChild = slideWrap.getElementsByClassName("sl3d");

            const totalWidth = slideWrap.offsetWidth;
            const mousePoint = e.nativeEvent.offsetX;
            const mousePosResult = mouseEnterPoint - mousePoint;
            const mousePercentage = (100 / totalWidth) * mousePosResult;
            const imagePercentage = Math.floor(mousePercentage);
            let imageIndexCall = takeLastPersentise !== null ?
                takeLastPersentise + imagePercentage :
                imagePercentage > -1 ? imagePercentage : 100 + imagePercentage;

            imageIndexCall = imageIndexCall > 100 ?
                imageIndexCall - 100 : imageIndexCall < 0 ? 100 + imageIndexCall : imageIndexCall;
            setLastPersentise(() => imageIndexCall);

            if (imageIndexCall > -1 && imageIndexCall < sldChild.length) {
                // slideWrap.style.backgroundImage = `url('${imageList[imageIndexCall]}')`;
                for (let i = 0; i < sldChild.length; i++) {
                    sldChild[i].style.opacity = '0'
                }
                sldChild[imageIndexCall].style.opacity = '1'
            }

            console.log('mousePoint ' + mousePoint + " imagePercentage : " + imagePercentage + " imageIndexCall : " + imageIndexCall);
        }

    };

    const leaveFromSld = () => {
        const slideWrap = viewSliderRef.current;
        const sldChild = slideWrap.getElementsByClassName("sl3d");
        for (let i = 0; i < sldChild.length; i++) {
            sldChild[i].style.opacity = '0'
        }
        sldChild[0].style.opacity = '1'
    }

    const handleTouchMove = (event) => {
        event.preventDefault();
        const mTouch = event.target.getBoundingClientRect()
        const offsetX = (event.touches[0].clientX - window.pageXOffset - mTouch.left)


    }

    return (
        <>
            {console.log("takeLastPersentise : " + takeLastPersentise)}
            <div ref={viewSliderRef} onTouchMove={handleTouchMove}
                onMouseDown={mouseEnterFunction}
                onMouseUp={(e) => { setIsMouseDown(false); mouseUpFunction(e) }}
                onMouseMove={scrollSlide}
                // onMouseLeave={leaveFromSld} 
                className='w-full h-full bg-[length:100%_100%] relative cursor-move'>
                {/* <div ref={viewSliderRef} onTouchMove={handleTouchMove}  onMouseMove={handleTouchMove} onMouseLeave={leaveFromSld} className='w-full h-full bg-[length:100%_100%] relative'> */}
                {imageList.map((data, index) =>
                        index == 0 ?
                         <img draggable="false" className="sl3d absolute top-0 left-0 w-full h-full opacity-1" src={data} />
                         :
                         <img draggable="false" className="sl3d absolute top-0 left-0 w-full h-full opacity-0" src={data} />

                )}
            </div>
        </>

    );
};

export default Image3DViewDrag;
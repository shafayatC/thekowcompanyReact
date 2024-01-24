
import ReactCompareImage from 'react-compare-image'
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

const ImageSlider = () => {
    const sliderList = [
      
        // {
        //     "after": "/public/img/Image_Slide_2D/Color-Correction_A.jpg",
        //     "before": "/public/img/Image_Slide_2D/Color-Correction_B.jpg",
        //     "lebel": "Background removal"
        // },
        {
            "after": "/public/img/Image_Slide_2D/Ghost-Mannequin_B.jpg",
            "before": "/public/img/Image_Slide_2D/Ghost-Mannequin_A.jpg",
            "lebel": "Ghost Mannequin"
        }, 
        {
            "after": "/public/img/Image_Slide_2D/Photo-Recolor_B.jpg",
            "before": "/public/img/Image_Slide_2D/Photo-Recolor_A.jpg",
            "lebel": "Photo Recolor"
        },
        {
            "after": "/public/img/Image_Slide_2D/Hair-Masking_B.jpg",
            "before": "/public/img/Image_Slide_2D/Hair-Masking_A.jpg",
            "lebel": "Hair Masking"
        },
       
        {
            "after": "/public/img/Image_Slide_2D/Photo-Retouch_B.jpg",
            "before": "/public/img/Image_Slide_2D/Photo-Retouch_A.jpg",
            "lebel": "Photo Retouch"
        }
        ,
        {
            "after": "/public/img/Image_Slide_2D/Color-Correction_B.jpg",
            "before": "/public/img/Image_Slide_2D/Color-Correction_A.jpg",
            "lebel": "Color Correction"
        },
    ]


    return (
        <div className='py-20' id='services'>
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
                            // eslint-disable-next-line react/jsx-key
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
    )
}

export default ImageSlider;
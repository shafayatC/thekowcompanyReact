import  { useState } from 'react';


import { MdArrowBackIosNew , MdArrowForwardIos  } from "react-icons/md";
const Blog2D = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    { id: 1, text: 'Photography Tips for Beginners',text2: "01 JAN, 2023", button: 'Read More', imageUrl : "/src/images/blog5.png"},
    { id: 2, text: 'Top 8 Food Photography Tips For Beginners',button: 'Read More',text2: "01 JAN, 2023", imageUrl : "/src/images/blog4.png" },
    { id: 3, text: 'Easy Product Photography Solutions for Small Business',button: 'Read More',text2: "01 JAN, 2023",  imageUrl : "/src/images/blog6.png"},
   
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === visibleDivs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visibleDivs.length - 1 : prevIndex - 1
    );
  };

  const getVisibleDivs = () => {
    const endIndex = currentIndex + 1 >= visibleDivs.length ? 0 : currentIndex + 1;
    const middleIndex = currentIndex;
    const startIndex = currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    return [visibleDivs[startIndex], visibleDivs[middleIndex], visibleDivs[endIndex]];
  };

  return (
 <div id='2d-trends' className='pt-24'>
      <div className='container mx-auto'>
     <div className='flex justify-center items-center gap-5 '>
      <button onClick={handlePrev}><MdArrowBackIosNew className='text-3xl -mt-16'/></button>
      <div className='flex justify-center gap-2'>
        {console.log(getVisibleDivs())}
        {getVisibleDivs().map((div) => (
          <div className='flex-col items-center justify-center ' key={div.id}>
            <div>
            <img className='w-full' src={div.imageUrl} alt={div.text} />
            </div>
            <div className='flex flex-col items-center gap-2 pt-5 pb-10'>
            <div className='flex justify-center items-center gap-2 '>
            <p className='text-[14px] font-semibold'>{div.text} |</p>
            <p className='text-[9px]'>{div.text2}</p>
            </div>
            <button className='bg-[#B1CC40] px-6 py-1 rounded-3xl font-semibold text-[10px]'>{div.button}</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext}><MdArrowForwardIos  className='text-3xl -mt-16'/></button>
    </div>
   </div>
   <div className="pb-24 pt-7">
        <div className="relative  border border-[#B1CC40]">
          <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#DEE2E2] px-12 py-1 text-3xl md:text-4xl text-kow-text-black text-center  font-bold">
              {`2D TRENDS`}
            </span>
          </h2>
        </div>
      </div>
 </div>
  );
};

export default Blog2D;

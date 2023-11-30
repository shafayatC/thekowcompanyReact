import  { useState } from 'react';
import './style.css';

const Carousel = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    { id: 1, text: 'Text 1', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg' },
    { id: 2, text: 'Text 2', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg' },
    { id: 3, text: 'Text 3', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg' },
    { id: 4, text: 'Text 4', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg' },
    { id: 5, text: 'Text 5', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleDivs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visibleDivs.length - 3 : prevIndex - 1
    );
  };

  const getVisibleDivs = () => {
    const endIndex = currentIndex + 3 > visibleDivs.length ? visibleDivs.length : currentIndex + 3;
    return visibleDivs.slice(currentIndex, endIndex);
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <div className='carousel-container'>
        {getVisibleDivs().map((div) => (
          <div className='carousel-item' key={div.id}>
            <img className='w-80' src={div.imageUrl} alt={div.text} />
            <p>{div.text}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;

import { useState, useEffect } from 'react';
import './LightboxSlideshow.css';
import '../../App.css';

function LightboxSlideshow ({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Reset the timer whenever the index changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAutoPlaying) {
        handleNext();
      }
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isAutoPlaying]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(true);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(true);
  };
  
  // If no slides provided, show a placeholder
  if (!slides.length) {
    return (
      <div className="lightbox-empty">
        <p className="lightbox-empty-text">No slides to display</p>
      </div>
    );
  }
  
  const currentSlide = slides[currentIndex];
  
  return (
    <div className="lightbox-container">
      {/* <h3 className="lightbox-title">{currentSlide.title}</h3> */}

        {/* Navigation - Left */}
      <div className="lightbox-nav-left">
        <button 
          onClick={handlePrev}
          className="lightbox-nav-button"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lightbox-arrow">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="lightbox-content">
        
        {/* Image*/}
        {currentSlide.imageUrl && (
          <div className="lightbox-image-wrapper">
            <img 
              src={currentSlide.imageUrl} 
              alt={currentSlide.title}
              className="lightbox-image"
            />
          </div>
        )}
        
        {/* Text content */}
          <h3 className="lightbox-description">{currentSlide.description}</h3>
      </div>
      
      {/* Navigation - Right */}
      <div className="lightbox-nav-right">
        <button 
          onClick={handleNext}
          className="lightbox-nav-button"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lightbox-arrow">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Slide indicator */}
      <div className="lightbox-indicator-container">
        <div className="lightbox-indicator-wrapper">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`lightbox-indicator-dot ${index === currentIndex ? 'lightbox-indicator-active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightboxSlideshow;
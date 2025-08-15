import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";

const GalleryBox = ({ open, toggle }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  
  // Photo paths - using correct paths for GitHub Pages with proper case
  const photos = [
    { src: "/Portfolio/assets/photo1.jpg", alt: "Photo 1" },
    { src: "/Portfolio/assets/photo2.jpg", alt: "Photo 2" },
    { src: "/Portfolio/assets/photo3.jpg", alt: "Photo 3" },
    { src: "/Portfolio/assets/photo4.jpg", alt: "Photo 4" },
    { src: "/Portfolio/assets/photo5.jpg", alt: "Photo 5" },
    { src: "/Portfolio/assets/photo6.jpg", alt: "Photo 6" }
  ];
  
  const openModal = (photo, index) => {
    setSelectedPhoto({ ...photo, index });
    setCurrentSlideIndex(index);
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % photos.length;
    setCurrentSlideIndex(nextIndex);
    setSelectedPhoto({ ...photos[nextIndex], index: nextIndex });
  };

  const prevSlide = () => {
    const prevIndex = currentSlideIndex === 0 ? photos.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(prevIndex);
    setSelectedPhoto({ ...photos[prevIndex], index: prevIndex });
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
    console.log(`Failed to load image: ${photos[index].src}`);
  };

  const startSlideshow = (e) => {
    e.stopPropagation();
    if (photos.length > 0) {
      openModal(photos[0], 0);
    }
  };

  return (
    <div className="relative">
      <div
        className={`bg-white border-4 border-indigo-300 rounded-3xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
          open ? "min-h-80 pb-6" : "h-48"
        }`}
        onClick={toggle}
        style={{
          background: open 
            ? 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)'
        }}
      >
        <div className="p-6 relative">
          {/* Box Design Elements */}
          <div className="absolute top-2 left-2 w-4 h-4 border-2 border-indigo-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-2 border-indigo-400 rounded-full"></div>
          
          {/* Box Tape Effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-indigo-200 rounded-b-lg opacity-80"></div>

          <div className="flex items-center justify-center mb-4 mt-2">
            <h2 className="text-2xl font-bold text-indigo-800">Gallery</h2>
          </div>

          {open ? (
            <div className="animate-fadeIn">
              <div className="bg-white/70 rounded-2xl p-4 border border-indigo-200">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md bg-indigo-50 border border-indigo-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(photo, index);
                      }}
                    >
                      {!imageErrors[index] ? (
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                          onError={() => handleImageError(index)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-indigo-100 rounded-lg border-2 border-dashed border-indigo-300 flex items-center justify-center hover:bg-indigo-200 transition-colors">
                          <div className="text-center text-indigo-600">
                            <ImageIcon size={20} className="mx-auto mb-1 opacity-70" />
                            <span className="text-xs">Photo {index + 1}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button
                    onClick={startSlideshow}
                    className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold hover:bg-indigo-200 transition-colors inline-flex items-center space-x-2 text-sm"
                  >
                    <span>🎞️</span>
                    <span>View Slideshow</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-indigo-600 opacity-80 mt-4">
              <div className="text-4xl mb-2">👆🏻</div>
              <div className="text-sm font-medium">Click to open!</div>
            </div>
          )}
        </div>
      </div>

      {/* Photo Modal/Slideshow */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            {/* Main Image */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            
            {/* Photo Counter */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              Photo {selectedPhoto.index + 1} of {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryBox;
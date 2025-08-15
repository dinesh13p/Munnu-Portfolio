import React from "react";

const Header = ({ letterOpen, setLetterOpen }) => {
  return (
    <>
      {/* Separate Header Background Section */}
      <div className="fixed top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 z-10"></div>
      
      {/* Header Content */}
      <header className="fixed top-0 left-0 right-0 p-4 md:p-6 z-30 h-32 md:h-40">
        <div className="flex items-center justify-between h-full">
          {/* Profile Picture - Top Left */}
          <div className="relative z-40">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white/70 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
              <img 
                src="/src/assets/ProfilePicture.jpg" 
                alt="Sandhya Paudel" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.log('Image failed to load, trying alternative paths...');
                  const alternatives = [
                    './src/assets/ProfilePicture.jpg',
                    'src/assets/ProfilePicture.jpg',
                    'assets/ProfilePicture.jpg',
                    './assets/ProfilePicture.jpg'
                  ];
                  let currentIndex = alternatives.indexOf(e.target.src.split('/').slice(-3).join('/'));
                  if (currentIndex < alternatives.length - 1) {
                    e.target.src = alternatives[currentIndex + 1];
                  } else {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-4xl md:text-5xl">👤</div>';
                  }
                }}
              />
            </div>
            {/* Optional subtle animation ring */}
            <div className="absolute -inset-1 md:-inset-2 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 opacity-40 animate-pulse -z-10"></div>
          </div>
          
          {/* Interactive Envelope Letter - Mobile: Overlays profile, Desktop: Top Right */}
          <div
            className={`transition-all duration-700 cursor-pointer transform hover:scale-105 ${
              letterOpen
                ? "fixed md:relative top-16 md:top-0 left-2 md:left-0 right-2 md:right-0 bg-white/95 md:bg-white/90 p-3 md:p-6 rounded-2xl shadow-2xl border-2 border-pink-200 backdrop-blur-sm z-50 text-xs md:text-base min-w-0 md:min-w-80 max-w-none md:max-w-md"
                : "relative md:relative bg-white/80 p-2 md:p-4 rounded-xl shadow-lg hover:shadow-xl border border-pink-100 backdrop-blur-sm z-40"
            }`}
            onClick={() => setLetterOpen(!letterOpen)}
          >
            {letterOpen ? (
              <div className="text-pink-800 relative">
                {/* Envelope opened state */}
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-base md:text-2xl opacity-70">
                  ✉️
                </div>
                <div className="text-center space-y-1 md:space-y-3">
                  <div className="text-xs md:text-xl font-bold text-pink-700 border-b border-pink-200 pb-1 md:pb-2">
                    💌 A Message From Me
                  </div>
                  <p className="text-xs md:text-lg font-medium">Hi! I'm Sandhya Paudel.</p>
                  <p className="text-xs md:text-base text-pink-600">Welcome to my portfolio ✨</p>
                  <p className="text-xs md:text-sm text-pink-500 italic">Click again to close</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-xl md:text-4xl mb-1" title="Click to read my message">
                  💌
                </div>
                <div className="text-xs text-pink-600 font-medium hidden md:block">
                  Click me!
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
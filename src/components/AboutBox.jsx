import React from "react";

const AboutBox = ({ open, toggle }) => {
  return (
    <div className="relative">
      <div
        className={`bg-white border-4 border-pink-300 rounded-3xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
          open ? "min-h-80 pb-6" : "h-48"
        }`}
        onClick={toggle}
        style={{
          background: open 
            ? 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #fdf2f8 100%)'
        }}
      >
        <div className="p-6 relative">
          {/* Box Design Elements */}
          <div className="absolute top-2 left-2 w-4 h-4 border-2 border-pink-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-2 border-pink-400 rounded-full"></div>
          
          {/* Box Tape Effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-pink-200 rounded-b-lg opacity-80"></div>
          
          <div className="flex items-center justify-center mb-4 mt-2">
            <h2 className="text-2xl font-bold text-pink-800">About Me</h2>
          </div>

          {open ? (
            <div className="text-pink-700 space-y-4 animate-fadeIn">
              <div className="bg-white/70 rounded-2xl p-4 border border-pink-200">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <p><strong>Name:</strong> Sandhya Paudel</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p><strong>Profession:</strong> Student</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p><strong>Interests:</strong> <ul itemType="list"> <li>Writing </li><li>Biotechnology enthusiast</li><li>Counselling enthusiast</li></ul></p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p><strong>Experience:</strong> UN Volunteer</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-pink-600 opacity-80 mt-4">
              <div className="text-4xl mb-2">👆🏻</div>
              <div className="text-sm font-medium">Click to open!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
import React, { useRef, useEffect } from "react";

const FloatingElements = ({ isPlaying = false, setIsPlaying = () => {} }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/src/assets/SummerTimeSadness.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Flower Vase - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-20">
        <div className="relative">
          {/* Vase */}
          <div className="w-16 h-20 bg-gradient-to-b from-amber-200 to-amber-400 rounded-t-3xl rounded-b-lg relative border-4 border-amber-300 shadow-lg">
            {/* Vase decorative elements */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-amber-300 rounded-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-amber-400 rounded-full"></div>
            
            {/* Flowers in vase */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                <span className="text-lg animate-pulse">🌸</span>
                <span className="text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>🌺</span>
                <span className="text-lg animate-pulse" style={{ animationDelay: '1s' }}>🌸</span>
              </div>
            </div>
          </div>
          
          {/* Vase base/stand */}
          <div className="w-20 h-3 bg-gradient-to-r from-amber-300 to-amber-400 rounded-lg mx-auto -mt-1 border-2 border-amber-300"></div>
        </div>
      </div>

      {/* Musical Note - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-20">
        <div
          className="cursor-pointer hover:scale-110 transition-transform duration-300 bg-white/80 p-4 rounded-full shadow-lg border-2 border-purple-200 backdrop-blur-sm"
          onClick={toggleMusic}
          title={isPlaying ? "Click to pause music" : "Click to play music"}
        >
          <div className="relative">
            {/* Musical Note Design */}
            <div className="text-4xl relative">
              {isPlaying ? (
                <div className="relative">
                  {/* Animated musical note */}
                  <div className="animate-bounce">🎵</div>
                  <div className="absolute -top-2 -right-2 text-xs animate-pulse">♪</div>
                  <div className="absolute -bottom-1 -left-2 text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>♫</div>
                </div>
              ) : (
                <div className="text-gray-600">🎶</div>
              )}
            </div>
            
            {/* Sound waves when playing */}
            {isPlaying && (
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '8px', animationDelay: '0s' }}></div>
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '12px', animationDelay: '0.2s' }}></div>
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '6px', animationDelay: '0.4s' }}></div>
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '10px', animationDelay: '0.6s' }}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingElements;
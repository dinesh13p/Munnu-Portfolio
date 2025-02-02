import React, { useState } from "react";

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-pink-200">
      {/* Flower vase throwing hearts */}
      <div className="relative">
        <div className="bg-green-500 w-8 h-16 rounded-t-lg"></div>
        <div className="absolute -top-4 left-4 animate-bounce">❤️</div>
      </div>

      {/* Musical sign */}
      <div
        className="text-4xl cursor-pointer"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "🎵" : "🎶"}
      </div>
      {isPlaying && (
        <audio autoPlay>
          <source src="path-to-your-audio-file.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}

export default Footer;
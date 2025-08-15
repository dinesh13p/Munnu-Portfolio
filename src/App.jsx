import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import AboutBox from "./components/AboutBox.jsx";
import ConnectBox from "./components/ConnectBox.jsx";
import GalleryBox from "./components/GalleryBox.jsx";
import ResumeBox from "./components/ResumeBox.jsx";
import FloatingElements from "./components/FloatingElements.jsx";

const App = () => {
  const [letterOpen, setLetterOpen] = useState(false);
  const [openBoxes, setOpenBoxes] = useState([false, false, false, false]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hearts, setHearts] = useState([]);

  const toggleBox = (index) => {
    setOpenBoxes((prev) => {
      const newBoxes = [...prev];
      newBoxes[index] = !newBoxes[index];
      return newBoxes;
    });
  };

  // Heart and flower animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100 + 50,
        y: Math.random() * 50 + 20,
        type: Math.random() > 0.5 ? 'heart' : 'flower',
        delay: Math.random() * 1000,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 10000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 font-sans relative overflow-hidden">
      {/* Floating Hearts and Flowers */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed animate-float-up pointer-events-none z-10"
          style={{
            left: `${heart.x}px`,
            bottom: '80px',
            animationDelay: `${heart.delay}ms`,
            animationDuration: "10s",
          }}
        >
          {heart.type === 'heart' ? '💖' : '🌸'}
        </div>
      ))}

      <Header letterOpen={letterOpen} setLetterOpen={setLetterOpen} />

      {/* Main content with proper top spacing for fixed header */}
      <main className="flex-1 min-h-screen flex items-center justify-center pt-36 md:pt-44 pb-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
          <AboutBox open={openBoxes[0]} toggle={() => toggleBox(0)} />
          <ConnectBox open={openBoxes[1]} toggle={() => toggleBox(1)} />
          <GalleryBox open={openBoxes[2]} toggle={() => toggleBox(2)} />
          <ResumeBox open={openBoxes[3]} toggle={() => toggleBox(3)} />
        </div>
      </main>

      <FloatingElements isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
};

export default App;
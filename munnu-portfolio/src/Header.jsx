import React from "react";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-pink-200">
      {/* Ribbon-shaped box */}
      <div className="bg-pink-500 text-white p-2 rounded-lg shadow-lg">
        Hello!
      </div>

      {/* Letter-shaped box */}
      <div
        className="bg-white p-2 rounded-lg shadow-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <div className="text-sm">
            Hi, I'm the Sandhya Paudel! Welcome to my portfolio.
          </div>
        ) : (
          "📩"
        )}
      </div>
    </div>
  );
}

export default Header;
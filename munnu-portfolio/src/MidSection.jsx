import React, { useState } from "react";

function MidSection() {
  const [drawers, setDrawers] = useState([false, false, false]);

  const toggleDrawer = (index) => {
    setDrawers((prevDrawers) => {
        const newDrawers = [...prevDrawers];
        newDrawers[index] = !newDrawers[index];
        return newDrawers;
      });
      
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {[0, 1, 2].map((index) => (
        <div key={index} className="bg-pink-300 p-4 rounded-lg shadow-lg">
          <div className="text-center font-bold">Cupboard {index + 1}</div>
          <div className="mt-2">
            <button
              className="bg-pink-500 text-white p-2 rounded-lg w-full"
              onClick={() => toggleDrawer(index)}
            >
              Open Drawer
            </button>
            {drawers[index] && (
              <div className="mt-2 bg-white p-2 rounded-lg">
                <p className="text-black">Info, images, and links go here.</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MidSection;
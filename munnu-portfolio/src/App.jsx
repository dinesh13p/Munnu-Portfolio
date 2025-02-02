import React from "react";
import Header from "./Header";
import MidSection from "./MidSection";
import Footer from "./Footer";


function App() {
  return (
   <div>
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="flex-grow">
        <MidSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
    </div>
  );
}

export default App;

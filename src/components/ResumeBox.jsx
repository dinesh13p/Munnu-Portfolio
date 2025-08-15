import React, { useState } from "react";
import { Download, FileText, AlertCircle, Eye } from "lucide-react";

const ResumeBox = ({ open, toggle }) => {
  const [downloadStatus, setDownloadStatus] = useState("");
  const [viewStatus, setViewStatus] = useState("");

  // Correct path for GitHub Pages
  const resumePath = "/Portfolio/assets/SandhyaResume.pdf";

  const downloadCV = async (e) => {
    e.stopPropagation();
    setDownloadStatus("downloading");

    try {
      const response = await fetch(resumePath);
      
      if (response.ok) {
        const blob = await response.blob();
        
        // Verify the blob is not empty
        if (blob.size === 0) {
          throw new Error("PDF file is empty");
        }
        
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Sandhya_Paudel_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        setDownloadStatus("success");
        setTimeout(() => setDownloadStatus(""), 2000);
      } else {
        throw new Error("File not found");
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus(""), 3000);
    }
  };

  const viewCV = async (e) => {
    e.stopPropagation();
    setViewStatus("loading");

    try {
      const response = await fetch(resumePath);
      
      if (response.ok) {
        const blob = await response.blob();
        
        // Verify the blob is not empty
        if (blob.size === 0) {
          throw new Error("PDF file is empty");
        }
        
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        
        // Clean up the URL after a delay
        setTimeout(() => window.URL.revokeObjectURL(url), 1000);
        
        setViewStatus("success");
        setTimeout(() => setViewStatus(""), 2000);
      } else {
        throw new Error("File not found");
      }
    } catch (error) {
      console.error("Error viewing resume:", error);
      setViewStatus("error");
      setTimeout(() => setViewStatus(""), 3000);
    }
  };

  const getDownloadButtonContent = () => {
    switch (downloadStatus) {
      case "downloading":
        return (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-rose-600"></div>
            <span>Downloading...</span>
          </>
        );
      case "success":
        return (
          <>
            <span>✅</span>
            <span>Downloaded!</span>
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle size={16} />
            <span>Try Again</span>
          </>
        );
      default:
        return (
          <>
            <Download size={16} />
            <span>Download PDF</span>
          </>
        );
    }
  };

  const getViewButtonContent = () => {
    switch (viewStatus) {
      case "loading":
        return (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>Loading...</span>
          </>
        );
      case "success":
        return (
          <>
            <span>✅</span>
            <span>Opened!</span>
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle size={16} />
            <span>Try Again</span>
          </>
        );
      default:
        return (
          <>
            <Eye size={16} />
            <span>View Online</span>
          </>
        );
    }
  };

  return (
    <div className="relative">
      <div
        className={`bg-white border-4 border-rose-300 rounded-3xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
          open ? "min-h-80 pb-6" : "h-48"
        }`}
        onClick={toggle}
        style={{
          background: open
            ? "linear-gradient(135deg, #fff1f2 0%, #fecdd3 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #fff1f2 100%)",
        }}
      >
        <div className="p-6 relative">
          {/* Box Design Elements */}
          <div className="absolute top-2 left-2 w-4 h-4 border-2 border-rose-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-2 border-rose-400 rounded-full"></div>

          {/* Box Tape Effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-rose-200 rounded-b-lg opacity-80"></div>

          <div className="flex items-center justify-center mb-4 mt-2">
            <h2 className="text-2xl font-bold text-rose-800">Resume</h2>
          </div>

          {open ? (
            <div className="text-center space-y-4 animate-fadeIn">
              <div className="bg-white/70 rounded-2xl p-4 border border-rose-200">
                {/* View Online Button */}
                <button
                  onClick={viewCV}
                  disabled={viewStatus === "loading"}
                  className={`inline-flex items-center space-x-2 px-4 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 transform text-sm mb-3 w-full justify-center ${
                    viewStatus === "error"
                      ? "bg-red-100 text-red-600 hover:bg-red-200"
                      : viewStatus === "success"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  } ${
                    viewStatus === "loading"
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:shadow-xl"
                  }`}
                >
                  {getViewButtonContent()}
                </button>

                {/* Download Button */}
                <button
                  onClick={downloadCV}
                  disabled={downloadStatus === "downloading"}
                  className={`inline-flex items-center space-x-2 px-4 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 transform text-sm w-full justify-center ${
                    downloadStatus === "error"
                      ? "bg-red-100 text-red-600 hover:bg-red-200"
                      : downloadStatus === "success"
                      ? "bg-green-100 text-green-600"
                      : "bg-rose-100 text-rose-600 hover:bg-rose-200"
                  } ${
                    downloadStatus === "downloading"
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:shadow-xl"
                  }`}
                >
                  {getDownloadButtonContent()}
                </button>

                {(downloadStatus === "error" || viewStatus === "error") && (
                  <p className="text-rose-600/80 text-xs mt-2">
                    Resume file not available. Please ensure SandhyaResume.pdf is in the public/assets folder.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-rose-600 opacity-80 mt-4">
              <div className="text-4xl mb-2">👆🏻</div>
              <div className="text-sm font-medium">
                Click to view and download my CV!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBox;
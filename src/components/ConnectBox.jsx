import React from "react";
import { 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone 
} from "lucide-react";

const ConnectBox = ({ open, toggle }) => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/shyxn",
      icon: Facebook,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/shsandhyap/",
      icon: Instagram,
      color: "from-pink-600 to-purple-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/paudelsandhya9b-source",
      icon: Github,
      color: "from-gray-700 to-gray-800"
    }
  ];

  const handleSocialClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (e, email) => {
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (e, phone) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="relative">
      <div
        className={`bg-white border-4 border-purple-300 rounded-3xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
          open ? "min-h-80 pb-6" : "h-48"
        }`}
        onClick={toggle}
        style={{
          background: open 
            ? 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%)'
        }}
      >
        <div className="p-6 relative">
          {/* Box Design Elements */}
          <div className="absolute top-2 left-2 w-4 h-4 border-2 border-purple-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-2 border-purple-400 rounded-full"></div>
          
          {/* Box Tape Effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-purple-200 rounded-b-lg opacity-80"></div>

          <div className="flex items-center justify-center mb-4 mt-2">
            <h2 className="text-2xl font-bold text-purple-800">Connect</h2>
          </div>

          {open ? (
            <div className="text-purple-700 space-y-4 animate-fadeIn">
              <div className="bg-white/70 rounded-2xl p-4 border border-purple-200">
                {/* Social Media Links */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={index}
                        onClick={(e) => handleSocialClick(e, social.url)}
                        className="flex items-center space-x-3 bg-purple-50 p-2 rounded-lg hover:bg-purple-100 transition-all duration-300 hover:scale-105 group"
                      >
                        <IconComponent size={16} className="group-hover:scale-110 transition-transform text-purple-600" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </button>
                    );
                  })}
                </div>
                
                {/* Contact Information */}
                <div className="space-y-2 pt-3 border-t border-purple-200">
                  <h3 className="font-semibold text-center mb-2 text-sm">Contact Info</h3>
                  
                  {/* Email Addresses */}
                  <button
                    onClick={(e) => handleEmailClick(e, 'sandhyaxdxdxd@gmail.com')}
                    className="flex items-center space-x-2 bg-purple-50 p-2 rounded-lg hover:bg-purple-100 transition-colors w-full text-xs"
                  >
                    <Mail size={12} />
                    <span>paudelsandhya9b@gmail.com</span>
                  </button>
                  
                  {/* Phone Number */}
                  <button
                    onClick={(e) => handlePhoneClick(e, '+9779866143134')}
                    className="flex items-center space-x-2 bg-purple-50 p-2 rounded-lg hover:bg-purple-100 transition-colors w-full text-xs"
                  >
                    <Phone size={12} />
                    <span>+977 9866143134</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-purple-600 opacity-80 mt-4">
              <div className="text-4xl mb-2">👆🏻</div>
              <div className="text-sm font-medium">Click to open!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectBox;
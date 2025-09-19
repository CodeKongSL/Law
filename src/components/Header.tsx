import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, Download, Smartphone } from 'lucide-react';

const Header = ({ onSignInOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinPopupOpen, setIsJoinPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top or scrolling up, hide when scrolling down
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding navbar
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: "Find Lawyers", href: "#search" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
  ];

  const cn = (...classes) => classes.filter(Boolean).join(' ');

  const handleJoinAsLawyer = () => {
    setIsJoinPopupOpen(true);
    setIsMenuOpen(false);
  };

  const handleDownload = () => {
    // You can replace this with your actual app download link
    window.open('https://your-app-store-link.com', '_blank');
  };

  return (
    <>
      {/* Background Blur Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 md:hidden transition-all duration-500" />
      )}
      
      <header className={cn(
        "fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 z-50 shadow-lg transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                LawyerSL
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-gray-900 transition-colors font-normal relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={onSignInOpen}
                className="text-gray-800 hover:text-gray-900 transition-colors font-normal px-4 py-2 rounded-lg hover:bg-white/30 backdrop-blur-sm"
              >
                Sign In
              </button>
              <button 
                onClick={handleJoinAsLawyer}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold backdrop-blur-sm"
              >
                Join as Lawyer
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-white/30 backdrop-blur-sm"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation with Glass Effect */}
          <div
            className={cn(
              "md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out",
              isMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4"
            )}
          >
            {/* Glass overlay background */}
            <div className="bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-2xl">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-6 px-2">
                  <div className="flex flex-col space-y-1 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-800 hover:text-blue-600 hover:bg-white/50 backdrop-blur-sm transition-all duration-200 font-normal px-4 py-3 rounded-xl text-center w-full max-w-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-3 pt-2 border-t border-white/40 items-center">
                    <button 
                      onClick={() => {
                        onSignInOpen();
                        setIsMenuOpen(false);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl text-sm font-normal shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] w-full max-w-xs backdrop-blur-sm"
                    >
                      Sign In
                    </button>
                    <button 
                      onClick={handleJoinAsLawyer}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl text-sm font-normal shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] w-full max-w-xs backdrop-blur-sm"
                    >
                      Join as Lawyer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Join as Lawyer Popup */}
      {isJoinPopupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setIsJoinPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Join as Lawyer</h2>
              <p className="text-blue-100">Get started with our mobile app</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  For the better user experience, we recommend you to download the mobile app.
                </p>
              </div>

              {/* Download button */}
              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Mobile App</span>
              </button>

              {/* Alternative option */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-3">
                  Or continue with web version
                </p>
                <button 
                  onClick={() => setIsJoinPopupOpen(false)}
                  className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Continue on Web
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
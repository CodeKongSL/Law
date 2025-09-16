import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, Star, Shield, Users, Clock, Menu, X, Scale } from 'lucide-react';
import SignUp from './SignUp';

const ModernHero = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navigation = [
    { name: "Find Lawyers", href: "#search" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle sign-in form submission (for demo, just logs the data)
  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Sign In Attempt:', { username, password });
    // Here you would typically send this data to your backend for authentication
    setIsSignInOpen(false); // Close dialog on submission (for demo)
  };

  const cn = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.01}%`,
            transition: 'all 0.3s ease'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LawyerSL
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={() => setIsSignInOpen(true)}
                className="text-white/80 hover:text-white transition-colors font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Join as Lawyer
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "md:hidden transition-all duration-300 ease-in-out",
              isMenuOpen
                ? "max-h-96 opacity-100 py-4"
                : "max-h-0 opacity-0 overflow-hidden"
            )}
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <button onClick={() => setIsSignInOpen(true)}
                  className="text-white/80 hover:text-white transition-colors font-medium text-left px-2 py-1">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm">
                  Join as Lawyer
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 pt-32">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 hover:bg-white/20 transition-all duration-300">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">Rated #1 Legal Platform 2025</span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Legal Help
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Reimagined
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered matching with top-rated lawyers. Get instant consultations,
            transparent pricing, and results that matter.
          </p>

          {/* Enhanced Search Bar */}
          <div className={`relative mb-12 transition-all duration-500 ${searchFocus ? 'transform scale-105' : ''}`}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative group">
                  <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 group-hover:text-white/80 transition-colors" />
                  <input
                    type="text"
                    placeholder="Legal Issue"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                  />
                </div>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 group-hover:text-white/80 transition-colors" />
                  <input
                    type="text"
                    placeholder="Your Location"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 group-hover:text-white/80 transition-colors" />
                  <select className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 appearance-none">
                    <option value="" className="bg-gray-800">Urgency</option>
                    <option value="urgent" className="bg-gray-800">Urgent (24h)</option>
                    <option value="week" className="bg-gray-800">This Week</option>
                    <option value="month" className="bg-gray-800">This Month</option>
                  </select>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl py-4 px-8 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Search className="w-5 h-5 mr-2 inline" />
                  Find Lawyers
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              Join Our Network
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Shield, number: "15K+", label: "Verified Lawyers" },
              { icon: Star, number: "4.9/5", label: "Client Rating" },
              { icon: Users, number: "200K+", label: "Cases Resolved" },
              { icon: Clock, number: "24/7", label: "Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Practice Areas */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Popular Practice Areas</h3>
            <div className="flex flex-wrap justify-center gap-4 pb-10">
              {[
                "Personal Injury", "Family Law", "Criminal Defense",
                "Business Law", "Real Estate", "Immigration",
                "Employment", "Bankruptcy"
              ].map((area, i) => (
                <button
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl rotate-12 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg rotate-45 animate-pulse delay-1000" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

      {isSignUpOpen && <SignUp openSignIn={()=> setIsSignInOpen(true)} onClose={ ()=>
        setIsSignUpOpen(false)
      }></SignUp>}

      {/* Sign In Dialog */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Sign In</h2>
              <button
                onClick={() => setIsSignInOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-white/80 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white/80 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>
            <p className="text-white/70 text-center mt-4">
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setIsSignUpOpen(true)
                  setIsSignInOpen(false)
                }
                }
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernHero;
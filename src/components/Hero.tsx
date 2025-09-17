import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Users, MapPin, TrendingUp, Award, Clock } from 'lucide-react';
import Header from '../components/Header';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
import CategoriesSection from '../components/CategoriesSection';
import AllCategoriesModal from '../components/AllCategoriesModal';
import DistrictModal from '../components/DistrictModal';

const ModernHero = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showDistrictModal, setShowDistrictModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  // Handle sign-in form submission
  const handleSignIn = (userData) => {
    console.log('Sign In Attempt:', userData);
    setIsSignInOpen(false);
    // Handle sign-in logic here
  };

  // Handle sign-up form submission
  const handleSignUp = (userData) => {
    console.log('Sign Up Attempt:', userData);
    setIsSignUpOpen(false);
    // Handle sign-up logic here
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDistrictModal(true);
  };

  // Handle view all categories
  const handleViewAllCategories = (categories) => {
    setAllCategories(categories);
    setShowAllCategories(true);
  };

  // Handle final selection result
  const handleFinalSelection = (category, district) => {
    console.log('Selected:', { category, district });
    setShowDistrictModal(false);
    alert(`Finding ${category.title} lawyers in ${district.name}...`);
  };

  const stats = [
    { 
      icon: Shield, 
      number: "15K+", 
      label: "Verified Lawyers",
      description: "Bar-certified professionals"
    },
    { 
      icon: Star, 
      number: "4.9/5", 
      label: "Client Rating",
      description: "Based on 50K+ reviews"
    },
    { 
      icon: Users, 
      number: "200K+", 
      label: "Cases Resolved",
      description: "Successfully handled"
    },
    { 
      icon: MapPin, 
      number: "25", 
      label: "Districts Covered",
      description: "Across Sri Lanka"
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Instant Matching",
      description: "Get matched with qualified lawyers in minutes"
    },
    {
      icon: Award,
      title: "Verified Experts",
      description: "All lawyers are bar-certified and verified"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock legal assistance available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%239CA3AF%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271.5%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      {/* Header */}
      <Header onSignInOpen={() => setIsSignInOpen(true)} />

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Legal Help
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find qualified lawyers in your district across Sri Lanka. Choose your legal specialty and get connected with verified professionals instantly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/80 backdrop-blur-md border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Browse Lawyers
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-xl hover:border-gray-300/50 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-800 font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LawyerSL?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Experience the future of legal services with our modern approach
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-3 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="relative z-20">
        <CategoriesSection
          onCategorySelect={handleCategorySelect}
          onViewAll={handleViewAllCategories}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-2xl rotate-12 animate-pulse" />
      <div className="absolute top-48 right-20 w-16 h-16 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full animate-bounce" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-lg rotate-45 animate-pulse delay-1000" />

      {/* Modals */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSignUpOpen={() => setIsSignUpOpen(true)}
        onSubmit={handleSignIn}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSignInOpen={() => setIsSignInOpen(true)}
        onSubmit={handleSignUp}
      />

      <AllCategoriesModal
        isOpen={showAllCategories}
        onClose={() => setShowAllCategories(false)}
        categories={allCategories}
        onCategorySelect={handleCategorySelect}
      />

      <DistrictModal
        isOpen={showDistrictModal}
        onClose={() => setShowDistrictModal(false)}
        selectedCategory={selectedCategory}
        onFinalSelection={handleFinalSelection}
      />
    </div>
  );
};

export default ModernHero;
import { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedLawyers from "@/components/FeaturedLawyers";
import Footer from "@/components/Footer";
import CategoriesSection from "@/components/CategoriesSection";
import AllCategoriesModal from "@/components/AllCategoriesModal";
import DistrictModal from "@/components/DistrictModal";
import LawyersModal from "@/components/LawyersModal";
import { legalCategories } from '@/data/categories';

const Index = () => {
  // Category and District state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [allCategories, setAllCategories] = useState(legalCategories);
  
  // Modal states
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showDistrictModal, setShowDistrictModal] = useState(false);
  const [showLawyersModal, setShowLawyersModal] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Auth handlers
  const handleSignIn = (userData) => {
    console.log('Sign In:', userData);
    setIsSignInOpen(false);
  };

  const handleSignUp = (userData) => {
    console.log('Sign Up:', userData);
    setIsSignUpOpen(false);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowAllCategories(false);
    setShowDistrictModal(true);
  };

  // Handle view all categories
  const handleViewAllCategories = (categories) => {
    setAllCategories(categories);
    setShowAllCategories(true);
  };

  // Handle district selection
  const handleDistrictSelection = (category, district) => {
    setSelectedCategory(category);
    setSelectedDistrict(district);
    setShowDistrictModal(false);
    setShowLawyersModal(true);
  };

  // Modal toggle handlers
  const handleSignInModalClose = () => setIsSignInOpen(false);
  const handleSignUpModalClose = () => setIsSignUpOpen(false);
  const handleSignInModalOpenSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };
  const handleSignUpModalOpenSignIn = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };
  const handleAllCategoriesModalClose = () => setShowAllCategories(false);
  const handleDistrictModalClose = () => setShowDistrictModal(false);
  
  // Close all modals
  const closeAllModals = () => {
    setShowAllCategories(false);
    setShowDistrictModal(false);
    setShowLawyersModal(false);
    setSelectedCategory(null);
    setSelectedDistrict(null);
  };

  return (
    <div className="min-h-screen">
      <main>
        <Hero
          // Auth props
          onSignIn={handleSignIn}
          onSignUp={handleSignUp}
          isSignInOpen={isSignInOpen}
          isSignUpOpen={isSignUpOpen}
          onSignInModalClose={handleSignInModalClose}
          onSignUpModalClose={handleSignUpModalClose}
          onSignInModalOpenSignUp={handleSignInModalOpenSignUp}
          onSignUpModalOpenSignIn={handleSignUpModalOpenSignIn}
          
          // Categories props
          onCategorySelect={handleCategorySelect}
          onViewAllCategories={handleViewAllCategories}
          showAllCategories={showAllCategories}
          onAllCategoriesModalClose={handleAllCategoriesModalClose}
          allCategories={allCategories}
          
          // District selection props
          showDistrictModal={showDistrictModal}
          selectedCategory={selectedCategory}
          onDistrictSelect={handleDistrictSelection}
          onDistrictModalClose={handleDistrictModalClose}
        />
        <FeaturedLawyers />
      </main>
      <Footer />

      {/* Lawyers Modal */}
      <LawyersModal
        isOpen={showLawyersModal}
        onClose={closeAllModals}
        selectedCategory={selectedCategory}
        selectedDistrict={selectedDistrict}
      />
    </div>
  );
};

export default Index;
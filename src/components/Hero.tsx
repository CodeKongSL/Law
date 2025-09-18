import { ArrowRight, Star, Shield, Users, MapPin, TrendingUp, Award, Clock } from 'lucide-react';
import Header from '../components/Header';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
import CategoriesSection from '../components/CategoriesSection';
import AllCategoriesModal from '../components/AllCategoriesModal';
import DistrictModal from '../components/DistrictModal';

interface HeroProps {
  onSignIn: (userData: any) => void;
  onSignUp: (userData: any) => void;
  onCategorySelect: (category: any) => void;
  onViewAllCategories: (categories: any[]) => void;
  onDistrictSelect: (category: any, district: any) => void;
  isSignInOpen: boolean;
  isSignUpOpen: boolean;
  showAllCategories: boolean;
  showDistrictModal: boolean;
  selectedCategory: any;
  allCategories: any[];
  onSignInModalClose: () => void;
  onSignUpModalClose: () => void;
  onAllCategoriesModalClose: () => void;
  onDistrictModalClose: () => void;
  onSignInModalOpenSignUp: () => void;
  onSignUpModalOpenSignIn: () => void;
}

const ModernHero = ({
  onSignIn,
  onSignUp,
  onCategorySelect,
  onViewAllCategories,
  onDistrictSelect,
  isSignInOpen,
  isSignUpOpen,
  showAllCategories,
  showDistrictModal,
  selectedCategory,
  allCategories,
  onSignInModalClose,
  onSignUpModalClose,
  onAllCategoriesModalClose,
  onDistrictModalClose,
  onSignInModalOpenSignUp,
  onSignUpModalOpenSignIn,
}: HeroProps) => {

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
      {/* Enhanced Background Pattern for Glass Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%239CA3AF%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271.5%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      {/* Header */}
      <Header onSignInOpen={onSignInModalOpenSignUp} />

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

          {/* Enhanced CTA Buttons with Glass Effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="group relative bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
              {/* Glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
              <span className="relative z-10 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative bg-white/20 backdrop-blur-lg border border-white/30 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/30 hover:border-white/40 hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
              {/* Subtle glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
              <span className="relative z-10">Browse Lawyers</span>
            </button>
          </div>

          {/* Enhanced Stats Grid with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="relative bg-blue-50/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-200/40 hover:bg-blue-50/60 hover:shadow-xl hover:border-blue-300/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-white/10 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-blue-100/90 to-indigo-100/90 backdrop-blur-sm rounded-2xl p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform border border-blue-200/50">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-800 font-medium mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </div>
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
            
            {/* Enhanced Features Grid with Glass Effect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group">
                  <div className="relative bg-purple-50/35 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/40 hover:bg-purple-50/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/15 via-transparent to-white/8 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/25 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm rounded-xl p-3 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform border border-blue-300/40 shadow-lg">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
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
          onCategorySelect={onCategorySelect}
          onViewAll={onViewAllCategories}
        />
      </div>

      {/* Enhanced Decorative Elements with Glass Effect */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl rotate-12 animate-pulse"></div>
      <div className="absolute top-48 right-20 w-16 h-16 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/12 backdrop-blur-lg border border-white/20 rounded-lg rotate-45 animate-pulse delay-1000"></div>

      {/* Modals */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={onSignInModalClose}
        onSignUpOpen={onSignInModalOpenSignUp}
        onSubmit={onSignIn}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={onSignUpModalClose}
        onSignInOpen={onSignUpModalOpenSignIn}
        onSubmit={onSignUp}
      />

      <AllCategoriesModal
        isOpen={showAllCategories}
        onClose={onAllCategoriesModalClose}
        categories={allCategories}
        onCategorySelect={onCategorySelect}
      />

      <DistrictModal
        isOpen={showDistrictModal}
        onClose={onDistrictModalClose}
        selectedCategory={selectedCategory}
        onFinalSelection={onDistrictSelect}
      />
    </div>
  );
};

export default ModernHero;
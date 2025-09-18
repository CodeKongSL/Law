import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

const SignUpModal = ({ isOpen, onClose, onSignInOpen, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      userType: formData.get('userType'),
      agreeToTerms: formData.get('agreeToTerms')
    };
    onSubmit(userData);
  };

  const handleSignInClick = () => {
    onSignInOpen();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl w-full max-w-md mx-4 shadow-2xl border border-white/40 max-h-[95vh] overflow-hidden">
        {/* Glass effect overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
        
        {/* Scrollable content with hidden scrollbar */}
        <div className="relative z-10 max-h-[95vh] overflow-y-auto scrollbar-hide p-8">
          <style>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            select {
              border-radius: 0.75rem !important;
            }
            select option {
              border-radius: 0.75rem;
              padding: 8px;
              margin: 2px 0;
            }
          `}</style>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-100/50 backdrop-blur-sm border border-gray-200/50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">I am a</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 text-left text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200 flex justify-between items-center"
                >
                  <span className={selectedRole ? 'text-gray-800' : 'text-gray-500'}>
                    {selectedRole || 'Select your role'}
                  </span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-1 bg-white/90 backdrop-blur-sm border border-gray-300/60 rounded-xl shadow-lg overflow-hidden">
                    <div
                      className="px-3 py-2 hover:bg-blue-50/60 cursor-pointer transition-colors duration-150 text-gray-800"
                      onClick={() => {
                        setSelectedRole('Client looking for legal help');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Client looking for legal help
                    </div>
                    <div
                      className="px-3 py-2 hover:bg-blue-50/60 cursor-pointer transition-colors duration-150 text-gray-800"
                      onClick={() => {
                        setSelectedRole('Lawyer joining the network');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Lawyer joining the network
                    </div>
                  </div>
                )}
                
                {/* Hidden input for form submission */}
                <input
                  type="hidden"
                  name="userType"
                  value={selectedRole === 'Client looking for legal help' ? 'client' : selectedRole === 'Lawyer joining the network' ? 'lawyer' : ''}
                  required
                />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 pr-12 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200"
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 pr-12 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                className="mt-1 rounded border-gray-400 bg-white/60 text-blue-500 focus:ring-blue-400/50"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full relative bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-sm hover:from-blue-600/90 hover:to-indigo-600/90 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
              <span className="relative z-10">Create Account</span>
            </button>
          </form>
          
          <div className="mt-6 text-center pb-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={handleSignInClick}
                className="text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
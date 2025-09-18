import React from 'react';
import { X } from 'lucide-react';

const SignInModal = ({ isOpen, onClose, onSignUpOpen, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    onSubmit({ username, password });
  };

  const handleSignUpClick = () => {
    onSignUpOpen();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl border border-white/40 overflow-hidden">
        {/* Glass effect overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-100/50 backdrop-blur-sm border border-gray-200/50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Username or Email</label>
              <input
                type="text"
                name="username"
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200"
                placeholder="Enter your username or email"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-300/60 rounded-xl p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600">
                <input 
                  type="checkbox" 
                  className="mr-2 rounded border-gray-400 bg-white/60 text-blue-500 focus:ring-blue-400/50" 
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full relative bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-sm hover:from-blue-600/90 hover:to-indigo-600/90 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
              <span className="relative z-10">Sign In</span>
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={handleSignUpClick}
                className="text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
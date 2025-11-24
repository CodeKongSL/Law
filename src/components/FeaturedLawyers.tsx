import React from 'react';
import { 
  ArrowRight,
  Users,
  Shield,
  Star
} from 'lucide-react';

const ModernFeaturedLawyers = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Pattern matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%239CA3AF%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271.5%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      {/* Floating Legal Icons */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute text-gray-300/30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${18 + Math.random() * 20}px`
          }}
        >
          ⚖️
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching Hero style */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Top Attorneys
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with elite lawyers who have successfully represented thousands of clients. 
            Each attorney is verified, vetted, and ready to fight for your rights.
          </p>
        </div>

        {/* Bottom CTA with Glassmorphism matching Hero */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="group relative bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
              {/* Glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Browse All Attorneys
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative bg-white/20 backdrop-blur-lg border border-white/30 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/30 hover:border-white/40 hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
              <span className="relative z-10">Filter by Specialty</span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="bg-green-100/70 backdrop-blur-sm rounded-lg p-2">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">All lawyers verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100/70 backdrop-blur-sm rounded-lg p-2">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">500K+ clients served</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100/70 backdrop-blur-sm rounded-lg p-2">
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
              <span className="text-sm font-medium">4.8+ average rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements with Glass Effect matching Hero */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl rotate-12 animate-pulse"></div>
      <div className="absolute top-48 right-20 w-16 h-16 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/12 backdrop-blur-lg border border-white/20 rounded-lg rotate-45 animate-pulse delay-1000"></div>
    </section>
  );
};

export default ModernFeaturedLawyers;
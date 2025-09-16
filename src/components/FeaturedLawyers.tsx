import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  MessageCircle,
  Award,
  CheckCircle,
  ArrowRight,
  Users,
  Shield
} from 'lucide-react';

const ModernFeaturedLawyers = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch lawyers from backend
  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/featuredLawyer'); // Adjust URL if needed
        setLawyers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch lawyers. Please try again.');
        setLoading(false);
        console.error('Error fetching lawyers:', err);
      }
    };
    fetchLawyers();
  }, []);

  const featuredLawyers = lawyers;

  const generateAvatar = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    const colors = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600', 
      'from-green-400 to-green-600',
      'from-pink-400 to-pink-600',
      'from-orange-400 to-orange-600',
      'from-indigo-400 to-indigo-600'
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;
    return { initials, gradient: colors[colorIndex] };
  };

  const getBadgeColor = (badge) => {
    const colors = {
      "Top Rated": "from-yellow-400 to-orange-500",
      "Expert": "from-blue-400 to-blue-600",
      "Rising Star": "from-purple-400 to-purple-600",
      "Champion": "from-green-400 to-green-600",
      "Specialist": "from-pink-400 to-pink-600",
      "Veteran": "from-indigo-400 to-indigo-600"
    };
    return colors[badge] || "from-gray-400 to-gray-600";
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Legal Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
          >
            ⚖️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 font-medium text-sm">Hand-Picked Legal Experts</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Top Attorneys
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Connect with elite lawyers who have successfully represented thousands of clients. 
            Each attorney is verified, vetted, and ready to fight for your rights.
          </p>
        </div>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredLawyers.map((lawyer, index) => {
            const avatar = generateAvatar(lawyer.name);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={lawyer.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 
                  transition-all duration-500 cursor-pointer overflow-hidden
                  ${isHovered ? 'transform scale-105 shadow-2xl bg-white/15' : 'shadow-xl hover:shadow-2xl'}
                `}>
                  {/* Availability Status */}
                  <div className="absolute top-4 right-4">
                    <div className={`
                      flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                      ${lawyer.available 
                        ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-400/30'
                      }
                    `}>
                      <div className={`w-2 h-2 rounded-full ${lawyer.available ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                      {lawyer.available ? 'Available' : 'Busy'}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`
                    absolute top-4 left-4 bg-gradient-to-r ${getBadgeColor(lawyer.badge)} 
                    text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg
                  `}>
                    {lawyer.badge}
                  </div>

                  {/* Avatar */}
                  <div className="flex justify-center mb-6 mt-8">
                    <div className={`
                      w-24 h-24 bg-gradient-to-br ${avatar.gradient} rounded-2xl flex items-center justify-center
                      shadow-2xl group-hover:scale-110 transition-all duration-300 relative
                    `}>
                      <span className="text-2xl font-bold text-white">{avatar.initials}</span>
                      {isHovered && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-75 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Name & Specialties */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {lawyer.name}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                      {lawyer.specialties.slice(0, 2).map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-bold">{lawyer.rating}</span>
                      </div>
                      <div className="text-white/60 text-xs">{lawyer.reviewCount} reviews</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-white font-bold">{lawyer.successRate}%</span>
                      </div>
                      <div className="text-white/60 text-xs">Success Rate</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/70">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{lawyer.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{lawyer.experience} years experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <DollarSign className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">${lawyer.hourlyRate}/hour</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{lawyer.education}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {lawyer.bio}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className={`
                      w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                      text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 
                      transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2
                      ${!lawyer.available ? 'opacity-50 cursor-not-allowed' : ''}
                    `}>
                      <MessageCircle className="w-4 h-4" />
                      {lawyer.available ? 'Schedule Consultation' : 'Join Waitlist'}
                    </button>
                    <button className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 py-3 px-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105">
                      View Profile
                    </button>
                  </div>

                  {/* Hover Effects */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Browse All Attorneys
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Filter by Specialty
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm">All lawyers verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm">500K+ clients served</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">4.8+ average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturedLawyers;
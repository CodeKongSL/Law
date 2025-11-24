import { useState } from 'react';
import { X, Search, Star, MapPin, Award, Calendar, User, Briefcase } from 'lucide-react';
import BookingPage from './BookingPage';

const LawyersModal = ({ isOpen, onClose, selectedCategory, selectedDistrict }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showReviews, setShowReviews] = useState(false);
  const [selectedLawyerReviews, setSelectedLawyerReviews] = useState(null);
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [selectedLawyerForBooking, setSelectedLawyerForBooking] = useState(null);

  // Generate sample lawyers based on district and category
  const generateLawyers = () => {
    if (!selectedDistrict || !selectedCategory) return [];

    // Sample lawyer names and data
    const lawyerTemplates = [
      {
        name: "Anil Perera",
        experience: 15,
        rating: 4.8,
        comment: "Excellent service and very professional. Helped me resolve my case quickly.",
        date: "2024-01-15",
        reviewCount: 124,
        specializations: ["Contract Disputes", "Corporate Law", "Litigation"],
        languages: ["English", "Sinhala"],
        education: "University of Colombo Faculty of Law",
        barAdmission: 2008,
        reviews: [
          {
            id: 1,
            name: "Nimal S.",
            rating: 5,
            comment: "Very knowledgeable and helpful.",
            date: "2024-01-10"
          },
          {
            id: 2,
            name: "Dilani R.",
            rating: 4.5,
            comment: "Quick response and clear advice.",
            date: "2024-01-12"
          }
        ]
      },
      {
        name: "Priya Fernando",
        experience: 12,
        rating: 4.9,
        comment: "Excellent service and very professional. Helped me resolve my case quickly.",
        date: "2024-01-15",
        reviewCount: 89,
        specializations: ["Family Mediation", "Divorce Proceedings", "Child Custody"],
        languages: ["English", "Sinhala", "Tamil"],
        education: "Sri Lanka Law College",
        barAdmission: 2011,
        reviews: [
          {
            id: 3,
            name: "Kumar T.",
            rating: 5,
            comment: "Very supportive during my case.",
            date: "2024-01-09"
          }
        ]
      },
      {
        name: "Rajesh Kumar",
        experience: 20,
        rating: 4.7,
        comment: "Knowledgeable lawyer with good communication skills. Would recommend.",
        date: "2024-01-08",
        reviewCount: 156,
        specializations: ["Criminal Defense", "DUI Cases", "Court Representation"],
        languages: ["English", "Tamil", "Hindi"],
        education: "University of Peradeniya Faculty of Law",
        barAdmission: 2003,
        reviews: [
          {
            id: 4,
            name: "Suresh P.",
            rating: 4.5,
            comment: "Helped me get a fair outcome.",
            date: "2024-01-07"
          }
        ]
      },
      {
        name: "Samanthi Silva",
        experience: 8,
        rating: 4.6,
        comment: "Knowledgeable lawyer with good communication skills. Would recommend.",
        date: "2024-01-08",
        reviewCount: 67,
        specializations: ["Property Transactions", "Land Disputes", "Real Estate Law"],
        languages: ["English", "Sinhala"],
        education: "General Sir John Kotelawala Defence University",
        barAdmission: 2015,
        reviews: [
          {
            id: 5,
            name: "Ruwan D.",
            rating: 4.8,
            comment: "Very professional and efficient.",
            date: "2024-01-05"
          }
        ]
      },
      {
        name: "Thushara Jayawardena",
        experience: 18,
        rating: 4.9,
        comment: "Knowledgeable lawyer with good communication skills. Would recommend.",
        date: "2024-01-08",
        reviewCount: 203,
        specializations: ["Personal Injury", "Medical Malpractice", "Insurance Claims"],
        languages: ["English", "Sinhala"],
        education: "University of Colombo Faculty of Law",
        barAdmission: 2005,
        reviews: [
          {
            id: 6,
            name: "Chamila S.",
            rating: 5,
            comment: "Helped me win my insurance claim.",
            date: "2024-01-03"
          }
        ]
      }
    ];

    // Select one lawyer per district (you can expand this logic later)
    const selectedTemplate = lawyerTemplates[selectedDistrict.id % lawyerTemplates.length];
    
    return [{
      ...selectedTemplate,
      id: selectedDistrict.id,
      location: selectedDistrict.name,
      province: selectedDistrict.province,
      // Customize specializations based on selected category
      specializations: selectedCategory.title === "Family Law" 
        ? ["Family Mediation", "Divorce Proceedings", "Child Custody"]
        : selectedCategory.title === "Criminal Defense"
        ? ["Criminal Defense", "DUI Cases", "Court Representation"]
        : selectedCategory.title === "Business Law"
        ? ["Contract Disputes", "Corporate Law", "Litigation"]
        : selectedTemplate.specializations
    }];
  };

  const lawyers = generateLawyers();

  // Filter lawyers based on search term
  const filteredLawyers = lawyers.filter(lawyer =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Reset search when modal closes
  const handleClose = () => {
    setSearchTerm('');
    setShowBookingPage(false);
    setSelectedLawyerForBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl sm:rounded-3xl w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 border-b border-gray-200/50">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800 leading-tight">
                {selectedCategory?.title} Lawyers in {selectedDistrict?.name}
              </h2>
              <p className="text-slate-600 mt-1 text-sm sm:text-base">
                {selectedDistrict?.province} • {lawyers.length} lawyer{lawyers.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/60 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 sm:p-6 border-b border-gray-200/50">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search lawyers by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 border border-gray-200 rounded-xl sm:rounded-2xl pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Lawyers List */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh]">
          {filteredLawyers.length > 0 ? (
            <div className="space-y-4 sm:space-y-6">
              {filteredLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="group bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Lawyer Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 truncate">
                          {lawyer.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{lawyer.location}, {lawyer.province}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>{lawyer.experience} years experience</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-slate-700 text-sm sm:text-base">{lawyer.rating}</span>
                          </div>
                          <button 
                            onClick={() => {
                              setSelectedLawyerReviews(lawyer);
                              setShowReviews(true);
                            }}
                            className="text-slate-500 text-xs sm:text-sm hover:text-blue-600 hover:underline transition-colors"
                          >
                            ({lawyer.reviewCount} reviews)
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Specializations - Moved to header on large screens */}
                    <div className="lg:ml-6 lg:max-w-xs">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {lawyer.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>


                  {/* Lawyer Details - Two columns on large screens */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="break-words">{lawyer.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>Bar Admission: {lawyer.barAdmission}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <span className="text-xs sm:text-sm text-slate-600">Languages: </span>
                    <span className="text-xs sm:text-sm text-slate-700">{lawyer.languages.join(', ')}</span>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-gray-200/50">
                    <button 
                      onClick={() => {
                        setSelectedLawyerForBooking(lawyer);
                        setShowBookingPage(true);
                      }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-2">No lawyers found</h3>
              <p className="text-slate-500 text-sm sm:text-base">
                Try searching with different keywords or check your spelling.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-3 sm:p-4 border-t border-gray-200/50">
          <p className="text-center text-slate-600 text-xs sm:text-sm">
            All lawyers are verified and licensed to practice in {selectedDistrict?.province}
          </p>
        </div>
      </div>

        {/* Reviews Modal */}
        {showReviews && selectedLawyerReviews && (
          <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl sm:rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Reviews Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 border-b border-gray-200/50">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                      Reviews for {selectedLawyerReviews.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-slate-700">{selectedLawyerReviews.rating}</span>
                      </div>
                      <span className="text-slate-500 text-sm">({selectedLawyerReviews.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowReviews(false)}
                    className="p-2 hover:bg-white/60 rounded-full transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Reviews List */}
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[70vh]">
                <div className="space-y-4">
                  {selectedLawyerReviews.reviews.map((review) => (
                    <div key={review.id} className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 hover:bg-white/80 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <span className="text-sm sm:text-base font-medium text-slate-800">{review.name}</span>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm text-slate-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Booking Page */}
        {showBookingPage && selectedLawyerForBooking && (
          <BookingPage
            lawyer={selectedLawyerForBooking}
            onBack={() => {
              setShowBookingPage(false);
              setSelectedLawyerForBooking(null);
            }}
          />
        )}
    </div>
  );
};

export default LawyersModal;
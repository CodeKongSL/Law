import { useState } from 'react';
import { X, Search, Star, MapPin, Phone, Mail, Award, Calendar, ArrowRight, User, Briefcase, Clock } from 'lucide-react';

const LawyersModal = ({ isOpen, onClose, selectedCategory, selectedDistrict }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Generate sample lawyers based on district and category
  const generateLawyers = () => {
    if (!selectedDistrict || !selectedCategory) return [];

    // Sample lawyer names and data
    const lawyerTemplates = [
      {
        name: "Anil Perera",
        experience: 15,
        rating: 4.8,
        reviewCount: 124,
        phone: "+94 77 123 4567",
        email: "anil.perera@lawfirm.lk",
        specializations: ["Contract Disputes", "Corporate Law", "Litigation"],
        languages: ["English", "Sinhala"],
        education: "University of Colombo Faculty of Law",
        barAdmission: 2008,
        consultationFee: "Rs. 15,000"
      },
      {
        name: "Priya Fernando",
        experience: 12,
        rating: 4.9,
        reviewCount: 89,
        phone: "+94 77 234 5678",
        email: "priya.fernando@legalpartners.lk",
        specializations: ["Family Mediation", "Divorce Proceedings", "Child Custody"],
        languages: ["English", "Sinhala", "Tamil"],
        education: "Sri Lanka Law College",
        barAdmission: 2011,
        consultationFee: "Rs. 12,000"
      },
      {
        name: "Rajesh Kumar",
        experience: 20,
        rating: 4.7,
        reviewCount: 156,
        phone: "+94 77 345 6789",
        email: "rajesh.kumar@criminaldefense.lk",
        specializations: ["Criminal Defense", "DUI Cases", "Court Representation"],
        languages: ["English", "Tamil", "Hindi"],
        education: "University of Peradeniya Faculty of Law",
        barAdmission: 2003,
        consultationFee: "Rs. 20,000"
      },
      {
        name: "Samanthi Silva",
        experience: 8,
        rating: 4.6,
        reviewCount: 67,
        phone: "+94 77 456 7890",
        email: "samanthi.silva@propertylaw.lk",
        specializations: ["Property Transactions", "Land Disputes", "Real Estate Law"],
        languages: ["English", "Sinhala"],
        education: "General Sir John Kotelawala Defence University",
        barAdmission: 2015,
        consultationFee: "Rs. 10,000"
      },
      {
        name: "Thushara Jayawardena",
        experience: 18,
        rating: 4.9,
        reviewCount: 203,
        phone: "+94 77 567 8901",
        email: "thushara.j@personalinjury.lk",
        specializations: ["Personal Injury", "Medical Malpractice", "Insurance Claims"],
        languages: ["English", "Sinhala"],
        education: "University of Colombo Faculty of Law",
        barAdmission: 2005,
        consultationFee: "Rs. 18,000"
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
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200/50">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {selectedCategory?.title} Lawyers in {selectedDistrict?.name}
              </h2>
              <p className="text-slate-600 mt-1">
                {selectedDistrict?.province} • {lawyers.length} lawyer{lawyers.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/60 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-gray-200/50">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search lawyers by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Lawyers List */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {filteredLawyers.length > 0 ? (
            <div className="space-y-6">
              {filteredLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="group bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Lawyer Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">
                          {lawyer.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{lawyer.location}, {lawyer.province}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{lawyer.experience} years experience</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-slate-700">{lawyer.rating}</span>
                          </div>
                          <span className="text-slate-500 text-sm">({lawyer.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-800">{lawyer.consultationFee}</div>
                      <div className="text-sm text-slate-500">Consultation Fee</div>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {lawyer.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lawyer Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Award className="w-4 h-4" />
                      <span>{lawyer.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>Bar Admission: {lawyer.barAdmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <span>{lawyer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-4 h-4" />
                      <span>{lawyer.email}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <span className="text-sm text-slate-600">Languages: </span>
                    <span className="text-sm text-slate-700">{lawyer.languages.join(', ')}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200/50">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact Lawyer
                    </button>
                    <button className="flex-1 bg-white hover:bg-gray-50 text-slate-700 py-3 px-6 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-slate-700 mb-2">No lawyers found</h3>
              <p className="text-slate-500">
                Try searching with different keywords or check your spelling.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 border-t border-gray-200/50">
          <p className="text-center text-slate-600 text-sm">
            All lawyers are verified and licensed to practice in {selectedDistrict?.province}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyersModal;
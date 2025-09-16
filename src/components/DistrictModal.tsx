import { useState } from 'react';
import { X, MapPin, Search, ArrowRight } from 'lucide-react';

const DistrictModal = ({ isOpen, onClose, selectedCategory, onDistrictSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sri Lankan districts
  const districts = [
    { id: 1, name: 'Colombo', province: 'Western Province', lawyerCount: 2840 },
    { id: 2, name: 'Gampaha', province: 'Western Province', lawyerCount: 890 },
    { id: 3, name: 'Kalutara', province: 'Western Province', lawyerCount: 420 },
    { id: 4, name: 'Kandy', province: 'Central Province', lawyerCount: 780 },
    { id: 5, name: 'Matale', province: 'Central Province', lawyerCount: 230 },
    { id: 6, name: 'Nuwara Eliya', province: 'Central Province', lawyerCount: 180 },
    { id: 7, name: 'Galle', province: 'Southern Province', lawyerCount: 520 },
    { id: 8, name: 'Matara', province: 'Southern Province', lawyerCount: 340 },
    { id: 9, name: 'Hambantota', province: 'Southern Province', lawyerCount: 210 },
    { id: 10, name: 'Jaffna', province: 'Northern Province', lawyerCount: 380 },
    { id: 11, name: 'Kilinochchi', province: 'Northern Province', lawyerCount: 85 },
    { id: 12, name: 'Mannar', province: 'Northern Province', lawyerCount: 95 },
    { id: 13, name: 'Vavuniya', province: 'Northern Province', lawyerCount: 120 },
    { id: 14, name: 'Mullaitivu', province: 'Northern Province', lawyerCount: 65 },
    { id: 15, name: 'Batticaloa', province: 'Eastern Province', lawyerCount: 280 },
    { id: 16, name: 'Ampara', province: 'Eastern Province', lawyerCount: 190 },
    { id: 17, name: 'Trincomalee', province: 'Eastern Province', lawyerCount: 220 },
    { id: 18, name: 'Kurunegala', province: 'North Western Province', lawyerCount: 450 },
    { id: 19, name: 'Puttalam', province: 'North Western Province', lawyerCount: 280 },
    { id: 20, name: 'Anuradhapura', province: 'North Central Province', lawyerCount: 310 },
    { id: 21, name: 'Polonnaruwa', province: 'North Central Province', lawyerCount: 160 },
    { id: 22, name: 'Badulla', province: 'Uva Province', lawyerCount: 240 },
    { id: 23, name: 'Moneragala', province: 'Uva Province', lawyerCount: 130 },
    { id: 24, name: 'Ratnapura', province: 'Sabaragamuwa Province', lawyerCount: 290 },
    { id: 25, name: 'Kegalle', province: 'Sabaragamuwa Province', lawyerCount: 210 }
  ];

  const filteredDistricts = districts.filter(district =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    district.province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200/50">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Select Your District</h2>
              <p className="text-slate-600 mt-1">
                Find {selectedCategory?.title} lawyers in your area
              </p>
            </div>
            <button
              onClick={onClose}
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
              placeholder="Search districts or provinces..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Districts Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDistricts.map((district) => (
              <div
                key={district.id}
                onClick={() => onDistrictSelect(district)}
                className="group bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 cursor-pointer hover:bg-white/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">
                        {district.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {district.province}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-700">
                      {district.lawyerCount}
                    </div>
                    <div className="text-xs text-slate-500">lawyers</div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300 mt-1 ml-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 border-t border-gray-200/50">
          <p className="text-center text-slate-600 text-sm">
            Select a district to find qualified {selectedCategory?.title} lawyers in your area
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistrictModal;
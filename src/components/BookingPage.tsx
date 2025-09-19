import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, DollarSign, Star, MapPin, User, Briefcase } from 'lucide-react';
import CalendarSlots from './CalendarSlots';
import BookingDetailsModal from './BookingDetailsModal';

const BookingPage = ({ lawyer, onBack }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock consultation fees
  const consultationFee = {
    initial: 15000, // LKR
    followUp: 8000,
    emergency: 25000
  };

  // Generate time slots for a given date
  const generateTimeSlots = (date) => {
    const slots = [];
    const startTime = 9; // 9 AM
    const endTime = 17; // 5 PM
    
    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const isBooked = Math.random() > 0.7; // Random booking status
        
        slots.push({
          id: `${date}-${timeString}`,
          time: timeString,
          isBooked,
          isAvailable: !isBooked && hour >= 9 && hour < 17
        });
      }
    }
    return slots;
  };

  const handleSlotSelect = (slot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot);
      setShowBookingModal(true);
    }
  };

  const handleBookingConfirm = (bookingDetails) => {
    // Handle booking confirmation here
    console.log('Booking confirmed:', bookingDetails);
    setShowBookingModal(false);
    // You could redirect to a confirmation page or show a success message
  };

  if (!lawyer) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-50 flex flex-col">
      {/* Header - Fixed */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 flex-shrink-0">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-slate-800">
                Book Consultation
              </h1>
              <p className="text-slate-600 text-sm sm:text-base">
                Schedule your appointment with {lawyer.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto">
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          {/* Mobile Layout - Stack vertically */}
          <div className="lg:hidden space-y-6">
            {/* Lawyer Card - Mobile */}
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    {lawyer.name}
                  </h2>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-slate-700">{lawyer.rating}</span>
                    <span className="text-slate-500 text-sm">({lawyer.reviewCount} reviews)</span>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{lawyer.location}, {lawyer.province}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span>{lawyer.experience} years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Specializations */}
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {lawyer.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border border-blue-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Consultation Fees - Mobile */}
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-800">Consultation Fees</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-slate-800 block text-sm">Initial Consultation</span>
                      <span className="text-xs text-slate-600">First time meeting (60 mins)</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      LKR {consultationFee.initial.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border border-blue-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-slate-800 block text-sm">Follow-up Session</span>
                      <span className="text-xs text-slate-600">Regular consultation (30 mins)</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">
                      LKR {consultationFee.followUp.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-slate-800 block text-sm">Emergency Session</span>
                      <span className="text-xs text-slate-600">Urgent matters (45 mins)</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      LKR {consultationFee.emergency.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                <p className="text-xs text-amber-700">
                  <strong>Note:</strong> Payment can be made in cash or via bank transfer. 
                  Cancellations must be made 24 hours in advance.
                </p>
              </div>
            </div>

            {/* Calendar - Mobile */}
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-800">
                  Select Date & Time
                </h3>
              </div>
              
              <CalendarSlots
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                onSlotSelect={handleSlotSelect}
                generateTimeSlots={generateTimeSlots}
              />
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 min-h-full">
            {/* Left Sidebar - Lawyer Info & Fees */}
            <div className="lg:col-span-1 space-y-6">
              {/* Lawyer Card */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    {lawyer.name}
                  </h2>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-slate-700">{lawyer.rating}</span>
                    <span className="text-slate-500 text-sm">({lawyer.reviewCount} reviews)</span>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{lawyer.location}, {lawyer.province}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span>{lawyer.experience} years experience</span>
                    </div>
                  </div>
                </div>
                
                {/* Specializations */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3 text-center">Specializations</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {lawyer.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border border-blue-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation Fees */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-semibold text-slate-800">Consultation Fees</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="text-center">
                      <span className="font-medium text-slate-800 block text-sm">Initial Consultation</span>
                      <span className="text-xs text-slate-600 block mb-2">First time meeting (60 mins)</span>
                      <span className="text-lg font-bold text-green-600">
                        LKR {consultationFee.initial.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border border-blue-200">
                    <div className="text-center">
                      <span className="font-medium text-slate-800 block text-sm">Follow-up Session</span>
                      <span className="text-xs text-slate-600 block mb-2">Regular consultation (30 mins)</span>
                      <span className="text-lg font-bold text-blue-600">
                        LKR {consultationFee.followUp.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                    <div className="text-center">
                      <span className="font-medium text-slate-800 block text-sm">Emergency Session</span>
                      <span className="text-xs text-slate-600 block mb-2">Urgent matters (45 mins)</span>
                      <span className="text-lg font-bold text-red-600">
                        LKR {consultationFee.emergency.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                  <p className="text-xs text-amber-700 text-center">
                    <strong>Note:</strong> Payment can be made in cash or via bank transfer. 
                    Cancellations must be made 24 hours in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Calendar and Slots */}
            <div className="lg:col-span-3">
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-slate-600" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Select Date & Time
                  </h3>
                </div>
                
                <CalendarSlots
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  onSlotSelect={handleSlotSelect}
                  generateTimeSlots={generateTimeSlots}
                />
              </div>
            </div>
          </div>

          {/* Bottom spacing for mobile */}
          <div className="h-6"></div>
        </div>
      </div>

      {/* Booking Details Modal */}
      <BookingDetailsModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        lawyer={lawyer}
        selectedSlot={selectedSlot}
        selectedDate={selectedDate}
        consultationFee={consultationFee}
        onConfirm={handleBookingConfirm}
      />
    </div>
  );
};

export default BookingPage;
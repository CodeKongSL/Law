import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const CalendarSlots = ({ selectedDate, onDateSelect, onSlotSelect, generateTimeSlots }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Get current date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Calendar helper functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };
  
  const isDateDisabled = (date) => {
    const dateObj = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return dateObj < today || dateObj.getDay() === 0; // Disable past dates and Sundays
  };
  
  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      days.push(date);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  const timeSlots = selectedDate ? generateTimeSlots(formatDate(selectedDate)) : [];
  
  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div className="bg-white/40 rounded-xl p-4 border border-gray-200/30">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-white/60 rounded-full transition-colors"
            disabled={
              currentMonth.getFullYear() === today.getFullYear() &&
              currentMonth.getMonth() <= today.getMonth()
            }
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          
          <h4 className="text-lg font-semibold text-slate-800">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h4>
          
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-white/60 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        
        {/* Day Names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-slate-600 py-2">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={index} className="aspect-square"></div>;
            }
            
            const isSelected = selectedDate && formatDate(date) === formatDate(selectedDate);
            const isDisabled = isDateDisabled(date);
            const isToday = formatDate(date) === formatDate(today);
            
            return (
              <button
                key={index}
                onClick={() => !isDisabled && onDateSelect(date)}
                disabled={isDisabled}
                className={`
                  aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200
                  ${isSelected
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : isToday
                    ? 'bg-blue-100 text-blue-600 border border-blue-300'
                    : isDisabled
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                  }
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
        
        <div className="mt-4 text-xs text-slate-500 text-center">
          Sundays are not available for appointments
        </div>
      </div>
      
      {/* Time Slots */}
      {selectedDate && (
        <div className="bg-white/40 rounded-xl p-4 border border-gray-200/30">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-slate-600" />
            <h4 className="text-lg font-semibold text-slate-800">
              Available Times for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h4>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => onSlotSelect(slot)}
                disabled={slot.isBooked || !slot.isAvailable}
                className={`
                  p-3 rounded-lg text-sm font-medium transition-all duration-200 border
                  ${slot.isBooked
                    ? 'bg-red-50 text-red-400 border-red-200 cursor-not-allowed'
                    : slot.isAvailable
                    ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300 hover:shadow-md transform hover:scale-105'
                    : 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
                  }
                `}
              >
                <div className="flex flex-col items-center">
                  <span>{slot.time}</span>
                  <span className="text-xs mt-1">
                    {slot.isBooked ? 'Booked' : slot.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {timeSlots.length === 0 && (
            <div className="text-center py-8">
              <Clock className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600">No time slots available for this date</p>
            </div>
          )}
          
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-gray-200/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
              <span className="text-sm text-slate-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
              <span className="text-sm text-slate-600">Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-100 border border-gray-300 rounded"></div>
              <span className="text-sm text-slate-600">Unavailable</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarSlots;
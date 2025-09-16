import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category, isHovered, onHover, onLeave, onClick }) => {
  const IconComponent = category.icon;

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => onHover(category.id)}
      onMouseLeave={onLeave}
      onClick={() => onClick(category)}
    >
      <div
        className={`
          relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl p-6 
          transition-all duration-500 overflow-hidden
          ${isHovered ? "transform scale-105 shadow-2xl" : "shadow-lg hover:shadow-xl"}
          min-h-[200px] flex flex-col justify-between
        `}
      >
        {/* Background Gradient on Hover */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 
            transition-all duration-500 rounded-2xl
          `}
        />

        {/* Icon */}
        <div className="relative">
          <div
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center mb-4
              bg-gradient-to-br ${category.color} group-hover:scale-110 transition-all duration-300
            `}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1">
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
            {category.title}
          </h3>
          
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {category.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-xs">
              {category.lawyerCount.toLocaleString()} lawyers
            </span>
            <ArrowRight 
              className={`
                w-4 h-4 text-slate-400 group-hover:text-slate-600 
                group-hover:translate-x-1 transition-all duration-300
              `} 
            />
          </div>
        </div>

        {/* Hover Effects */}
        {isHovered && (
          <>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-ping opacity-75" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse" />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
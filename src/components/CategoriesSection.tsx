import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import CategoryCard from './CategoryCard';

const CategoriesSection = ({ categories, onCategorySelect, onViewAll }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Show only first 6 categories initially
  const displayedCategories = categories.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Popular Legal Categories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Choose Your Legal
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Specialty
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select from our most popular legal practice areas to find experienced lawyers in your district
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isHovered={hoveredCard === category.id}
              onHover={setHoveredCard}
              onLeave={() => setHoveredCard(null)}
              onClick={onCategorySelect}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            View All Legal Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-slate-500 mt-6 text-sm">
            Explore all {categories.length} legal practice areas available on our platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
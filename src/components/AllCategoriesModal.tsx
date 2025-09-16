import { useState } from 'react';
import { X, Search, Grid3X3 } from 'lucide-react';
import CategoryCard from './CategoryCard';

const AllCategoriesModal = ({ isOpen, onClose, categories, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl w-full max-w-7xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200/50">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Grid3X3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">All Legal Categories</h2>
                <p className="text-slate-600 mt-1">
                  Browse {categories.length} specialized legal practice areas
                </p>
              </div>
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
              placeholder="Search legal categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isHovered={hoveredCard === category.id}
                onHover={setHoveredCard}
                onLeave={() => setHoveredCard(null)}
                onClick={(selectedCategory) => {
                  onCategorySelect(selectedCategory);
                  onClose();
                }}
              />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No categories found</h3>
              <p className="text-slate-500">Try searching with different keywords</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 border-t border-gray-200/50">
          <p className="text-center text-slate-600 text-sm">
            Select a category to find qualified lawyers in your district
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesModal;
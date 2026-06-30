import React, { useState, useMemo } from 'react';
import { ChefHat, Flame, ThumbsUp, Star, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DISHES } from '../data';
import { Dish } from '../types';

interface MenuSectionProps {
  onAddToCart: (dish: Dish) => void;
  searchQuery: string;
}

export default function MenuSection({ onAddToCart, searchQuery }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', name: 'All Dishes' },
    { key: 'pizza', name: 'Artisan Pizzas' },
    { key: 'pasta', name: 'Handcrafted Pasta' },
    { key: 'burger', name: 'Gourmet Burgers' },
    { key: 'salad', name: 'Fresh Salads' },
    { key: 'dessert', name: 'Fine Desserts' }
  ];

  const filteredDishes = useMemo(() => {
    return DISHES.filter(dish => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
      // Search query filter
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu-section" className="py-24 bg-bistro-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="font-cursive text-2xl text-bistro-gold">A Culinary Journey</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bistro-charcoal mt-2 tracking-tight">
            Explore Our Menu
          </h2>
          <div className="w-16 h-0.5 bg-bistro-red mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-250 cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-bistro-red text-white shadow-md shadow-bistro-red/20'
                  : 'bg-white border border-bistro-gold/20 text-bistro-charcoal hover:bg-bistro-cream hover:border-bistro-gold/45'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Layout: Menu Grid + Chef Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Main Menu Items Grid (3 columns) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="popLayout">
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredDishes.map((dish) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={dish.id}
                    className="bg-white rounded-3xl p-5 border border-bistro-gold/10 hover:border-bistro-gold/30 shadow-sm hover:shadow-md transition-all duration-300 flex gap-5"
                  >
                    {/* Dish Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow relative group/img">
                      <img 
                        src={dish.image} 
                        alt={dish.name} 
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-300 pointer-events-none" />
                    </div>

                    {/* Dish Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-base font-bold text-bistro-charcoal leading-snug">
                            {dish.name}
                          </h4>
                          <span className="font-serif text-base font-bold text-bistro-red ml-2 shrink-0">
                            ${dish.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-[11px] text-bistro-charcoal/50 mt-1.5 leading-relaxed line-clamp-2">
                          {dish.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        {/* Rating */}
                        <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-lg text-[9px] font-bold text-amber-700">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>{dish.rating || 4.7}</span>
                        </div>

                        {/* Order button */}
                        <button
                          onClick={() => onAddToCart(dish)}
                          className="flex items-center gap-1 bg-bistro-cream text-bistro-red hover:bg-bistro-red hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full text-[10px] font-bold cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Order</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredDishes.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-bistro-gold/10 p-8">
                <p className="text-sm text-gray-500 font-medium">No dishes found matching your criteria.</p>
                <button 
                  onClick={() => { setSelectedCategory('all'); }} 
                  className="mt-4 text-xs font-bold text-bistro-red hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Right Chef Notes Sidebar (1 column) */}
          <div className="lg:col-span-1">
            <div className="bg-bistro-charcoal text-white rounded-3xl p-6 border border-bistro-gold/15 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-bistro-gold/5 filter blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-bistro-gold mb-4">
                <ChefHat className="w-5 h-5" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Chef's Advisory</span>
              </div>

              <h4 className="font-serif text-lg font-bold text-white mb-2 leading-tight">
                Pairings of the Week
              </h4>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
                Our Executive Chef recommends partnering our wood-fired <span className="text-bistro-gold font-semibold">Tomahawk Steak</span> with a full-bodied Cabernet Sauvignon, followed by a warm <span className="text-bistro-gold font-semibold">Grand Pistachio Soufflé</span> for dessert.
              </p>

              <div className="border-t border-white/10 pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-bistro-gold font-serif text-xs shrink-0">
                    01
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Daily Fresh Harvest</h5>
                    <p className="text-[10px] text-gray-500">Produce cut at 6:00 AM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-bistro-gold font-serif text-xs shrink-0">
                    02
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Zero Chemical Preserves</h5>
                    <p className="text-[10px] text-gray-500">100% natural, additive free</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-bistro-gold font-serif text-xs shrink-0">
                    03
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Interactive Allergies</h5>
                    <p className="text-[10px] text-gray-500">Inform servers when seated</p>
                  </div>
                </div>
              </div>

              {/* Little Cartoon Vector Chef Accent inside the card */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-center">
                <div className="text-center">
                  <span className="inline-block text-4xl animate-bounce">🧑‍🍳</span>
                  <p className="text-[10px] font-cursive text-bistro-gold mt-1">Buon Appetito!</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

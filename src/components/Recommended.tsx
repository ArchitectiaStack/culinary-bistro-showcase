import React from 'react';
import { Star, ShoppingCart, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { DISHES } from '../data';
import { Dish } from '../types';

interface RecommendedProps {
  onAddToCart: (dish: Dish) => void;
}

export default function Recommended({ onAddToCart }: RecommendedProps) {
  // Filter only the recommended dishes
  const recommendedDishes = DISHES.filter(d => d.isRecommended);

  return (
    <section id="recommended-dishes" className="py-20 bg-bistro-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-bistro-gold">Chef Recommendations</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bistro-charcoal mt-2 tracking-tight">
            Recommended Dishes
          </h2>
          <div className="w-16 h-0.5 bg-bistro-red mx-auto mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-bistro-gold/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Dish Image */}
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                {/* Elegant overlay gradient to make badges contrast beautifully and add deep editorial style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/15 pointer-events-none" />
                
                {/* Rating Badge Overlay */}
                <div className="absolute top-4 left-4 bg-bistro-cream/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-bistro-charcoal flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{dish.rating}</span>
                </div>

                {/* Categories Badge */}
                {dish.tags && dish.tags[0] && (
                  <div className="absolute top-4 right-4 bg-bistro-red text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {dish.tags[0]}
                  </div>
                )}
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-bistro-charcoal leading-tight hover:text-bistro-red transition-colors duration-200">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-bistro-charcoal/60 mt-2 line-clamp-3 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-bistro-gold/10">
                  <div>
                    <span className="text-[10px] text-bistro-gold uppercase font-bold tracking-wider block">Price</span>
                    <span className="text-lg font-serif font-bold text-bistro-red">${dish.price.toFixed(2)}</span>
                  </div>

                  {/* Add to order button */}
                  <button
                    onClick={() => onAddToCart(dish)}
                    className="flex items-center gap-1 bg-bistro-red hover:bg-bistro-charcoal text-white text-xs font-bold px-4 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

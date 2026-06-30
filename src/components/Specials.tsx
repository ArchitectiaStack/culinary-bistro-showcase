import React from 'react';
import { Sparkles, ShoppingCart, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { DISHES } from '../data';
import { Dish } from '../types';

interface SpecialsProps {
  onAddToCart: (dish: Dish) => void;
}

export default function Specials({ onAddToCart }: SpecialsProps) {
  const specials = DISHES.filter(d => d.isTodaySpecial);

  return (
    <section id="todays-specials" className="py-24 bg-bistro-charcoal text-white relative overflow-hidden">
      
      {/* Decorative radial ambient lights */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-bistro-gold/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-bistro-red/5 filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-bistro-gold">Limited Time Delights</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Today's Premium Specials
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto mt-3">
            Handcrafted luxury creations curated by our head chefs, cooked using authentic smoke profiles and imported ingredients.
          </p>
          <div className="w-16 h-0.5 bg-bistro-gold mx-auto mt-4" />
        </div>

        {/* 3 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specials.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900/60 rounded-3xl border border-white/5 hover:border-bistro-gold/30 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative"
            >
              
              {/* Premium Ribbon */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-bistro-gold to-amber-600 text-bistro-charcoal text-[9px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>Premium Reserve</span>
              </div>

              {/* Card Image and Header */}
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute top-3 right-3 bg-bistro-charcoal/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-bistro-gold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Prep: 25m</span>
                  </div>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-serif text-xl font-bold text-white leading-snug">
                    {dish.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 mt-2.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-bistro-gold fill-bistro-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-semibold">({dish.rating})</span>
                </div>

                <p className="text-xs text-gray-400 mt-3.5 leading-relaxed">
                  {dish.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {dish.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-gray-300 text-[9px] font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/5">
                <div>
                  <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block">Investment</span>
                  <span className="text-2xl font-serif font-bold text-bistro-gold">${dish.price.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => onAddToCart(dish)}
                  className="flex items-center gap-1.5 bg-bistro-gold hover:bg-white text-bistro-charcoal text-xs font-bold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-md cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Order Special</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

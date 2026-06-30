import React from 'react';
import { Instagram, Twitter, MessageSquare, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { CHEFS } from '../data';

export default function Chefs() {
  return (
    <section id="master-chefs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="font-cursive text-2xl text-bistro-gold">The Tastemakers</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bistro-charcoal mt-2 tracking-tight">
            Meet Our Master Chefs
          </h2>
          <div className="w-16 h-0.5 bg-bistro-red mx-auto mt-4" />
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CHEFS.map((chef, idx) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-bistro-cream/40 rounded-3xl overflow-hidden border border-bistro-gold/10 group shadow-sm hover:shadow-lg transition-all duration-300"
            >
              
              {/* Chef Picture Frame */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bistro-charcoal/80 via-transparent to-transparent opacity-60" />

                {/* Floating Experience Badge */}
                <div className="absolute top-4 left-4 bg-bistro-red text-white text-[9px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>Michelin Star Alum</span>
                </div>

                {/* Hover Quick Social Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  {chef.socials.instagram && (
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-9 h-9 rounded-full bg-white text-bistro-red hover:bg-bistro-red hover:text-white flex items-center justify-center shadow-lg transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {chef.socials.twitter && (
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-9 h-9 rounded-full bg-white text-bistro-charcoal hover:bg-bistro-charcoal hover:text-white flex items-center justify-center shadow-lg transition-all"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-full bg-white text-bistro-gold hover:bg-bistro-gold hover:text-white flex items-center justify-center shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Chef Credentials & Bio */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-bistro-charcoal">
                  {chef.name}
                </h3>
                <span className="text-xs text-bistro-gold font-bold uppercase tracking-wider block mt-1">
                  {chef.role}
                </span>
                
                <p className="text-xs text-bistro-charcoal/60 mt-4 leading-relaxed max-w-sm mx-auto">
                  {chef.bio}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

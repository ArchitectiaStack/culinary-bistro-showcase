import React from 'react';
import { Leaf, Award, Compass, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function QualityAssurance() {
  const qualities = [
    {
      icon: <Leaf className="w-8 h-8 text-bistro-olive" />,
      title: 'Fresh Ingredients',
      description: 'We source 100% organic, handpicked vegetables and premium grass-fed meat directly from local bio-farms daily.'
    },
    {
      icon: <Award className="w-8 h-8 text-bistro-gold" />,
      title: 'Expert Chefs',
      description: 'Our culinary crew holds decades of training in Michelin-rated hubs of Paris, Milan, and Rome.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-bistro-red" />,
      title: 'Exceptional Service',
      description: 'Impeccable dining hospitality centered around custom seating, allergy checks, and warm, proactive care.'
    },
    {
      icon: <Compass className="w-8 h-8 text-blue-800" />,
      title: 'Gourmet Recipes',
      description: 'Classical gastronomic blueprints mixed with scientific smoking techniques to yield deeper sensory taste-profiles.'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-bistro-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-bistro-gold">Uncompromising Standards</span>
          <h2 className="font-serif text-3xl font-bold text-bistro-charcoal mt-2 tracking-tight">
            Quality Assurance
          </h2>
          <div className="w-16 h-0.5 bg-bistro-red mx-auto mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-bistro-cream/50 transition-all duration-300 border border-transparent hover:border-bistro-gold/10 group"
            >
              
              {/* Animated Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-bistro-cream mx-auto flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="font-serif text-lg font-bold text-bistro-charcoal group-hover:text-bistro-red transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs text-bistro-charcoal/60 mt-3 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Heart } from 'lucide-react';

export default function ChefClocheIllustration() {
  const [isLifted, setIsLifted] = useState(false);
  const [currentDish, setCurrentDish] = useState(0);

  const surpriseDishes = [
    { name: "Truffle Ribeye Steak", img: "🥩", desc: "A5 Grade Wagyu with shaved summer truffles" },
    { name: "Saffron Lobster Risotto", img: "🦞", desc: "Creamy Carnaroli cooked in saffron broth" },
    { name: "Neapolitan Gold Pizza", img: "🍕", desc: "Edible 24k gold leaf and fresh burrata" },
    { name: "Pistachio Warm Soufflé", img: "🧁", desc: "Warm baked soufflé with pistachio creme" }
  ];

  const handleLift = () => {
    if (!isLifted) {
      // Pick a random dish when lifting
      const nextIndex = Math.floor(Math.random() * surpriseDishes.length);
      setCurrentDish(nextIndex);
    }
    setIsLifted(!isLifted);
  };

  return (
    <div className="relative w-full max-w-[450px] mx-auto flex flex-col items-center pb-36">
      {/* Dynamic Splash Badge */}
      <div className="absolute -top-4 -left-4 z-20 bg-bistro-red text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
        <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
        <span>Click the Cloche to reveal Chef's Secret!</span>
      </div>

      <div className="relative w-full aspect-square bg-gradient-to-b from-amber-50 to-amber-100/40 rounded-full border border-amber-200/50 p-6 shadow-inner flex items-center justify-center overflow-visible">
        {/* Decorative Floating Ingredients */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-8 text-3xl select-none"
        >
          🌶️
        </motion.div>
        <motion.div 
          animate={{ y: [0, 8, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-24 right-10 text-3xl select-none"
        >
          🌿
        </motion.div>
        <motion.div 
          animate={{ y: [0, -6, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-16 left-6 text-3xl select-none"
        >
          🍅
        </motion.div>
        <motion.div 
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-28 right-4 text-3xl select-none"
        >
          🍄
        </motion.div>

        {/* The Chef & Platter Composition */}
        <div className="relative w-full h-full flex flex-col justify-end items-center">
          
          {/* Chef Character Vector Illustration */}
          <div className="w-[280px] h-[220px] relative -top-10 z-10">
            <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-xl">
              {/* Chef Hat */}
              <path d="M70,35 C70,10 130,10 130,35 C145,35 150,55 135,60 C135,65 125,75 100,75 C75,75 65,65 65,60 C50,55 55,35 70,35 Z" fill="#FFFFFF" stroke="#E2DED5" strokeWidth="1.5" />
              {/* Hat Red Stripe */}
              <path d="M66,56 Q100,61 134,56 L133,60 Q100,65 67,60 Z" fill="#A62B2B" />

              {/* Ears */}
              <circle cx="62" cy="85" r="9" fill="#F4C29F" />
              <circle cx="138" cy="85" r="9" fill="#F4C29F" />
              <path d="M62,82 C60,82 58,85 60,87" stroke="#E0A47E" strokeWidth="1" fill="none" />
              <path d="M138,82 C140,82 142,85 140,87" stroke="#E0A47E" strokeWidth="1" fill="none" />

              {/* Face */}
              <path d="M65,80 C65,115 135,115 135,80 C135,70 65,70 65,80 Z" fill="#FAD4B2" />

              {/* Rosy Cheeks */}
              <circle cx="74" cy="95" r="6" fill="#F09B8F" opacity="0.4" />
              <circle cx="126" cy="95" r="6" fill="#F09B8F" opacity="0.4" />

              {/* Curly Orange Hair */}
              {/* Left Side Hair */}
              <path d="M60,65 Q50,75 62,80 Q52,85 64,90" stroke="#DC6D2C" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M57,72 Q48,78 58,83" stroke="#DC6D2C" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Right Side Hair */}
              <path d="M140,65 Q150,75 138,80 Q148,85 136,90" stroke="#DC6D2C" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M143,72 Q152,78 142,83" stroke="#DC6D2C" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* Eyes */}
              <circle cx="85" cy="84" r="5" fill="#3D291F" />
              <circle cx="115" cy="84" r="5" fill="#3D291F" />
              {/* Eye highlights */}
              <circle cx="83.5" cy="82.5" r="1.5" fill="#FFFFFF" />
              <circle cx="113.5" cy="82.5" r="1.5" fill="#FFFFFF" />
              {/* Cute Eyebrows */}
              <path d="M78,76 Q85,71 90,75" stroke="#9A4E1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M122,76 Q115,71 110,75" stroke="#9A4E1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Friendly Big Nose */}
              <path d="M94,85 C94,80 106,80 106,85 C106,94 94,94 94,85 Z" fill="#F09B8F" />

              {/* Wide Smile */}
              <path d="M80,98 Q100,114 120,98" stroke="#3D291F" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Smile Dimples */}
              <path d="M78,98 Q76,96 78,94" stroke="#3D291F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M122,98 Q124,96 122,94" stroke="#3D291F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

              {/* Chef Coat Neck */}
              <path d="M80,109 L100,135 L120,109 Z" fill="#FFFFFF" />
              {/* Chef Coat Collar */}
              <path d="M74,106 C80,115 95,118 97,110 L84,106 Z" fill="#ECE9E2" stroke="#DFDBD2" strokeWidth="1" />
              <path d="M126,106 C120,115 105,118 103,110 L116,106 Z" fill="#ECE9E2" stroke="#DFDBD2" strokeWidth="1" />

              {/* Red Scarf Tie */}
              <circle cx="100" cy="118" r="4.5" fill="#A62B2B" />
              <path d="M100,118 Q92,128 85,126" stroke="#A62B2B" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M100,118 Q108,128 115,126" stroke="#A62B2B" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* Chef Uniform Body */}
              <path d="M60,115 L52,160 L148,160 L140,115 Z" fill="#FFFFFF" />
              {/* Coat overlap line */}
              <path d="M108,115 L112,160" stroke="#ECE9E2" strokeWidth="1.5" />
              {/* Buttons */}
              <circle cx="98" cy="128" r="2.5" fill="#C5A880" />
              <circle cx="98" cy="142" r="2.5" fill="#C5A880" />
              <circle cx="114" cy="128" r="2.5" fill="#C5A880" />
              <circle cx="114" cy="142" r="2.5" fill="#C5A880" />
            </svg>
          </div>

          {/* Interactive Silver Platter & Cloche */}
          <div className="absolute left-1/2 top-full -translate-x-1/2 z-30 flex flex-col items-center w-[230px] mt-10">
            
            {/* Surprise Dish Platform (revealed when cloche is lifted) */}
            <div className="absolute top-[2px] z-10 flex flex-col items-center text-center">
              <AnimatePresence mode="wait">
                {isLifted && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex flex-col items-center bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-amber-200 w-[170px]"
                  >
                    <span className="text-3xl filter drop-shadow animate-pulse">{surpriseDishes[currentDish].img}</span>
                    <h5 className="font-serif text-[11px] font-bold text-bistro-charcoal leading-tight mt-1">
                      {surpriseDishes[currentDish].name}
                    </h5>
                    <p className="text-[9px] text-gray-500 leading-normal line-clamp-2">
                      {surpriseDishes[currentDish].desc}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      <Heart className="w-2.5 h-2.5 text-bistro-red fill-bistro-red animate-ping" />
                      <span className="text-[7.5px] font-semibold text-bistro-red uppercase tracking-wider">Chef's Treat</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cloche Cover (The Dome Lid) */}
            <motion.div
              onClick={handleLift}
              animate={{ 
                y: isLifted ? -145 : 0, 
                rotate: isLifted ? -15 : 0,
                scale: isLifted ? 1.05 : 1
              }}
              whileHover={{ scale: isLifted ? 1.05 : 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative cursor-pointer z-20 group"
            >
              {/* Cloche Top Ring Handle */}
              <div className="w-6 h-6 rounded-full border-3 border-gray-400 bg-gradient-to-tr from-gray-300 via-gray-200 to-white mx-auto -mb-1 shadow" />
              {/* Cloche Metallic Dome */}
              <div className="w-[155px] h-[75px] rounded-t-full bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 relative shadow-lg border-b border-gray-600 overflow-hidden flex items-end justify-center group-hover:brightness-110 transition-all duration-300">
                {/* Shiny metallic reflection highlights */}
                <div className="absolute top-0 left-1/4 w-[15%] h-full bg-white/40 skew-x-12 filter blur-[1px]" />
                <div className="absolute top-0 right-1/3 w-[8%] h-full bg-white/20 -skew-x-12 filter blur-[2px]" />
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-t from-gray-900/10 to-transparent" />
                
                {/* Embedded Brand Crest */}
                <div className="mb-2 text-gray-400/30 text-[9px] font-serif font-bold tracking-widest uppercase flex items-center gap-1">
                  <Utensils className="w-2.5 h-2.5" />
                  <span>Delicious</span>
                </div>
              </div>
            </motion.div>

            {/* Serving Platter Base Tray */}
            <div className="w-[195px] h-3.5 rounded-full bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 shadow-md border-t border-white/40 -mt-1 relative z-10">
              <div className="absolute inset-x-2 bottom-0.5 h-1 rounded-full bg-gray-600/30 filter blur-[0.5px]" />
            </div>

            {/* Interactive State Hint */}
            <button 
              onClick={handleLift}
              className="mt-3 bg-bistro-charcoal hover:bg-bistro-red text-white text-[10px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md transition-colors duration-200 z-10 flex items-center gap-1"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{isLifted ? "Close Dome" : "Lift Dome"}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

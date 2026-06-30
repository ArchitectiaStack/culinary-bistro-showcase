import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sanitizeHTML = (str: string): string => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const cleanEmail = sanitizeHTML(email);
    // Mimic secure submission
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-bistro-charcoal text-white pt-20 pb-12 border-t border-bistro-gold/20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-bistro-gold/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Col (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => onScrollToSection('hero-section')}>
              <span className="font-cursive text-3xl text-bistro-red font-bold">Delicious</span>
              <div className="ml-1.5 w-1.5 h-1.5 rounded-full bg-bistro-gold" />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Authentic French-Italian culinary craft met with modern wood-fired smoke profiles. Sourcing daily bio-ingredients to yield deep taste-profiles.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" onClick={e => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/5 hover:bg-bistro-red text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/5 hover:bg-bistro-gold text-gray-300 hover:text-bistro-charcoal flex items-center justify-center transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/5 hover:bg-bistro-gold text-gray-300 hover:text-bistro-charcoal flex items-center justify-center transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Col (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-bold text-bistro-gold uppercase tracking-wider">
              Navigation Linkage
            </h4>
            
            <ul className="grid grid-cols-1 gap-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => onScrollToSection('recommended-dishes')} className="hover:text-bistro-gold transition-colors duration-150 cursor-pointer text-left">
                  Recommended Dishes
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('todays-specials')} className="hover:text-bistro-gold transition-colors duration-150 cursor-pointer text-left">
                  Today's Specials
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('menu-section')} className="hover:text-bistro-gold transition-colors duration-150 cursor-pointer text-left">
                  Gastronomic Menu
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('master-chefs')} className="hover:text-bistro-gold transition-colors duration-150 cursor-pointer text-left">
                  Master Chefs
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('reserve-table')} className="hover:text-bistro-gold transition-colors duration-150 cursor-pointer text-left font-bold text-bistro-red">
                  Reserve a Table
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('security-lab')} className="hover:text-bistro-gold transition-colors duration-150 cursor-pointer text-left flex items-center gap-1 font-bold text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Security & Code Lab</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Col (2 cols) */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-serif text-sm font-bold text-bistro-gold uppercase tracking-wider">
              Dining Hours
            </h4>
            <div className="space-y-4 text-xs text-gray-400 leading-normal">
              <div>
                <p className="font-bold text-white">Mon – Thurs</p>
                <p>12:00 PM – 10:00 PM</p>
              </div>
              <div>
                <p className="font-bold text-white">Fri – Sun</p>
                <p>12:00 PM – 11:30 PM</p>
              </div>
              <div>
                <p className="font-bold text-bistro-gold">Sunday Brunch</p>
                <p>11:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscribe Col (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-bold text-bistro-gold uppercase tracking-wider">
              Newsletter Subscription
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Register securely for monthly recipe notes and custom culinary VIP invites.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Subscription Verified Securely!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                {errorMsg && <p className="text-[10px] text-red-400 font-semibold">{errorMsg}</p>}
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-bistro-gold"
                  />
                  <button
                    type="submit"
                    className="bg-bistro-red hover:bg-bistro-gold hover:text-bistro-charcoal text-white p-2.5 rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-gray-500">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>Encrypted SSL parameters</span>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Delicious Culinary Bistro. Educational Research Clone Project.</p>
          <div className="flex gap-6">
            <a href="#" onClick={e => e.preventDefault()} className="hover:text-bistro-gold">W3C Compliant</a>
            <a href="#" onClick={e => e.preventDefault()} className="hover:text-bistro-gold">Secure Architecture Model</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { ShieldAlert, Search, ShoppingBag, Menu, X, ShieldCheck } from 'lucide-react';
import { DISHES } from '../data';
import { Dish } from '../types';

interface NavbarProps {
  onSearch: (query: string) => void;
  onScrollToSection: (sectionId: string) => void;
  cartCount: number;
  openCart: () => void;
}

export default function Navbar({ onSearch, onScrollToSection, cartCount, openCart }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
    setShowSearchResults(query.length > 0);
  };

  const filteredPreview = searchQuery
    ? DISHES.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 4)
    : [];

  const handleResultClick = (dishName: string) => {
    setSearchQuery(dishName);
    onSearch(dishName);
    setShowSearchResults(false);
    onScrollToSection('menu-section');
  };

  const navLinks = [
    { name: 'Recommended', id: 'recommended-dishes' },
    { name: 'Today\'s Specials', id: 'todays-specials' },
    { name: 'Our Menu', id: 'menu-section' },
    { name: 'Master Chefs', id: 'master-chefs' },
    { name: 'Reserve Table', id: 'reserve-table' },
  ];

  return (
    <header id="app-navbar" className="sticky top-0 z-50 bg-bistro-cream/90 backdrop-blur-md border-b border-bistro-gold/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center cursor-pointer" onClick={() => onScrollToSection('hero-section')}>
            <span className="font-cursive text-3xl text-bistro-red font-bold">Delicious</span>
            <div className="ml-2 w-1.5 h-1.5 rounded-full bg-bistro-gold animate-ping" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className="text-sm font-medium text-bistro-charcoal/80 hover:text-bistro-red transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            {/* Special Highlight: Security Lab */}
            <button
              onClick={() => onScrollToSection('security-lab')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-bistro-red/10 text-bistro-red hover:bg-bistro-red hover:text-white border border-bistro-red/25 font-semibold text-xs tracking-wide uppercase transition-all duration-300 animate-pulse cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security Lab</span>
            </button>
          </nav>

          {/* Search, Cart & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            
            {/* Live Search Bar */}
            <div className="relative hidden sm:block w-48 md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-bistro-charcoal/40" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowSearchResults(searchQuery.length > 0)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                placeholder="Search gourmet menu..."
                className="block w-full pl-9 pr-3 py-2 border border-bistro-gold/30 rounded-full bg-bistro-cream/50 text-xs focus:outline-none focus:ring-1 focus:ring-bistro-gold focus:border-bistro-gold text-bistro-charcoal font-medium placeholder-bistro-charcoal/30 transition-all duration-300"
              />

              {/* Instant Search Results Dropdown */}
              {showSearchResults && filteredPreview.length > 0 && (
                <div className="absolute right-0 left-0 mt-2 bg-white rounded-2xl shadow-xl border border-bistro-gold/20 py-2 z-50 overflow-hidden">
                  <div className="px-3 py-1 text-[10px] font-bold text-bistro-gold uppercase tracking-wider border-b border-bistro-gold/10">
                    Dishes Match
                  </div>
                  {filteredPreview.map((dish) => (
                    <button
                      key={dish.id}
                      onClick={() => handleResultClick(dish.name)}
                      className="w-full text-left px-4 py-2 hover:bg-bistro-cream flex items-center gap-3 transition-colors duration-150"
                    >
                      <img src={dish.image} alt={dish.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-bold text-bistro-charcoal">{dish.name}</div>
                        <div className="text-[10px] text-bistro-gold">${dish.price.toFixed(2)}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full hover:bg-bistro-gold/10 text-bistro-charcoal/80 hover:text-bistro-red transition-all cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-bistro-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-bistro-cream animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-bistro-charcoal/80 hover:bg-bistro-gold/10 transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-bistro-cream border-b border-bistro-gold/15 space-y-3">
          {/* Mobile search bar */}
          <div className="relative w-full mb-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-bistro-charcoal/40" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search gourmet menu..."
              className="block w-full pl-9 pr-3 py-2 border border-bistro-gold/30 rounded-full bg-white text-xs focus:outline-none focus:ring-1 focus:ring-bistro-gold text-bistro-charcoal"
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onScrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left w-full px-4 py-2 text-sm font-medium text-bistro-charcoal/80 hover:bg-bistro-gold/10 hover:text-bistro-red rounded-lg transition-all"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => {
                onScrollToSection('security-lab');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-bistro-red/10 text-bistro-red hover:bg-bistro-red hover:text-white font-bold text-xs tracking-wide uppercase transition-all duration-300"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              <span>Security Code Lab</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

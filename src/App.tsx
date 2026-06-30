import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UtensilsCrossed, CalendarDays, ShoppingBag, X, 
  Plus, Minus, Sparkles, ShieldCheck, HelpCircle, ChevronRight 
} from 'lucide-react';

// Import subcomponents
import Navbar from './components/Navbar';
import ChefClocheIllustration from './components/ChefClocheIllustration';
import Recommended from './components/Recommended';
import Specials from './components/Specials';
import QualityAssurance from './components/QualityAssurance';
import MenuSection from './components/MenuSection';
import Chefs from './components/Chefs';
import ReservationForm from './components/ReservationForm';
import SecurityGuide from './components/SecurityGuide';
import Footer from './components/Footer';

// Types
import { Dish } from './types';

interface CartItem {
  dish: Dish;
  quantity: number;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Smooth scroll helper
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Cart operations
  const handleAddToCart = (dish: Dish) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prevCart.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { dish, quantity: 1 }];
    });
    // Visual micro-feedback: open cart automatically to show additions
    setIsCartOpen(true);
  };

  const handleUpdateQty = (dishId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCart([]);
      setIsCartOpen(false);
    }, 4000);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen font-sans bg-bistro-cream select-none overflow-x-hidden">
      
      {/* Top Notification Promo Banner */}
      <div className="bg-bistro-charcoal text-white text-[11px] font-bold py-2 px-4 border-b border-bistro-gold/25 text-center tracking-wider uppercase flex items-center justify-center gap-2 relative z-50">
        <Sparkles className="w-3.5 h-3.5 text-bistro-gold animate-bounce" />
        <span>Grand Reopening: Enjoy Michelin standards directly at home.</span>
        <button 
          onClick={() => handleScrollToSection('security-lab')} 
          className="ml-3 px-2 py-0.5 rounded bg-bistro-red text-[9px] font-extrabold hover:bg-white hover:text-bistro-charcoal transition-colors duration-200 flex items-center gap-1"
        >
          <ShieldCheck className="w-3 h-3 text-amber-300" />
          <span>Security Code Audit Active</span>
        </button>
      </div>

      {/* Central Header Navigation */}
      <Navbar 
        onSearch={setSearchQuery} 
        onScrollToSection={handleScrollToSection}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Main Container */}
      <main>
        
        {/* HERO SECTION */}
        <section id="hero-section" className="relative min-h-[calc(100vh-112px)] flex items-center pt-10 pb-16 overflow-hidden bg-bistro-cream">
          {/* Radial decorative ambiance */}
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-bistro-gold/5 filter blur-[150px] pointer-events-none" />
          <div className="absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full bg-bistro-red/5 filter blur-[180px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Slogan, descriptors, CTAs (7 cols) */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-8">
                
                {/* Visual Accent Badge */}
                <div className="inline-flex items-center gap-1.5 bg-bistro-gold/15 border border-bistro-gold/30 px-4 py-1.5 rounded-full text-bistro-charcoal/80 font-bold text-[10px] tracking-widest uppercase">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-bistro-red" />
                  <span>Michelin Star Gastronomy Salon</span>
                </div>

                {/* Savor the Passion of Fine Cuisine */}
                <div className="space-y-3">
                  <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-bistro-charcoal leading-none">
                    Savor the <br />
                    <span className="font-cursive text-6xl sm:text-7xl xl:text-8xl text-bistro-red font-medium tracking-normal block mt-2 mb-1">
                      Passion
                    </span> 
                    of Fine Cuisine!
                  </h1>
                </div>

                <p className="text-sm text-bistro-charcoal/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Experience a sensory-driven masterclass combining authentic heritage with modern open-flame smoke profiles, curated by award-winning chefs.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => handleScrollToSection('reserve-table')}
                    className="w-full sm:w-auto bg-bistro-red hover:bg-bistro-charcoal text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CalendarDays className="w-4 h-4 text-bistro-gold" />
                    <span>Reserve Your Table</span>
                  </button>

                  <button
                    onClick={() => handleScrollToSection('menu-section')}
                    className="w-full sm:w-auto bg-white hover:bg-bistro-cream border border-bistro-gold/40 text-bistro-charcoal font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Explore Our Menu</span>
                    <ChevronRight className="w-4 h-4 text-bistro-gold" />
                  </button>
                </div>

                {/* Minimalist Indicators */}
                <div className="pt-8 border-t border-bistro-gold/15 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                  <div>
                    <span className="font-serif text-2xl font-black text-bistro-charcoal">01</span>
                    <span className="text-[10px] text-bistro-gold uppercase font-bold tracking-wider block mt-1">Fresh Harvest</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-black text-bistro-charcoal">03</span>
                    <span className="text-[10px] text-bistro-gold uppercase font-bold tracking-wider block mt-1">Michelin Chefs</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-black text-bistro-charcoal">100%</span>
                    <span className="text-[10px] text-bistro-gold uppercase font-bold tracking-wider block mt-1">Pure Organic</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Dynamic Interactive Chef Cloche (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <ChefClocheIllustration />
              </div>

            </div>
          </div>
        </section>

        {/* RECOMMENDED DISHES */}
        <Recommended onAddToCart={handleAddToCart} />

        {/* TODAY'S PREMIUM SPECIALS */}
        <Specials onAddToCart={handleAddToCart} />

        {/* QUALITY STANDARDS ASSURANCE */}
        <QualityAssurance />

        {/* FULL DINING MENU SECTION */}
        <MenuSection onAddToCart={handleAddToCart} searchQuery={searchQuery} />

        {/* MASTER CHEFS TEAM */}
        <Chefs />

        {/* INTERACTIVE TABLE SEATING CHART RESERVATION */}
        <ReservationForm />

        {/* EDUCATIONAL CYBERSECURITY LAB MODULES */}
        <SecurityGuide />

      </main>

      {/* COMPACT FOOTER */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* SLIDE-OVER SHOPPING CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark blur background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm cursor-pointer"
            />

            {/* Cart Drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[440px] bg-white z-50 shadow-2xl flex flex-col justify-between border-l border-bistro-gold/15"
            >
              {/* Header */}
              <div className="p-6 border-b border-bistro-gold/10 flex items-center justify-between bg-bistro-cream">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-bistro-red" />
                  <h3 className="font-serif text-lg font-bold text-bistro-charcoal">
                    Gastronomic Order
                  </h3>
                  <span className="bg-bistro-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {cartCount} items
                  </span>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full bg-white/80 hover:bg-bistro-red hover:text-white border border-bistro-gold/15 text-bistro-charcoal/60 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {checkoutSuccess ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-emerald-800">
                      Order Placed Securely!
                    </h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                      We've compiled your order with encrypted transaction headers. Check with your server or dispatch shortly.
                    </p>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-24 space-y-4">
                    <span className="text-5xl inline-block filter opacity-60">🍽️</span>
                    <h4 className="font-serif text-base font-bold text-bistro-charcoal">
                      Your Order is Empty
                    </h4>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                      Add some recommended signature dishes or today's specials to begin your culinary journey.
                    </p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        handleScrollToSection('menu-section');
                      }}
                      className="text-xs font-bold text-bistro-red hover:underline"
                    >
                      Browse Cuisine Menu
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.dish.id}
                      className="flex gap-4 p-4 rounded-2xl bg-bistro-cream/30 border border-bistro-gold/10 hover:border-bistro-gold/25 transition-all flex-row items-center"
                    >
                      {/* Dish miniature */}
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-14 h-14 rounded-xl object-cover shadow-sm shrink-0"
                      />

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif text-xs font-bold text-bistro-charcoal truncate leading-tight">
                          {item.dish.name}
                        </h5>
                        <p className="text-[10px] text-bistro-gold font-bold mt-1 leading-none">
                          ${item.dish.price.toFixed(2)} each
                        </p>
                      </div>

                      {/* Counter Controls */}
                      <div className="flex items-center gap-2 bg-white rounded-full border border-bistro-gold/20 px-2.5 py-1 shrink-0">
                        <button
                          onClick={() => handleUpdateQty(item.dish.id, -1)}
                          className="text-gray-400 hover:text-bistro-red transition-colors p-0.5 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-bistro-charcoal w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQty(item.dish.id, 1)}
                          className="text-gray-400 hover:text-bistro-red transition-colors p-0.5 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer Summary */}
              {cart.length > 0 && !checkoutSuccess && (
                <div className="p-6 border-t border-bistro-gold/15 bg-bistro-cream/50 space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal:</span>
                      <span className="font-semibold text-bistro-charcoal">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Tax & Service:</span>
                      <span className="font-semibold text-bistro-charcoal">$0.00 (Inclusive)</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-bistro-gold/10 text-bistro-charcoal font-bold font-serif">
                      <span>Total Amount:</span>
                      <span className="text-bistro-red">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-bistro-red hover:bg-bistro-charcoal text-white font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-colors duration-200 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShieldCheck className="w-4.5 h-4.5 text-amber-300" />
                      <span>Proceed to Secure Checkout</span>
                    </button>

                    <button
                      onClick={handleClearCart}
                      className="w-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-400 font-bold text-[10px] py-2 rounded-xl uppercase transition-colors cursor-pointer"
                    >
                      Clear Selection
                    </button>
                  </div>

                  <p className="text-[9px] text-gray-400 text-center leading-normal">
                    This checkout is simulated. Your transaction data is scrubbed and kept transient to respect data protection protocols.
                  </p>
                </div>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

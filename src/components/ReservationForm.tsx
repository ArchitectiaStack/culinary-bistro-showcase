import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Users, CheckCircle, Shield, UtensilsCrossed, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation, Table } from '../types';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(4);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<Reservation | null>(null);

  // Initialize a mock floorplan map of 6 tables with physical positions
  const tables: Table[] = [
    { id: 1, capacity: 2, isReserved: false, x: 20, y: 25 },
    { id: 2, capacity: 4, isReserved: false, x: 50, y: 25 },
    { id: 3, capacity: 6, isReserved: true, x: 80, y: 25 }, // already booked
    { id: 4, capacity: 2, isReserved: false, x: 20, y: 70 },
    { id: 5, capacity: 4, isReserved: false, x: 50, y: 70 },
    { id: 6, capacity: 8, isReserved: false, x: 80, y: 70 }  // VIP booth
  ];

  const handleTableSelect = (tableId: number, isReserved: boolean, capacity: number) => {
    if (isReserved) return;
    setSelectedTable(tableId);
    setGuests(capacity); // Auto-scale guests based on selected table
  };

  // Secure Input Sanitization matching XSS guidelines
  const sanitizeHTML = (str: string): string => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Input validations
    if (!name.trim()) {
      setErrorMsg('Please enter a reservation name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter a contact phone number.');
      return;
    }
    if (!date) {
      setErrorMsg('Please select a dining date.');
      return;
    }
    if (!selectedTable) {
      setErrorMsg('Please select a preferred table on the floorplan map.');
      return;
    }

    const cleanName = sanitizeHTML(name);
    const cleanEmail = sanitizeHTML(email);
    const cleanPhone = sanitizeHTML(phone);

    const booking: Reservation = {
      id: `RES-${Math.floor(100000 + Math.random() * 900000)}`,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      date,
      time,
      guests,
      tableNumber: selectedTable,
      status: 'confirmed'
    };

    setConfirmedBooking(booking);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('18:00');
    setGuests(4);
    setSelectedTable(null);
    setIsSubmitted(false);
    setConfirmedBooking(null);
  };

  return (
    <section id="reserve-table" className="py-24 bg-bistro-cream/10 border-t border-bistro-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-bistro-gold">Gastronomic Seating</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bistro-charcoal mt-2 tracking-tight">
            Reserve Your Table
          </h2>
          <div className="w-16 h-0.5 bg-bistro-red mx-auto mt-4" />
        </div>

        <div className="bg-white rounded-3xl border border-bistro-gold/15 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Form (or receipt) (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-bistro-gold/15 flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <UtensilsCrossed className="w-5 h-5 text-bistro-red" />
                      <h3 className="font-serif text-xl font-bold text-bistro-charcoal">
                        Booking Parameters
                      </h3>
                    </div>

                    {errorMsg && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-2xl">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleBook} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-bistro-gold uppercase tracking-wider mb-1.5">
                          Reservation Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Christopher Nolan"
                          className="w-full px-4 py-2.5 rounded-xl border border-bistro-gold/20 text-xs focus:ring-1 focus:ring-bistro-gold focus:outline-none focus:border-bistro-gold text-bistro-charcoal"
                        />
                      </div>

                      {/* Contact row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-bistro-gold uppercase tracking-wider mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="chris@nolan.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-bistro-gold/20 text-xs focus:ring-1 focus:ring-bistro-gold focus:outline-none focus:border-bistro-gold text-bistro-charcoal"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-bistro-gold uppercase tracking-wider mb-1.5">
                            Contact Phone
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (555) 0199"
                            className="w-full px-4 py-2.5 rounded-xl border border-bistro-gold/20 text-xs focus:ring-1 focus:ring-bistro-gold focus:outline-none focus:border-bistro-gold text-bistro-charcoal"
                          />
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-bistro-gold uppercase tracking-wider mb-1.5">
                            Date
                          </label>
                          <input
                            type="date"
                            value={date}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-bistro-gold/20 text-xs focus:ring-1 focus:ring-bistro-gold focus:outline-none focus:border-bistro-gold text-bistro-charcoal"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-bistro-gold uppercase tracking-wider mb-1.5">
                            Dining Hour
                          </label>
                          <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-bistro-gold/20 text-xs focus:ring-1 focus:ring-bistro-gold focus:outline-none focus:border-bistro-gold text-bistro-charcoal bg-white"
                          >
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                            <option value="22:00">10:00 PM</option>
                          </select>
                        </div>
                      </div>

                      {/* Display Table Number chosen */}
                      <div className="bg-bistro-cream/50 p-3.5 rounded-2xl border border-bistro-gold/10">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-bistro-charcoal/80">Selected Table:</span>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase ${
                            selectedTable 
                              ? 'bg-bistro-red text-white' 
                              : 'bg-bistro-gold/20 text-bistro-gold'
                          }`}>
                            {selectedTable ? `Table #${selectedTable}` : 'Pick on right map'}
                          </span>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-1.5">
                          Selecting a table automatically configures the reservation seat limits.
                        </p>
                      </div>

                      {/* Book button */}
                      <button
                        type="submit"
                        className="w-full bg-bistro-red hover:bg-bistro-charcoal text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider transition-colors duration-200 shadow-md cursor-pointer"
                      >
                        Confirm Booking Securely
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="receipt-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    {/* CONFIRMED RECEIPT TICKET STYLE */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-bounce">
                      <CheckCircle className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-emerald-800">
                      Booking Confirmed!
                    </h3>
                    <p className="text-[10px] text-gray-500 font-semibold tracking-wide uppercase mt-1">
                      Interactive Receipt
                    </p>

                    {/* Receipt Dotted Frame */}
                    <div className="my-6 p-5 border-2 border-dashed border-bistro-gold/30 bg-bistro-cream/40 rounded-2xl text-left space-y-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-1 bg-bistro-red/10 text-bistro-red rounded-bl-xl">
                        <Sparkles className="w-4 h-4 animate-spin" />
                      </div>

                      <div className="flex justify-between text-xs border-b border-bistro-gold/10 pb-2">
                        <span className="font-semibold text-gray-400">ID CODE:</span>
                        <span className="font-mono font-bold text-bistro-charcoal">{confirmedBooking?.id}</span>
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-400">Guest:</span>
                        <span className="font-bold text-bistro-charcoal">{confirmedBooking?.name}</span>
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-400">Table Choice:</span>
                        <span className="font-bold text-bistro-red">Table #{confirmedBooking?.tableNumber}</span>
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-400">Date & Hour:</span>
                        <span className="font-bold text-bistro-charcoal">{confirmedBooking?.date} @ {confirmedBooking?.time}</span>
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-400">Party Size:</span>
                        <span className="font-bold text-bistro-charcoal">{confirmedBooking?.guests} Guests max</span>
                      </div>

                      {/* Security stamp */}
                      <div className="pt-3 border-t border-bistro-gold/10 flex items-center justify-center gap-1.5 text-[8.5px] font-bold text-bistro-olive tracking-widest uppercase">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Data Protected (SSL/XSS OK)</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-500 max-w-xs mx-auto mb-6">
                      An encrypted reservation voucher has been sent to <span className="font-semibold text-bistro-charcoal">{confirmedBooking?.email}</span>. Show this ID upon seating.
                    </p>

                    <button
                      onClick={handleReset}
                      className="text-xs font-bold text-bistro-red hover:underline cursor-pointer"
                    >
                      Book Another Table
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Right Column: Visual Table Seating floorplan layout map (7 cols) */}
            <div className="lg:col-span-7 bg-bistro-charcoal p-8 sm:p-10 text-white relative flex flex-col justify-between">
              
              {/* Radial gradient background accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-bistro-gold/10 filter blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Interactive Bistro Floorplan
                    </h3>
                    <p className="text-[10px] text-gray-400">
                      Pick your exact seating zone to sync reservation parameters.
                    </p>
                  </div>

                  <span className="text-[9px] bg-bistro-gold/15 text-bistro-gold border border-bistro-gold/25 font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">
                    Gourmet Salon
                  </span>
                </div>

                {/* Status legend keys */}
                <div className="flex flex-wrap gap-4 mb-8 text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-bistro-gold" />
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-gray-600" />
                    <span>Booked (Locked)</span>
                  </div>
                </div>

                {/* The Seating Map Grid Frame */}
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl border border-white/5 shadow-inner p-4 overflow-hidden flex flex-col justify-between">
                  
                  {/* Stylized Kitchen / Entry bounds */}
                  <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-b from-amber-500/10 to-transparent flex items-center justify-center">
                    <span className="text-[7.5px] font-extrabold tracking-widest text-bistro-gold uppercase">Gourmet Open Kitchen Zone</span>
                  </div>
                  <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-t from-gray-500/5 to-transparent flex items-center justify-center">
                    <span className="text-[7.5px] font-extrabold tracking-widest text-gray-500 uppercase">Entrance & Foyer</span>
                  </div>

                  {/* Interactive Floor Plan Map of Tables */}
                  <div className="grid grid-cols-3 gap-6 h-full items-center py-6">
                    {tables.map((table) => {
                      const isSelected = selectedTable === table.id;
                      const isReserved = table.isReserved;

                      // Decide theme styling
                      let tableClass = '';
                      if (isReserved) {
                        tableClass = 'bg-neutral-800 border-neutral-700 text-neutral-600 cursor-not-allowed';
                      } else if (isSelected) {
                        tableClass = 'bg-bistro-gold border-amber-300 text-bistro-charcoal scale-105 shadow-lg shadow-bistro-gold/30';
                      } else {
                        tableClass = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/25 cursor-pointer';
                      }

                      return (
                        <div
                          key={table.id}
                          onClick={() => handleTableSelect(table.id, isReserved, table.capacity)}
                          className={`aspect-square rounded-2xl border-2 flex flex-col justify-center items-center transition-all duration-300 ${tableClass}`}
                        >
                          <span className="text-sm font-serif font-black">
                            T-{table.id}
                          </span>
                          <span className="text-[8.5px] font-bold tracking-wider uppercase mt-1">
                            {table.capacity} Seats
                          </span>

                          {/* Extra info */}
                          {isReserved && (
                            <span className="text-[6.5px] font-extrabold uppercase mt-1 px-1 py-0.5 bg-neutral-900 rounded text-neutral-500">
                              Booked
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[6.5px] font-extrabold uppercase mt-1 px-1 py-0.5 bg-bistro-charcoal rounded text-bistro-gold animate-pulse">
                              Chosen
                            </span>
                          )}
                          {!isReserved && !isSelected && (
                            <span className="text-[6.5px] font-extrabold uppercase mt-1 px-1 py-0.5 bg-emerald-950/40 rounded text-emerald-400">
                              Free
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>

              {/* Floor Plan Advisory */}
              <div className="mt-8 text-[10px] text-gray-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 flex gap-2 items-start">
                <Shield className="w-4 h-4 text-bistro-gold shrink-0 mt-0.5" />
                <span>
                  <strong>Interactive Seating Note:</strong> Table selection locks your party size guidelines automatically. For custom banquet reservations (larger than 8), kindly contact our Front Desk securely.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

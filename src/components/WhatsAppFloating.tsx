import React from 'react';
import { MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40">
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Al%20Sheikh%20Tikka%20House%2C%20I%20would%20like%20to%20place%20an%20order`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Al Sheikh Tikka House on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 border-2 border-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <MessageSquare className="w-6 h-6 fill-white" />

        {/* Small badge dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500" />
        </span>

        {/* Tooltip on desktop hover */}
        <span className="hidden md:group-hover:block absolute right-14 bg-stone-900 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-md whitespace-nowrap pointer-events-none">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
};

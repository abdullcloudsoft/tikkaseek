import React from 'react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onCallClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCallClick }) => {
  return (
    <section id="about" aria-label="About the Restaurant" className="py-10 sm:py-14 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/80 shadow-2xs">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-2">
              Rawalpindi Food Heritage
            </span>
            <h2
              id="about-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4 leading-tight"
            >
              Authentic Pakistani BBQ in Rawalpindi
            </h2>

            <div className="w-12 h-0.5 bg-red-700 mx-auto mb-5" />

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
              <strong className="font-semibold text-stone-900">Al Sheikh Tikka House</strong> is conveniently located on Saidpur Road, Asghar Mall Road in Rawalpindi, Pakistan. We offer authentic Pakistani BBQ, freshly grilled chicken and beef tikkas, seekh kababs, and desi specialties prepared hot over real charcoal embers.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
              Our food is crafted for guests seeking authentic taste, traditional marinades, and freshly baked tandoori bread, welcoming dine-in families and takeaway orders across Rawalpindi.
            </p>

            {/* Quick Action Info Strip */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                id="about-call-cta"
                type="button"
                onClick={onCallClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-700 text-white text-xs sm:text-sm font-semibold hover:bg-red-800 transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call Restaurant</span>
              </button>

              <a
                id="about-directions-cta"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs sm:text-sm font-semibold hover:bg-stone-50 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Saidpur Road Location</span>
              </a>

              <a
                id="about-whatsapp-cta"
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Al%20Sheikh%20Tikka%20House%2C%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

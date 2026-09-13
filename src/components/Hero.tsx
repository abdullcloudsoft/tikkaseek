import React from 'react';
import { Phone, ChevronDown, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onCallClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCallClick }) => {
  return (
    <section
      id="home"
      aria-label="Welcome to Al Sheikh Tikka House"
      className="relative pt-18 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 bg-stone-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compact Hero Banner Card */}
        <div
          id="hero-banner-container"
          className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-900 min-h-[360px] sm:min-h-[420px] md:min-h-[460px] flex items-end"
        >
          {/* Single Main Food Photograph */}
          <img
            id="hero-main-image"
            src={RESTAURANT_INFO.heroImage}
            alt="Authentic Pakistani chicken tikka and seekh kabab sizzling on hot glowing charcoal embers"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 transition-transform duration-700 hover:scale-102"
            loading="eager"
            fetchPriority="high"
          />

          {/* Minimal Subtle Gradient for Text Contrast (not a huge dark overlay, keeping the food bright and appetizing) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Minimal Content Overlay at the bottom */}
          <div className="relative z-10 w-full p-5 sm:p-8 md:p-10 text-white">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 text-stone-200 text-xs font-medium mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Saidpur Road, Asghar Mall Road, Rawalpindi</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight drop-shadow-xs"
            >
              AL SHEIKH TIKKA HOUSE
            </h1>

            {/* Short Tagline */}
            <p
              id="hero-tagline"
              className="text-amber-300 font-medium text-sm sm:text-lg md:text-xl max-w-xl mb-5 drop-shadow-xs"
            >
              &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="hero-view-menu-btn"
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white text-stone-900 hover:bg-stone-100 text-sm sm:text-base font-semibold transition-all shadow-md active:scale-98"
              >
                <span>View Menu</span>
                <ChevronDown className="w-4 h-4 text-stone-600" />
              </a>

              <button
                id="hero-call-now-btn"
                type="button"
                onClick={onCallClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-semibold transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

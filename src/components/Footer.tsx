import React from 'react';
import { MapPin, Phone, Mail, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-white border-t border-stone-200/80 pt-10 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-100">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-red-700 flex items-center justify-center text-amber-300">
                <Flame className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-stone-900 tracking-tight">
                AL SHEIKH TIKKA HOUSE
              </span>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              Authentic Pakistani Tikka & BBQ specialties freshly prepared on charcoal grills in Rawalpindi, Pakistan.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <a
                id="footer-fb-link"
                href={RESTAURANT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-blue-700 transition-colors"
              >
                Facebook
              </a>
              <span className="text-stone-300">â€¢</span>
              <a
                id="footer-ig-link"
                href={RESTAURANT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-pink-700 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
              <li>
                <a href="#home" className="hover:text-red-700 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-700 transition-colors">BBQ & Tikka Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-700 transition-colors">About Restaurant</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-700 transition-colors">Food Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-700 transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wider mb-3">
              Rawalpindi Location
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {RESTAURANT_INFO.phones.map((p) => (
                    <a
                      key={p.raw}
                      href={`tel:${p.raw}`}
                      className="hover:text-red-700 transition-colors font-medium text-stone-800"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="hover:text-red-700 transition-colors break-all"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© {currentYear} Al Sheikh Tikka House. All rights reserved.</p>
          <p className="text-[11px] text-stone-600">
            Saidpur Road, Asghar Mall Road, Rawalpindi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

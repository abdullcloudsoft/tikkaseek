import React from 'react';
import { MapPin, Phone, Mail, Navigation, MessageSquare, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactSectionProps {
  onCallClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCallClick }) => {
  return (
    <section id="contact" aria-label="Contact and Location" className="py-10 sm:py-14 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-700 block mb-2">
            Visit & Order
          </span>
          <h2
            id="contact-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight"
          >
            Contact & Location
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            Get in touch for takeaway, family dining, or fast local BBQ orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Contact Details Card */}
          <div className="md:col-span-6 lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs">
            <div className="mb-6 pb-5 border-b border-stone-100">
              <h3 className="font-display font-bold text-xl text-stone-900 mb-1">
                AL SHEIKH TIKKA HOUSE
              </h3>
              <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
                Pakistani BBQ & Desi Cuisine
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Address</span>
                <p className="text-sm font-medium text-stone-900 mt-0.5 leading-snug">
                  {RESTAURANT_INFO.location}
                </p>
              </div>
            </div>

            {/* Phone Numbers (Clickable) */}
            <div className="flex items-start gap-3.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="w-full">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Phone Contacts</span>
                <div className="flex flex-col gap-1.5 mt-1">
                  {RESTAURANT_INFO.phones.map((p) => (
                    <a
                      key={p.raw}
                      id={`contact-phone-${p.raw}`}
                      href={`tel:${p.raw}`}
                      className="inline-flex items-center justify-between text-sm font-semibold text-stone-900 hover:text-red-700 transition-colors py-1 px-2 -mx-2 rounded-md hover:bg-stone-50"
                    >
                      <span>{p.display}</span>
                      <span className="text-[11px] font-normal text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        {p.type}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Email Address</span>
                <a
                  id="contact-email-link"
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-sm font-medium text-stone-900 hover:text-red-700 break-all transition-colors block mt-0.5"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100">
              <button
                id="contact-action-call"
                type="button"
                onClick={onCallClick}
                className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-semibold transition-colors active:scale-98 shadow-2xs text-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Call Now</span>
              </button>

              <a
                id="contact-action-whatsapp"
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Al%20Sheikh%20Tikka%20House%2C%20I%20would%20like%20to%20place%20an%20order`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors active:scale-98 shadow-2xs text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                id="contact-action-directions"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors active:scale-98 shadow-2xs text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Location Map & Social Connect Card */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-4">
            {/* Interactive Map Container */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-2xs p-2">
              <div className="relative w-full h-56 sm:h-68 rounded-xl overflow-hidden bg-stone-100">
                <iframe
                  title="Al Sheikh Tikka House Location Map"
                  src="https://maps.google.com/maps?q=Saidpur+Road,+Asghar+Mall+Road,+Rawalpindi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map showing Saidpur Road, Asghar Mall Road, Rawalpindi"
                />
              </div>

              <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-stone-900 block">
                    Rawalpindi Saidpur Road Branch
                  </span>
                  <span className="text-[11px] text-stone-600">
                    Accessible via Asghar Mall Road & Saidpur Road
                  </span>
                </div>
                <a
                  id="open-maps-full-btn"
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-800"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-stone-900 text-sm">
                  Connect on Social Media
                </h4>
                <p className="text-xs text-stone-600">
                  Follow our updates, food posts, and new specials.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Facebook Button */}
                <a
                  id="social-facebook-link"
                  href={RESTAURANT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Al Sheikh Tikka House Facebook Page"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Instagram Button */}
                <a
                  id="social-instagram-link"
                  href={RESTAURANT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Al Sheikh Tikka House Instagram Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-pink-50 border border-pink-100 text-pink-700 hover:bg-pink-100 text-xs font-semibold transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

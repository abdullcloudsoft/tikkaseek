import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Flame, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onCallClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCallClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-xs border-b border-stone-100 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          id="nav-brand"
          className="flex items-center gap-2 group text-left"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-amber-300 shadow-xs group-hover:bg-red-800 transition-colors">
            <Flame className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="font-display font-bold text-base sm:text-lg text-stone-900 tracking-tight block leading-tight">
              AL SHEIKH
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-700 block -mt-0.5">
              Tikka House
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase()}`}
              className="text-stone-700 hover:text-red-700 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call Now CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            id="nav-call-btn-desktop"
            onClick={onCallClick}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-all shadow-xs active:scale-98"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Call */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="nav-mobile-call-icon"
            onClick={onCallClick}
            type="button"
            aria-label="Call restaurant"
            className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center active:scale-95 transition-transform"
          >
            <Phone className="w-4.5 h-4.5" />
          </button>

          <button
            id="nav-hamburger-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg border border-stone-200 text-stone-700 flex items-center justify-center active:bg-stone-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-stone-200 px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col gap-1 pb-3 border-b border-stone-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-stone-800 hover:bg-red-50 hover:text-red-700 text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Quick Action Buttons */}
          <div className="pt-3 grid grid-cols-2 gap-2">
            <button
              id="mobile-drawer-call-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onCallClick();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-red-700 text-white font-semibold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </button>
            <a
              id="mobile-drawer-whatsapp-btn"
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Al%20Sheikh%20Tikka%20House%2C%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-3 text-center text-xs text-stone-500">
            Saidpur Road, Asghar Mall Road, Rawalpindi
          </div>
        </div>
      )}
    </header>
  );
};

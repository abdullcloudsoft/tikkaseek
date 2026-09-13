import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  return (
    <section id="menu" aria-label="Restaurant Menu" className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Signature Specialties</span>
          </div>
          <h2
            id="menu-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight"
          >
            Specialty BBQ & Tikka
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            Charcoal grilled to order with fresh authentic Pakistani marinades and spices.
          </p>
        </div>

        {/* Compact 8-Item Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {MENU_ITEMS.map((item, index) => (
            <article
              key={item.id}
              id={`menu-card-${item.id}`}
              className="group bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-sm hover:border-amber-400/80 transition-all overflow-hidden flex flex-row sm:flex-col justify-between p-3 sm:p-0"
            >
              {/* Image & Main Info Container */}
              <div className="flex flex-row sm:flex-col items-center sm:items-stretch gap-3 sm:gap-0 flex-1 min-w-0">
                {/* Small neat food picture */}
                <div className="relative w-22 h-22 sm:w-full sm:h-38 rounded-lg sm:rounded-none bg-stone-100 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    loading={index > 3 ? 'lazy' : 'eager'}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                  />
                  {/* Subtle Badge on desktop */}
                  <div className="hidden sm:block absolute top-2 right-2 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 sm:p-4">
                  <div className="flex items-baseline justify-between gap-1 mb-0.5 sm:mb-1">
                    <h3 className="font-display font-bold text-stone-900 text-sm sm:text-base group-hover:text-red-700 transition-colors truncate sm:whitespace-normal">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed mb-2 sm:mb-3">
                    {item.description}
                  </p>

                  {/* Mobile-only Price & Order button inline */}
                  <div className="flex sm:hidden items-center justify-between gap-2 mt-1">
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      {item.price}
                    </span>
                    <button
                      id={`mobile-order-btn-${item.id}`}
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-900 hover:bg-red-700 text-white text-[11px] font-semibold transition-colors active:scale-95 shadow-2xs"
                      aria-label={`Order ${item.name}`}
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Bottom Card Footer: Price & Small Order Button */}
              <div className="hidden sm:flex px-3.5 sm:px-4 pb-3.5 pt-2 border-t border-stone-100/80 items-center justify-between">
                <span className="text-[11px] font-medium text-stone-600">
                  {item.price}
                </span>

                <button
                  id={`order-btn-${item.id}`}
                  type="button"
                  onClick={() => onSelectItem(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-900 hover:bg-red-700 text-white text-xs font-semibold transition-colors active:scale-95 shadow-2xs"
                  aria-label={`Order ${item.name}`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Subtle Menu Note */}
        <div className="mt-6 text-center text-xs text-stone-600 bg-stone-50 border border-stone-200/60 rounded-lg py-2.5 px-4 max-w-2xl mx-auto">
          <span>* Menu items are prepared fresh on order. Prices and daily cuts are confirmed directly upon placing your order via call or WhatsApp.</span>
        </div>
      </div>
    </section>
  );
};

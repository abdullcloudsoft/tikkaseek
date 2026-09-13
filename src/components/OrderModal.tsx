import React from 'react';
import { X, MessageSquare, Phone } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const whatsappOrderUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Al Sheikh Tikka House, I would like to order: ${item.name}. Please confirm the current price and preparation time.`
  )}`;

  return (
    <div
      id="order-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-dish-name"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="order-modal-card"
        className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-40 w-full bg-stone-100">
          <img
            src={item.image}
            alt={item.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <button
            id="order-modal-close-btn"
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-xs font-semibold px-2.5 py-1 rounded">
            {item.price}
          </div>
        </div>

        {/* Details */}
        <div className="p-5">
          <h3
            id="order-modal-dish-name"
            className="font-display font-bold text-stone-900 text-xl mb-1"
          >
            {item.name}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-2.5 mb-5 text-[11px] text-amber-900">
            Freshly grilled on charcoal to order. Connect directly with our staff to specify portion size or spice level.
          </div>

          {/* Action buttons */}
          <div className="space-y-2">
            <a
              id="order-modal-whatsapp-cta"
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs transition-colors active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </a>

            <a
              id="order-modal-call-cta"
              href="tel:03395756264"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm transition-colors active:scale-98"
            >
              <Phone className="w-4 h-4 text-red-700" />
              <span>Call to Order (0339 5756264)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Phone, X, MessageSquare, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="call-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="call-modal-card"
        className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div>
            <h3 id="call-modal-title" className="font-display font-bold text-stone-900 text-lg">
              Call Al Sheikh Tikka
            </h3>
            <p className="text-xs text-stone-500">
              Direct line to our Rawalpindi kitchen
            </p>
          </div>
          <button
            id="call-modal-close-btn"
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 flex items-center justify-center transition-colors"
            aria-label="Close call dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-4 space-y-2.5">
          {RESTAURANT_INFO.phones.map((phone) => (
            <a
              key={phone.raw}
              id={`modal-call-${phone.raw}`}
              href={`tel:${phone.raw}`}
              className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-red-600 hover:bg-red-50/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-700 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-stone-900 group-hover:text-red-700 block transition-colors">
                    {phone.display}
                  </span>
                  <span className="text-xs text-stone-500">{phone.type}</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full group-hover:bg-red-700 group-hover:text-white transition-colors">
                Call
              </span>
            </a>
          ))}

          <a
            id="modal-whatsapp-link"
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Al%20Sheikh%20Tikka%20House%2C%20I%20would%20like%20to%20place%20an%20order`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 block transition-colors">
                  Message on WhatsApp
                </span>
                <span className="text-xs text-stone-500">0339 5756264</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              Chat
            </span>
          </a>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
          <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="truncate">Saidpur Road, Asghar Mall Road, Rawalpindi</span>
        </div>
      </div>
    </div>
  );
};

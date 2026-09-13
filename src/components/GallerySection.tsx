import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" aria-label="Food Gallery" className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Glimpse</span>
          </div>
          <h2
            id="gallery-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight"
          >
            Fresh From The Grill
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            A small glimpse of authentic charcoal preparation, karahi pans, and fresh tandoor baking.
          </p>
        </div>

        {/* Gallery Grid (3 columns on desktop, 2 on tablet, 2 on mobile for compact balance) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-xl overflow-hidden aspect-4/3 bg-stone-100 border border-stone-200/80 cursor-pointer shadow-2xs hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* Subtle hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                <div className="flex items-center justify-between w-full text-white">
                  <div>
                    <span className="text-[10px] sm:text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs items-center justify-center text-white">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedPhoto && (
        <div
          id="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-stone-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="gallery-lightbox-close"
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 active:scale-95 transition-all"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-4/3 sm:aspect-16/10 w-full bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                  {selectedPhoto.category}
                </span>
                <p className="text-sm font-medium text-stone-200">
                  {selectedPhoto.title}
                </p>
              </div>
              <span className="text-xs text-stone-400">
                Al Sheikh Tikka House
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

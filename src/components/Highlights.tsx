import React from 'react';
import { Flame, UtensilsCrossed, Sparkles, Users } from 'lucide-react';
import { HIGHLIGHTS } from '../data/restaurantData';

export const Highlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-red-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-orange-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-red-700" />;
      default:
        return <Flame className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="highlights" aria-label="Special Highlights" className="py-6 sm:py-8 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              id={`highlight-card-${item.id}`}
              className="bg-white rounded-xl p-3.5 sm:p-4 border border-stone-200/70 shadow-2xs hover:border-amber-300/80 transition-colors flex flex-col justify-start"
            >
              <div className="w-9 h-9 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center mb-2.5 shrink-0">
                {getIcon(item.iconName)}
              </div>
              <h3 className="font-semibold text-stone-900 text-xs sm:text-sm md:text-base leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

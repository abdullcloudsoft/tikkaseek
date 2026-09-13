export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'UtensilsCrossed' | 'Sparkles' | 'Users';
}

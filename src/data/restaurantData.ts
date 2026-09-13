import heroPhoto from '../assets/images/pakistani_bbq_hero_1789218003447.jpg';
import chickenTikkaPhoto from '../assets/images/chicken_tikka_dish_1789218020580.jpg';
import { MenuItem, GalleryItem, HighlightItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Al Sheikh Tikka House',
  tagline: 'Authentic Tikka & BBQ, Full of Flavor',
  location: 'Saidpur Road, Asghar Mall Road, Rawalpindi, Pakistan',
  phones: [
    { display: '(051) 5541540', raw: '0515541540', tel: '+92515541540', type: 'Landline' },
    { display: '0339 5756264', raw: '03395756264', tel: '+923395756264', type: 'Mobile / WhatsApp' },
  ],
  whatsappNumber: '923395756264',
  email: 'Asarsheikh78607860@icloud.com',
  facebook: 'https://www.facebook.com/AlSheikhFoodies/',
  instagram: 'https://www.instagram.com/alsheikhfoodies/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Saidpur+Road+Asghar+Mall+Road+Rawalpindi+Pakistan',
  heroImage: heroPhoto,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    description: 'Quarter chicken leg or breast marinated in traditional spices and grilled over live charcoal.',
    price: 'Price on Order',
    image: chickenTikkaPhoto,
    alt: 'Freshly grilled Pakistani Chicken Tikka with charred edges and aromatic spices',
  },
  {
    id: 'beef-tikka',
    name: 'Beef Tikka',
    description: 'Tender prime beef cubes marinated with crushed chilies, papaya, and herbs, roasted on skewers.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80',
    alt: 'Succulent Pakistani charcoal-grilled Beef Tikka skewers',
  },
  {
    id: 'seekh-kabab',
    name: 'Seekh Kabab',
    description: 'Spiced minced meat skewered and barbecued to juicy perfection with coriander and onions.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=500&q=80',
    alt: 'Traditional charbroiled Seekh Kababs served with onions and mint sauce',
  },
  {
    id: 'chicken-boti',
    name: 'Chicken Boti',
    description: 'Boneless tender chicken pieces richly coated in BBQ spices and roasted over coals.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500&q=80',
    alt: 'Golden grilled Chicken Boti skewers with lime and spices',
  },
  {
    id: 'malai-boti',
    name: 'Malai Boti',
    description: 'Melt-in-your-mouth boneless chicken marinated in fresh dairy cream, mild herbs, and white pepper.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
    alt: 'Creamy Pakistani Malai Boti skewers grilled over open embers',
  },
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    description: 'Traditional desi wok curry with ripe tomatoes, freshly crushed black pepper, ginger, and green chilies.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80',
    alt: 'Authentic Pakistani Chicken Karahi bubbling in traditional iron wok',
  },
  {
    id: 'bbq-platter',
    name: 'BBQ Platter',
    description: 'A generous combination of Chicken Tikka, Seekh Kabab, and Boti served with mint raita and salad.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80',
    alt: 'Grand mixed Pakistani BBQ Platter featuring assorted skewers and fresh garnish',
  },
  {
    id: 'naan-roti',
    name: 'Naan & Roti',
    description: 'Freshly baked tandoori roghni naan with sesame seeds or soft whole wheat tandoori roti.',
    price: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1601050690187-5421d0a5e848?auto=format&fit=crop&w=500&q=80',
    alt: 'Freshly baked tandoori naan and roti fresh from the clay oven',
  },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'h1',
    title: 'Freshly Prepared BBQ',
    description: 'Every skewer is marinated with authentic spices and prepared fresh to your order.',
    iconName: 'Flame',
  },
  {
    id: 'h2',
    title: 'Authentic Pakistani Taste',
    description: 'True Rawalpindi BBQ recipes with real coal-fired flavors and balanced heat.',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'h3',
    title: 'Grilled to Perfection',
    description: 'Expertly roasted on charcoal grills ensuring juicy tenderness and smoky char.',
    iconName: 'Sparkles',
  },
  {
    id: 'h4',
    title: 'Family-Friendly Dining',
    description: 'Comfortable, welcoming, and relaxed atmosphere for families and gatherings.',
    iconName: 'Users',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Live Charcoal Sizzle',
    category: 'Grill',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=650&q=80',
    alt: 'Fresh skewers charbroiling over glowing coals on the BBQ pit',
  },
  {
    id: 'g2',
    title: 'Clay Oven Roghni Naan',
    category: 'Tandoor',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=650&q=80',
    alt: 'Fresh golden tandoori naan pulled hot from the tandoor',
  },
  {
    id: 'g3',
    title: 'Traditional Desi Karahi',
    category: 'Karahi',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=650&q=80',
    alt: 'Piping hot desi chicken karahi with fresh ginger and cilantro garnish',
  },
  {
    id: 'g4',
    title: 'Juicy Seekh Kabab Platter',
    category: 'BBQ',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=650&q=80',
    alt: 'Freshly grilled seekh kababs served with sliced onions and dipping sauce',
  },
  {
    id: 'g5',
    title: 'Charbroiled Skewers',
    category: 'Tikka',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=650&q=80',
    alt: 'Barbecue assortment with savory spices and vibrant garnishes',
  },
  {
    id: 'g6',
    title: 'Welcoming Ambience',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=650&q=80',
    alt: 'Warm and inviting restaurant dining hall for families and foodies',
  },
];

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { CallModal } from './components/CallModal';
import { OrderModal } from './components/OrderModal';
import { MenuItem } from './types';

export default function App() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-stone-100 text-stone-900 selection:bg-red-100 selection:text-red-900 font-sans">
      {/* Navigation */}
      <Navbar onCallClick={() => setCallModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero onCallClick={() => setCallModalOpen(true)} />

        {/* Highlights Section */}
        <Highlights />

        {/* Short 8-Item Menu Section */}
        <MenuSection onSelectItem={(item) => setSelectedOrderItem(item)} />

        {/* About Section */}
        <AboutSection onCallClick={() => setCallModalOpen(true)} />

        {/* Food Gallery Section */}
        <GallerySection />

        {/* Contact, Location & Social Links */}
        <ContactSection onCallClick={() => setCallModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Quick Dial Call Modal */}
      <CallModal isOpen={callModalOpen} onClose={() => setCallModalOpen(false)} />

      {/* Order Item Modal */}
      <OrderModal
        item={selectedOrderItem}
        onClose={() => setSelectedOrderItem(null)}
      />
    </div>
  );
}

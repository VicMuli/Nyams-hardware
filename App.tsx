import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CategoryHighlight from './components/CategoryHighlight';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    // Removed setIsCartOpen(true) to prevent auto-opening
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: Math.max(0, newQuantity) };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen relative">
      <Navbar 
        cart={cart} 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <main>
        <Hero />
        <Features />
        <CategoryHighlight />
        <ProductSection onAddToCart={handleAddToCart} />
        <AboutSection />
        <Testimonials />
        <ContactCTA />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton isCartOpen={isCartOpen} />
    </div>
  );
};

export default App;
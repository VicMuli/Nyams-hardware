"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hammer, ShoppingCart, Menu, X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from './CartProvider';

const Navbar: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, handleUpdateQuantity, handleRemoveFromCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = () => {
    const phoneNumber = "254791281264";
    let message = "Hello Nyams Hardware, I would like to place an order.\n\nItems:\n";

    cart.forEach(item => {
      const lineTotal = item.price * item.quantity;
      message += `- ${item.name} x ${item.quantity} - KES ${lineTotal.toLocaleString()}\n`;
    });

    message += `\nTotal: KES ${cartTotal.toLocaleString()}\n\n`;
    message += "Please advise on payment and delivery.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ease-in-out px-6 py-4 rounded-full flex items-center justify-between
          ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100' : 'bg-white shadow-md'}`}
      >
        <div className="flex items-center gap-2">
          <div className="bg-secondary text-white p-1.5 rounded-full">
            <Hammer size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-secondary">Nyams</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-primary transition-colors">Home</a>
          <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-primary transition-colors">Products</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-colors">Contact</a>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/podcasts" className="hover:text-primary transition-colors">Podcasts</Link>
          <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
        </div>

        {/* Action Buttons (Visible on Mobile & Desktop) */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
          >
            <ShoppingCart size={20} className="text-secondary group-hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white animate-bounce-slow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="text-secondary" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-6 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-6 p-2 text-secondary hover:bg-gray-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">Home</a>
          <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">Products</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">Contact</a>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">Blog</Link>
          <Link href="/podcasts" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">Podcasts</Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">Gallery</Link>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100">
              <h2 className="text-lg md:text-xl font-bold text-secondary">Your Cart ({cartCount})</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingCart size={64} className="opacity-20" />
                  <p>Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-primary font-medium hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 md:gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-semibold text-secondary text-sm line-clamp-2 leading-tight">{item.name}</h3>
                          <p className="text-[10px] md:text-xs text-gray-500 mt-1">{item.category}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                          >
                            <Minus size={12} className="text-gray-600" />
                          </button>
                          <span className="text-xs font-bold min-w-[1.5rem] text-center text-black">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                          >
                            <Plus size={12} className="text-gray-600" />
                          </button>
                        </div>
                        <p className="font-bold text-sm text-secondary">
                          Ksh {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-4 md:p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Subtotal</span>
                    <span>Ksh {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-secondary pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>Ksh {cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-green-200"
                >
                  <MessageCircle size={20} />
                  Checkout via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                  <ShieldCheckIcon size={12} /> Direct Order Confirmation
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const ShieldCheckIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export default Navbar;
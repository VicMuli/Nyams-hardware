"use client";

import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Plus, Minus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from './CartProvider';

const ProductSection: React.FC = () => {
  const { handleAddToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<'Plumbing' | 'Electrical' | 'Paints'>('Plumbing');

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="bg-accent/30 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Best Quality Products</h2>
            <p className="text-gray-500">
              There are many variations of hardware materials available, tailored to your specific project needs.
            </p>
          </div>

          {/* Controls / Tabs */}
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
              {(['Plumbing', 'Electrical', 'Paints'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-gray-500 hover:text-secondary'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { handleAddToCart } = useCart();
  const [quantity, setQuantity] = useState<number | string>(1);
  const [isAdded, setIsAdded] = useState(false);

  const getQuantityNum = () => (typeof quantity === 'number' ? quantity : 1);

  const increment = () => setQuantity(getQuantityNum() + 1);
  const decrement = () => setQuantity(Math.max(1, getQuantityNum() - 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setQuantity('');
      return;
    }
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1) {
      setQuantity(num);
    }
  };

  const handleBlur = () => {
    if (quantity === '' || quantity === 0) {
      setQuantity(1);
    }
  };

  const handleAdd = () => {
    const finalQty = getQuantityNum();
    handleAddToCart(product, finalQty);
    setQuantity(1); // Reset after adding
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const currentPrice = product.price * getQuantityNum();

  return (
    <div className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-[480px]">
      {/* Updated Image Container for better visibility of product shapes */}
      <div className="relative h-[240px] w-full rounded-[1.5rem] overflow-hidden bg-white border border-gray-100 mb-4 p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-gray-900/5 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary border border-gray-200">
          {product.category}
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-lg text-secondary line-clamp-2 mb-2">{product.name}</h3>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium">Total Price</span>
              <span className="text-xl font-bold text-secondary">
                Ksh {currentPrice.toLocaleString()}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1 border border-gray-100">
              <button
                onClick={decrement}
                className="w-8 h-8 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
              >
                <Minus size={14} />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="w-12 text-center bg-transparent outline-none font-bold text-sm text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                onClick={increment}
                className="w-8 h-8 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            disabled={isAdded}
            className={`w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-md ${isAdded
              ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-200'
              : 'bg-[#A08666] text-white hover:bg-secondary shadow-[#A08666]/20'
              }`}
          >
            {isAdded ? (
              <>
                <Check size={16} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
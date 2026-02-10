import React from 'react';
import { Truck, ShieldCheck, DollarSign } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between gap-8 md:divide-x md:divide-gray-100">
        
        <div className="flex items-center gap-6 flex-1">
          <div className="bg-accent p-4 rounded-2xl shrink-0">
            <Truck size={32} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Fast Countrywide Shipping</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Reliable delivery to your construction site or doorstep anywhere in Kenya.</p>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-1 md:pl-8">
          <div className="bg-accent p-4 rounded-2xl shrink-0">
            <ShieldCheck size={32} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Best Quality Product</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We partner with certified manufacturers to ensure durability and safety.</p>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-1 md:pl-8">
          <div className="bg-accent p-4 rounded-2xl shrink-0">
            <DollarSign size={32} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Super Affordable Price</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Get wholesale pricing on retail quantities. Value for your money.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
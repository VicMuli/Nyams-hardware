import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* Left: Image */}
        <div className="relative h-[400px] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
            alt="Hardware tools workshop" 
            className="w-full h-full object-cover"
          />
           <div className="absolute bottom-12 left-12 flex items-center gap-4">
               <div className="bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center gap-4 animate-bounce-slow">
                  <button className="w-8 h-8 rounded-full bg-[#A08666] text-white flex items-center justify-center">
                    <Plus size={16} />
                  </button>
                  <div>
                    <p className="font-bold text-secondary">Industrial Set</p>
                    <p className="text-xs text-gray-500">In Stock</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
               </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="bg-[#A08666] p-12 lg:p-20 flex flex-col justify-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Experienced in making your home more modern and comfortable
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            We have helped thousands of customers by making their homes more modern and comfortable. Don't let yourself have any doubts about using quality products from Nyams Hardware.
          </p>
          <div className="flex gap-4">
             <button className="bg-white text-[#A08666] px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors">
               Learn More
             </button>
             <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors">
               Contact Us
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoSection;
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="text-4xl font-bold text-secondary max-w-lg">
          Which is what our Popular Customers are saying
        </h2>
        <div className="hidden md:block">
           <p className="text-gray-400 text-sm max-w-xs text-right">
             Trusted by over 12,000 satisfied homeowners and contractors in Kenya.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div key={testimonial.id} className="relative pt-8">
             {/* Connector Line decoration for desktop */}
             {idx !== TESTIMONIALS.length - 1 && (
               <div className="hidden md:block absolute top-20 right-[-1rem] w-8 h-[2px] bg-gray-200 z-0" />
             )}
             
             <div className="flex items-start gap-4 mb-4">
               <img 
                 src={testimonial.avatar} 
                 alt={testimonial.name} 
                 className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
               />
               <div>
                 <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                 <div className="flex text-[#A08666] text-xs mt-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={12} fill={i < testimonial.stars ? "currentColor" : "none"} className={i < testimonial.stars ? "" : "text-gray-300"} />
                   ))}
                 </div>
               </div>
             </div>
             
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 relative">
               {/* Tiny triangle for speech bubble */}
               <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-t border-l border-gray-50 transform rotate-45"></div>
               <p className="text-gray-500 text-sm leading-relaxed">
                 "{testimonial.content}"
               </p>
               <p className="text-xs text-[#A08666] font-medium mt-4 uppercase tracking-wider">{testimonial.role}</p>
             </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
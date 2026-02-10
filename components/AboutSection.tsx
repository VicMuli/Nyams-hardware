import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white rounded-[3rem] my-12 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
           <span className="text-[#A08666] font-semibold tracking-wider uppercase text-sm">About Us</span>
           <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
             Building Trust Through Quality Hardware Since 2010
           </h2>
           <p className="text-gray-500 leading-relaxed text-lg">
             At Nyams Hardware, we don't just sell tools; we help build dreams. What started as a small family shop has grown into Kenya's premier destination for high-quality plumbing, electrical, and paint supplies.
           </p>
           <p className="text-gray-500 leading-relaxed text-lg">
             We believe in sourcing only the best original products to ensure the longevity and safety of your construction projects. Our team of experts is dedicated to guiding you through every step of your renovation or build.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-accent rounded-full text-secondary"><ShieldCheck size={24} /></div>
                 <div>
                   <h4 className="font-bold text-lg">Genuine Parts</h4>
                   <p className="text-sm text-gray-500">100% authentic brands</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-accent rounded-full text-secondary"><Users size={24} /></div>
                 <div>
                   <h4 className="font-bold text-lg">Expert Support</h4>
                   <p className="text-sm text-gray-500">Professional advice</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="flex-1 relative">
           <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
             <img 
               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000" 
               alt="Nyams Hardware Shop Interior" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
           </div>
           {/* Floating badge */}
           <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <p className="text-4xl font-bold text-[#A08666]">13+</p>
              <p className="text-secondary font-medium">Years of Experience</p>
           </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
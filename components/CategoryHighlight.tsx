import React from 'react';

const CategoryHighlight: React.FC = () => {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
        
        {/* Large Vertical Card (Left) */}
        <div className="relative group rounded-3xl overflow-hidden h-[400px] md:h-full bg-[#E5E5E5]">
          <img 
            src="https://drive.google.com/thumbnail?id=16gknH0MVaIJZqmwzXryjXZUewYVFXxm2&sz=w1000" 
            alt="Plumbing" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-8 flex flex-col justify-end">
            <span className="text-gray-300 text-sm mb-2 font-medium">#Plumbing</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Modern Solutions <br/> For Your Bathroom
            </h2>
          </div>
        </div>

        {/* Right Column - Split Vertically */}
        <div className="flex flex-col gap-8 h-full">
          
          {/* Top Right */}
          <div className="relative group rounded-3xl overflow-hidden flex-1 min-h-[250px] bg-white border border-gray-100 flex items-center">
            <div className="p-8 z-10 w-2/3">
              <span className="text-gray-500 text-sm mb-2 block font-medium">#Electrical</span>
              <h2 className="text-secondary text-2xl font-bold mb-4">
                Light Up <br/> Your World
              </h2>
            </div>
            <img 
              src="https://drive.google.com/thumbnail?id=1mYdlB8OS8y0CZeE6Uxg8P2Z0wH0KhSxX&sz=w800" 
              alt="Electrical" 
              className="absolute right-0 top-0 w-2/3 h-full object-cover -mr-12 md:-mr-8"
            />
          </div>

          {/* Bottom Right - Paints */}
          <div className="relative group rounded-3xl overflow-hidden flex-1 min-h-[250px] bg-white border border-gray-100 flex items-center">
             <img 
              src="https://drive.google.com/thumbnail?id=178kbmFRXtbUefvR91ZnJb7B6lHbhn1Q8&sz=w800" 
              alt="Paints" 
              className="absolute left-0 top-0 w-[55%] h-full object-cover"
            />
             <div className="p-8 z-10 w-[45%] ml-auto text-right">
              <span className="text-gray-500 text-sm mb-2 block font-medium">#Paints</span>
              <h2 className="text-secondary text-2xl font-bold mb-4">
                Express Life <br/> Through Color
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryHighlight;
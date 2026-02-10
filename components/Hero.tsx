import React from 'react';

const Hero: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full bg-secondary text-white pt-32 pb-24 md:pt-48 md:pb-32 px-6 rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-800/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Build Your <br/>
            <span className="text-primary">Dream Projects</span> <br/>
            With Us
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            We supply high-quality plumbing, electrical, and paint materials to turn your house into a home.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#products" onClick={scrollToProducts} className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2">
              Shop Now
            </a>
          </div>

          <div className="flex gap-8 pt-8 border-t border-gray-800 mt-8">
            <div>
              <p className="text-3xl font-bold">15</p>
              <p className="text-gray-500 text-sm">Total Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1k+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Hero Image / Composition */}
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          {/* Main Hero Image */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://drive.google.com/thumbnail?id=1jSBPRMUTgFzZBZ2V-Ty_YbcmSI58fJKl&sz=w1200" 
              alt="Hardware Store Interior" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
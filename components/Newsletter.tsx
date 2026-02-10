import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-accent rounded-[3rem] p-12 md:p-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8">
          Subscribe to our newsletter and <br/> grab <span className="text-[#A08666]">30% Off</span>
        </h2>
        
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 p-2 bg-white rounded-full shadow-lg">
          <input 
            type="email" 
            placeholder="Your Email..." 
            className="flex-1 px-6 py-3 rounded-full outline-none text-gray-700 bg-transparent"
          />
          <button className="bg-[#A08666] hover:bg-secondary text-white px-8 py-3 rounded-full font-bold transition-colors shadow-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
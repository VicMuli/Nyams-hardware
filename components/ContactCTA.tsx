import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-[#F5F5F0] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-sm border border-[#A08666]/10">

        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A08666]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A08666]/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 relative z-10">
          Have questions about your project?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-10 relative z-10">
          Our team is ready to assist you with quotes, product availability, and technical advice. Chat with us directly for the fastest response.
        </p>

        <div className="flex flex-col items-center w-full max-w-md gap-4 relative z-10">
          <a
            href="https://wa.me/254791281264"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center bg-black text-white hover:bg-gray-800 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 items-center gap-3 shadow-xl group"
          >
            <MessageCircle className="group-hover:animate-bounce" />
            Talk to us on WhatsApp
          </a>

          <span className="text-gray-400 font-medium text-sm">or</span>

          <a
            href="tel:0791281264"
            className="w-full flex justify-center bg-[#A08666] text-white hover:bg-[#8a7358] px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 items-center gap-3 shadow-xl group"
          >
            <Phone className="group-hover:animate-bounce" />
            Call Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
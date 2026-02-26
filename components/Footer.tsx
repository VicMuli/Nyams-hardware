"use client";

import React from 'react';
import { Hammer, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const preventDefault = (e: React.MouseEvent) => e.preventDefault();

  return (
    <footer className="bg-black text-white pt-24 pb-12 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black p-2 rounded-full">
              <Hammer size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight">Nyams Hardware</span>
          </div>

          <div className="flex gap-6">
            <a href="#" onClick={preventDefault} className="hover:text-[#A08666] transition-colors"><Instagram size={24} /></a>
            <a href="#" onClick={preventDefault} className="hover:text-[#A08666] transition-colors"><Facebook size={24} /></a>
            <a href="#" onClick={preventDefault} className="hover:text-[#A08666] transition-colors"><Twitter size={24} /></a>
            <a href="#" onClick={preventDefault} className="hover:text-[#A08666] transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>PRP3+V82, Woodvale Grv</li>
              <li>Nairobi, Kenya</li>
              <li><a href="mailto:info@nyamshardware.com" className="hover:text-white transition-colors">info@nyamshardware.com</a></li>
              <li><a href="tel:+254791281264" className="hover:text-white transition-colors">+254 791 281 264</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm mt-20">
          © {new Date().getFullYear()} Nyams Hardware. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
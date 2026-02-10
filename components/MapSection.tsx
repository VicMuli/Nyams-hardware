import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:pb-24">
      <div className="bg-white rounded-[3rem] p-4 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
        
        <div className="flex-1 space-y-6 p-4">
          <h2 className="text-3xl font-bold text-secondary">Visit Our Store</h2>
          <p className="text-gray-500">
            Come visit us in person to see our wide range of products and get expert advice from our staff.
          </p>
          
          <div className="flex items-start gap-4 mt-6">
            <div className="bg-accent p-3 rounded-full text-secondary shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-secondary">Location</h4>
              <p className="text-gray-500 mt-1">PRP3+V82, Woodvale Grv, Nairobi</p>
              <a 
                href="https://maps.google.com/?q=PRP3+V82,+Woodvale+Grv,+Nairobi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A08666] font-semibold text-sm mt-2 inline-block hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="flex-[2] h-[400px] w-full rounded-[2rem] overflow-hidden bg-gray-100 relative">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?q=PRP3%2BV82%2C%20Woodvale%20Grv%2C%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Nyams Hardware Location"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
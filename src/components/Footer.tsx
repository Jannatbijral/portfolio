import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Jannat Kour Bijral</p>
            <p className="text-sm text-gray-300">Linux Enthusiast | Cybersecurity Learner | Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>in {currentYear}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;